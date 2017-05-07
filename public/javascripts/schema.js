var schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {},
    "id": "http://example.com/example.json",
    "required" : ["website", "email", "payment_details"],
    "properties": {
      "localized_details": {
          "id": "/properties/localized_details",
          "title": "Details in a New Language",
          "description": "Please enter ONE set of details per language.",
          "minItems": 1,
          "items": {
              "id": "/properties/localized_details/items",
              "title": "Details",
              "required": ["language", "details"],
              "properties": {
                "language": {
                    "id": "/properties/localized_details/items/properties/language",
                    "type": "string",
                    "title": "Language",
                    "enum" : ["English", "தமிழ்", "తెలుగు", "മലയാളം", "ಕನ್ನಡ"]
                },
                "details": {
                      "id": "/properties/localized_details/items/properties/details",
                      "title": "Details",
                      "required": ["name", "description_short", "main_deity", "address", "contact_details"],
                      "properties": {

                        "name": {
                            "id": "/properties/localized_details/items/properties/details/properties/name",
                            "type": "string",
                            "title": "Name of the temple",
                            "description": "Eg: Tirunallar Saniswaran Temple"
                        },
                        "other_names": {
                            "id": "/properties/localized_details/items/properties/details/properties/other_names",
                            "type": "string",
                            "title": "Other names for the temple",
                            "description": "Eg: Dharbaranyeswarar Temple"
                        },
                        "description_short": {
                            "id": "/properties/localized_details/items/properties/details/properties/description_short",
                            "type": "string",
                            "title": "Brief Description",
                            "description": "Eg: A Siva temple dedicated to Lord Sani(saturn), counted as one of the nine Navagraha temples. The greatness of the Thirunallur temple is attributed to the unique idol of Lord Shani as he stands blessing the devotee – abhayahastham."
                        },
                        "description_long": {
                            "id": "/properties/localized_details/items/properties/details/properties/description_long",
                            "type": "string",
                            "title": "Detailed Description",
                            "description": "A temple dedicated to Lord Sani (saturn), located in Tirunallar in Karaikal district of Pondicherry, India. The presiding deity is Dharbaranyeswarar(Lord Siva) and is believed to have been made of dharba grass. The worship is also centered around Saniswarar (saturn), originally treated as the door keeper of the shrine. According to Hindu mythology, saturn resides in each rasi(zodiac) for two and half years. The belief is the malevolent planet is worshipped before entering the inner sanctum of Lord Siva.It has been revered by the hymns of 7th century Tamil saivite poets and is classified as one of the 275 temples categorized under 'Paadal Petra Sthalam'. Constructed by chozha kings, this Siva temple is counted as one of the Navagraha Temples for planet Saturn. Tirugnana Sambandar, a 7th-century Tamil Saivite poet, venerated Naganathar in ten verses in Tevaram, compiled as the First Tirumurai. Appar, a contemporary of Sambandar, also venerated Dharbaranyeswarar in 10 verses in Tevaram, compiled as the Fifth Tirumurai. It is the staunch belief and experience too that those afflicted by the adverse effects of Saturn get a relief after praying to the Saturn in the Darbaranyeswarar temple. They also come here for repentance from sins, curing of diseases, getting oratory skills. They pray to Darbaranyeswarar for peaceful marriage alliances. Above all they get total mental peace.",
                            "format": "text"
                        },
                        "sthala_purana": {
                            "id": "/properties/localized_details/items/properties/details/properties/sthala_purana",
                            "type": "string",
                            "title": "Sthala Purana",
                            "description": "This place is called 'Nallaaru' because famous king Nala offered his prayers here and got out of the malefic spell cast by Lord Saneeswar. When the verses composed at this place termed 'Bogamaartha Poonmulaiyaal', by saint Thirugnanasammandar, was thrown into fire, as a part of philosophical debate with jains over the supremacy of faiths, the manuscripts remained unaffected by fire, deeprooting Saiva philosophy.",
                            "format": "text"
                        },
                        "main_deity": {
                            "id": "/properties/localized_details/items/properties/details/properties/main_deity",
                            "type": "string",
                            "title": "Main Deity",
                            "enum" : ["Angaraka", "Agni", "Bhairava", "Chandra", "Brahma","Budha", "Durga", "Ganapathi", "Gayathri", "Guru", "Hanuman", "Hayagreeva", "Indhra", "Iyappa", "Kethu", "Krishna", "Lakshmi", "Navagraha", "Parvathi", "Ragavendhra", "Rahu", "Rama", "Sai Baba", "Santhoshi Matha", "Sarabeshwara", "Saraswathi","Shiva", "Subramanya", "Sukra", "Surya", "Varuna", "Venus","Vishnu", "Yama"]
                        },
                        "renown_for_deity": {
                            "id": "/properties/localized_details/items/properties/details/properties/renown_for_deity",
                            "type": "string",
                            "title": "Renown for Deity",
                            "description": "Eg: Sanishwara"
                        },
                        "established": {
                            "id": "/properties/localized_details/items/properties/details/properties/established",
                            "type": "string",
                            "title": "Year/Century Consecrated",
                            "description": "Eg: 7th Century AD"
                        },
                        "address": {
                              "id": "/properties/localized_details/items/properties/details/properties/address",
                              "title": "Address",
                              "properties": {
                                  "addressee": {
                                      "id": "/properties/localized_details/items/properties/details/properties/address/properties/addressee",
                                      "type": "string",
                                      "title" : "Addressee",
                                      "description": "Eg: Sri Dharbaranyeswaraswamy Devasthanam"
                                  },
                                  "line1": {
                                      "id": "/properties/localized_details/items/properties/details/properties/address/properties/line1",
                                      "type": "string",
                                      "title": "Address Line 1",
                                      "description": "Address line 1"
                                  },
                                  "line2": {
                                      "id": "/properties/localized_details/items/properties/details/properties/address/properties/line2",
                                      "type": "string",
                                      "title": "Address Line 2",
                                      "description": "Address line 2"
                                  },
                                  "city": {
                                      "id": "/properties/localized_details/items/properties/details/properties/address/properties/city",
                                      "type": "string",
                                      "title": "City",
                                      "description": "City"
                                  },
                                  "district": {
                                      "id": "/properties/localized_details/items/properties/details/properties/address/properties/district",
                                      "type": "string",
                                      "title": "District",
                                      "description": "District"
                                  },
                                  "state": {
                                      "id": "/properties/localized_details/items/properties/details/properties/address/properties/state",
                                      "type": "string",
                                      "title": "State",
                                      "description": "State"
                                  },
                                  "country": {
                                      "id": "/properties/localized_details/items/properties/details/properties/address/properties/country",
                                      "type": "string",
                                      "title": "Country",
                                      "description": "Country"
                                  },
                                  "zipcode": {
                                      "id": "/properties/localized_details/items/properties/details/properties/address/properties/zipcode",
                                      "type": "string",
                                      "title": "Zip/Postal Code",
                                      "description": "Postal Code"
                                  }
                              },
                              "type": "object"
                          },
                          "contact_details": {
                              "id": "/properties/localized_details/items/properties/details/properties/contact_details",
                              "title": "Contact Details",
                              "properties": {
                                  "addressee": {
                                      "id": "/properties/localized_details/items/properties/details/properties/contact_details/properties/addressee",
                                      "type": "string",
                                      "title": "Addressee",
                                      "description": "The Executive Officer (Temples)"
                                  },
                                  "fax": {
                                      "id": "/properties/localized_details/items/properties/details/properties/contact_details/properties/fax",
                                      "type": "string",
                                      "title": "Fax",
                                      "description": "Eg: +914368236504"
                                  },
                                  "mobile": {
                                      "id": "/properties/localized_details/items/properties/details/properties/contact_details/properties/mobile",
                                      "type": "string",
                                      "title": "Mobile Phone",
                                      "description": "Eg: +919443323433"
                                  },
                                  "phone": {
                                      "id": "/properties/localized_details/items/properties/details/properties/contact_details/properties/phone",
                                      "type": "string",
                                      "title": "Land Line",
                                      "description": "Eg: +914368236530/236504"
                                  }
                              },
                              "type": "object"
                          },

                          "daily_schedule": {
                              "id": "/properties/localized_details/items/properties/details/properties/daily_schedule",
                              "title": "Daily Schedule",
                              "items": {
                                  "id": "/properties/localized_details/items/properties/details/properties/daily_schedule/items",
                                  "properties": {
                                      "time": {
                                          "id": "/properties/localized_details/items/properties/details/properties/daily_schedule/items/properties/time",
                                          "type": "string",
                                          "title": "Time",
                                          "description": "Eg: 05:00 AM - 06:00 AM"
                                      },
                                      "event": {
                                          "id": "/properties/localized_details/items/properties/details/properties/daily_schedule/items/properties/event",
                                          "type": "string",
                                          "title": "Event",
                                          "description": "Eg: Udhaya Shanthi"
                                      }
                                  },
                                  "type": "object"
                              },
                              "type": "array"
                          },
                          "directions": {
                              "id": "/properties/localized_details/items/properties/details/properties/directions",
                              "type": "string",
                              "format": "text",
                              "title": "Directions (Guidance for visitors)",
                              "description": "Eg: Thirunallaru Shani Temple is located about 5 km west of Karaikal in Pondicherry. The temple lies on the Karaikal – Mayiladuthurai and Karaikal – Kumbakonam road. There are direct buses from Chennai to Thirunallar. The easiest route is from Chennai to Thirunallar is via Tindivanam, Pondicherry, Chidambaram, Tranquebar, Karaikal. Nearest Railway Station to Thirunallar Shani Temple is the Mayiladuthurai Railway Station."
                          },
                          "events": {
                              "id": "/properties/localized_details/items/properties/details/properties/events",
                              "title": "Events",
                              "description": "Details on temple events and festivities",
                              "items": {
                                  "id": "/properties/localized_details/items/properties/details/properties/events/items",
                                  "properties": {
                                    "name": {
                                        "id": "/properties/localized_details/items/properties/details/properties/events/items/properties/name",
                                        "type": "string",
                                        "title": "Event Name",
                                        "description": "Eg: Chariot"
                                    },
                                      "description": {
                                          "id": "/properties/localized_details/items/properties/details/properties/events/items/properties/description",
                                          "type": "string",
                                          "title": "Event Description",
                                          "description": "Eg: Temple chariot run"
                                      },
                                      "time_of_year": {
                                          "id": "/properties/localized_details/items/properties/details/properties/events/items/properties/time_of_year",
                                          "type": "string",
                                          "title": "Event Timing",
                                          "description": "Eg: Second Poornima of Shravana month (August-September). Please visit temple website for exact dates in current year."
                                      }
                                  },
                                  "type": "object"
                              },
                              "type": "array"
                          },
                          "other_attractions": {
                              "id": "/properties/localized_details/items/properties/details/properties/other_attractions",
                              "title": "Other Attractions",
                              "description": "Details on attractions/places to visit in and around the temple",
                              "items": {
                                  "id": "/properties/localized_details/items/properties/details/properties/other_attractions/items",
                                  "properties": {
                                      "title": {
                                          "id": "/properties/localized_details/items/properties/details/properties/other_attractions/items/properties/title",
                                          "type": "string",
                                          "title": "Name of the Attraction",
                                          "description": "Eg: Holy plant at the temple"
                                      },
                                      "description": {
                                          "id": "/properties/localized_details/items/properties/details/properties/other_attractions/items/properties/description",
                                          "type": "string",
                                          "title": "Description",
                                          "description": "The holy plant of the temple is ‘Dharpai’ grass (Kusa grass). In ancient times the Almighty emerged out of Dharpai grass and hence got the name Darparaneseshwara. The Dharpai bushes are located in the Northern Side of the temple."
                                      }
                                  },
                                  "type": "object"
                              },
                              "type": "array"
                          },
                          "peak_times": {
                              "id": "/properties/localized_details/items/properties/details/properties/peak_times",
                              "title": "Peak (Busy) Times",
                              "description": "Details on the peak/busy times, if applicable. Some temples have certain days, months or occasions that are considered auspicious or special, resulting in an increase in the number of devotees visiting the temple.",
                              "properties": {
                                  "days_of_week": {
                                      "id": "/properties/localized_details/items/properties/details/properties/peak_times/properties/days_of_week",
                                      "title": "Days of Week",
                                      "items": {
                                          "id": "/properties/localized_details/items/properties/details/properties/peak_times/properties/days_of_week/items",
                                          "type": "string",
                                          "description": "Eg: Saturday"
                                      },
                                      "type": "array"
                                  },
                                  "months_of_year": {
                                      "id": "/properties/localized_details/items/properties/details/properties/peak_times/properties/months_of_year",
                                      "title": "Months of Year",
                                      "items": {
                                          "id": "/properties/localized_details/items/properties/details/properties/peak_times/properties/months_of_year/items",
                                          "type": "string",
                                          "description": "Eg: January"
                                      },
                                      "type": "array"
                                  },
                                  "occasions": {
                                      "id": "/properties/localized_details/items/properties/details/properties/peak_times/properties/occasions",
                                      "title": "Occasions",
                                      "items": {
                                          "id": "/properties/localized_details/items/properties/details/properties/peak_times/properties/occasions/items",
                                          "type": "string",
                                          "description": "Eg: Saturn Transit"
                                      },
                                      "type": "array"
                                  }
                              },
                              "type": "object"
                          },
                          "shrines": {
                              "id": "/properties/localized_details/items/properties/details/properties/shrines",
                              "title": "Shrines",
                              "description": "List out all shrines in your temple. If the temple is huge and has hundreds of shrines, focus on the important ones.",
                              "items": {
                                  "id": "/properties/localized_details/items/properties/details/properties/shrines/items",
                                  "properties": {
                                      "name_of_deity": {
                                          "id": "/properties/localized_details/items/properties/details/properties/shrines/items/properties/name_of_deity",
                                          "type": "string",
                                          "title": "Name of Deity",
                                          "description": "Darbaranyeswarar"
                                      },
                                      "type_of_deity": {
                                          "id": "/properties/localized_details/items/properties/details/properties/shrines/items/properties/type_of_deity",
                                          "type": "string",
                                          "title": "Type of Deity",
                                          "enum" : ["Angaraka", "Agni", "Bhairava", "Chandra", "Brahma","Budha", "Durga", "Ganapathi", "Gayathri", "Guru", "Hanuman", "Hayagreeva", "Indhra", "Iyappa", "Kethu", "Krishna", "Lakshmi", "Navagraha", "Parvathi", "Ragavendhra", "Rahu", "Rama", "Sai Baba", "Santhoshi Matha", "Sarabeshwara", "Saraswathi","Shiva", "Subramanya", "Sukra", "Surya", "Varuna", "Venus","Vishnu", "Yama", "Other"]
                                      }
                                  },
                                  "type": "object"
                              },
                              "type": "array"
                          },
                          "specialties": {
                              "id": "/properties/localized_details/items/properties/details/properties/specialties",
                              "title": "Specialties",
                              "description": "Does the temple have any specialties? Do people visit the temple for a specific reason? Examples include remedies for a dosha, success in a specific aspect of life, etc.",
                              "items": {
                                  "id": "/properties/localized_details/items/properties/details/properties/specialties/items",
                                  "type": "string",
                                  "title": "Specialty",
                                  "description": "Navagraha Dhosha Remedy"
                              },
                              "type": "array"
                          },
                          "travel_tips": {
                              "id": "/properties/localized_details/items/properties/details/properties/travel_tips",
                              "type": "string",
                              "title": "Travel Tips",
                              "description": "Eg: Saturdays are usually crowded. So, please plan accordingly.",
                              "format": "text"
                          }
                      },
                      "type": "object"
                  }
              },
              "type": "object"
          },
          "type": "array"
      },
      "website": {
          "id": "/properties/website",
          "type": "string",
          "title": "Official Website",
          "format": "uri",
          "description": "Eg: http://thirunallartemple.com/"
      },
      "email": {
          "id": "/properties/email",
          "type": "string",
          "title": "Official Email Address",
          "format": "email",
          "description": "Eg: admin@thirunallartemple.com"
      },
        "avg_annual_visitor_count": {
            "id": "/properties/avg_annual_visitor_count",
            "type": "integer",
            "title": "Avg. Visitor Count (Annual)",
            "description": "Eg: 500"
        },
        "images": {
            "id": "/properties/images",
            "title": "Images",
            "items": {
                "id": "/properties/images/items",
                "type": "string",
                "title": "Image URL",
                "format": "uri",
                "description": "Eg: http://static.panoramio.com/photos/large/46879516.jpg"
            },
            "type": "array"
        },
        "videos": {
            "id": "/properties/videos",
            "items": {
                "id": "/properties/videos/items",
                "type": "string",
                "title": "Video URL",
                "format": "uri",
                "description": "Eg: https://www.youtube.com/watch?v=b9KA2-9mHhM"
            },
            "type": "array",
            "title": "Videos"
        },
        "payment_details": {
          "id": "/properties/payment_details",
          "title": "Payment Details",
          "description": "This is the important part. If someone were to donate money, which bank account should they send it to? If you prefer other means of payment, please get in touch with Sarvakshetra admin to figure out the best way forward.",
          "properties": {
            "account_number": {
              "id": "/properties/payment_details/properties/account_number",
              "type": "string",
              "title": "Account Number"
            },
            "bank_name": {
              "id": "/properties/payment_details/properties/bank_name",
              "type": "string",
              "title": "Bank Name"
            },
            "branch": {
              "id": "/properties/payment_details/properties/branch",
              "type": "string",
              "title": "Branch"
            },
            "city": {
              "id": "/properties/payment_details/properties/city",
              "type": "string",
              "title": "City"
            },
            "ifsc_code": {
              "id": "/properties/payment_details/properties/ifsc_code",
              "type": "string",
              "title": "IFSC Code/Routing Number"
            },
            "country": {
              "id": "/properties/payment_details/properties/country",
              "type": "string",
              "title": "Country"
            },
            "state": {
              "id": "/properties/payment_details/properties/state",
              "type": "string",
              "title": "State"
            }
        },
        "type": "object"
      }
    },
    "type": "object"
};
