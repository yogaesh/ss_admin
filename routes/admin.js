var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var basicAuth = require('express-basic-auth');
var config = require('../config');

var users = {};
users[config.admin.user] = config.admin.pass;

var staticUserAuth = basicAuth({
    users: users,
    challenge: true
});

function prepareMongoIds(inputArray){
  var outputArray = [];
  for(var index = 0; index < inputArray.length; index++){
    outputArray.push(mongo.ObjectID(inputArray[index]));
  }
  return outputArray;
}

/* GET users listing. */
router.get('/', staticUserAuth, function(req, res, next) {
  res.redirect('/home');
});

/* Get home content - all temples */
router.get('/home', staticUserAuth, function(req, res, next) {

  // Connection URL
  //var url = 'mongodb://localhost:27017/sarvakshetra';
  var url = config.db.url;
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    if(err){
      res.status(500).json({message: "Unable to retrieve details"});
    }
    console.log("Connected correctly to server");
    var collection = db.collection('temples');
    collection.find({}).toArray(function(err, docs) {
        //res.send(JSON.stringify(docs));
        res.render("admin_home", {temples: docs});
    });
    db.close();
  });

});

/* Go to new temple view */
router.get('/temples/new', staticUserAuth, function(req, res, next) {
  res.render("temple_details", {templeData: '{}'});
});

/* Create a new temple */
router.put('/temples', staticUserAuth, function(req, res, next){

  if(!req.body){
    console.log("Body data missing");
    res.status(400).json({message: "Bad Request: Missing required payload"});
    return;
  }

  var payload = req.body;
  payload.created_at = new Date().toString();
  payload.modified_at = "";
  payload.created_by = "chitragupta";
  payload.modified_by = "";
  payload.status = "active";

  // Connection URL
  //var url = 'mongodb://localhost:27017/sarvakshetra';
  var url = config.db.url;
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    if(err){
      res.status(500).json({message: "Unable to add temple"});
      return;
    }
    var collection = db.collection('temples');

    collection.insert(req.body, function(err, result) {
      if(err){
        console.log("Error is: " + err);
        res.status(500).json({message: "Could not create temple"});
      }else {
        if(result.result.n != 1){
          res.status(500).json({message: "Could not create temple"});
        }
        else{
          res.status(200).json({message: "Successfully created temple"});
        }
      }
    });

    db.close();
  });
});

/* GET details of a temple */
router.get('/temples/:id', staticUserAuth, function(req, res, next) {
  if(!req.query.action){
    res.status(400).json({message: "Bad Request: Missing required parameter - action"});
  }
  if(!req.params.id){
    res.status(400).json({message: "Bad Request: Missing required parameter - id"});
  }
  // Connection URL
  //var url = 'mongodb://localhost:27017/sarvakshetra';
  var url = config.db.url;
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    if(err){
      res.status(500).json({message: "Unable to retrieve details"});
    }
    console.log("Connected correctly to server");
    var collection = db.collection('temples');
    if(req.query.action == "view" || req.query.action == "edit"){
      collection.find({_id: mongo.ObjectID(req.params.id)}).toArray(function(err, docs) {
          if(err){
            res.status(500).json({message: "Unable to retrieve details"});
          }
          else{
            res.render("temple_details", {templeData: docs[0]});
          }

      });
    }
    else{
      res.status(400).json({message: "Bad Request: Invalid action specified"});
    }

    db.close();
  });

});

router.post('/temples/:id', function(req, res, next) {

  if(!req.params.id){
    console.log("Id missing");
    res.status(400).json({message: "Bad Request: Missing required parameter - id"});
    return;
  }

  if(!req.body){
    console.log("Body data missing");
    res.status(400).json({message: "Bad Request: Missing required payload"});
    return;
  }
  // Connection URL
  //var url = 'mongodb://localhost:27017/sarvakshetra';
  var url = config.db.url;
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    if(err){
      res.status(500).json({message: "Unable to retrieve details"});
      return;
    }
    console.log("Connected correctly to server");
    var collection = db.collection('temples');

    collection.update({ _id : mongo.ObjectID(req.params.id) }, req.body, function(err, result) {
      if(err){
        console.log("Error is: " + err);
        res.status(500).json({message: "Could not update temple with id: " + req.params.id});
      }else {
        if(result.result.n != 1){
          res.status(500).json({message: "Could not find temple with id: " + req.params.id});
        }
        else{
          console.log("Update successful");
          res.status(200).json({message: "Successfully updated temple id: " + req.params.id});
        }
      }
    });

    db.close();
  });

});

router.delete('/temples', function(req, res, next) {
  if(!req.body){
    console.log("Body data missing");
    res.status(400).json({message: "Bad Request: Missing required payload"});
    return;
  }
  // Connection URL
  var url = 'mongodb://localhost:27017/sarvakshetra';
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    if(err){
      res.status(500).json({message: "Unable to retrieve details"});
    }
    console.log("Connected correctly to server");
    var collection = db.collection('temples');

    var templesToDelete = prepareMongoIds(req.body);
    console.log(templesToDelete);

    collection.remove({ '_id' : {'$in': templesToDelete}}, function(err, result){
      if(err || result.result.n === 0){
        console.log(JSON.stringify(result));
        res.status(500).json({message: "Deleting one or more temples failed. Please try later."});
      }else{
          res.status(200).json({message: "Successfully deleted the selected temples"});
      }
    });
  });
});


module.exports = router;
