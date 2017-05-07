function saveTempleData(templeId, container){
  var templeData = JSON.stringify(container.getData());
  if(!container.validate()){
    alert("Invalid entry. Please review and correct the errors");
    return;
  }
  if(!templeId){
    makeAjaxCall("/admin/temples/" + templeId,
                 "PUT",
                 templeData,
                 "/admin/home");
  }else{
    makeAjaxCall("/admin/temples/" + templeId,
                 "POST",
                 templeData,
                 "/admin/home");
  }
}

function toggleHighlight(element){
  var rowid = "tr_" + element.value;
  var row = document.getElementById(rowid);
  var selectedTemples = document.getElementById("selectedList");
  var currentSelected = JSON.parse(selectedTemples.value);
  var deleteButton = document.getElementById("deleteButton");
  if(!row){
    return false;
  }
  if(element.checked){
    row.classList.add('selected');
    currentSelected.push(element.value);
  }else{
    row.classList.remove('selected');
    for(var index = 0; index < currentSelected.length; index++){
      if(currentSelected[index] == element.value){
        currentSelected.splice(index, 1);
      }
    }
  }
  selectedTemples.value = JSON.stringify(currentSelected);
  if(currentSelected.length === 0){
    deleteButton.classList.add("disabled");
  }else{
    deleteButton.classList.remove("disabled");
  }
}

function deleteTemples(){
  var selectedTemples = document.getElementById("selectedList");
  var deleteList = selectedTemples.value;
  if(confirm("The selected temples will be deleted permanently and this cannot be undone. Do you want to continue?")){
    makeAjaxCall("/admin/temples", "DELETE", deleteList, "#");
  }
}

function makeAjaxCall(url, method, templeData, redirectUrl){
  $.ajax({
    url: url,
    type: method,
    dataType: "json",
    data: templeData,
    contentType: "application/json",
    success: function(result){alert(result.message); if(redirectUrl == "#") {window.location.reload();}else{window.location = redirectUrl;}},
    error: function(xhr, ajaxOptions, thrownError){
      alert(JSON.parse(xhr.responseText).message);
    }
  });
}
