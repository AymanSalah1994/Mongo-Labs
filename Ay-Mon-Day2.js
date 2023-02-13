 db.instructors.find({})
======================================

db.instructors.find(
    {"salary": {$gte: 4000}} 
    ,
    {"firstName": 1, "salary": 1, _id: 0}
    ) 
//TODO , i print Spaces Here But In terminal They Give me error
==========================================
db.instructors.find({"age": {$lte: 25}})
=====================================
db.instructors.find(
    {
        $and: [
                {"address.city": "Mansoura"},
                {"address.street":{$in:[14, 10]}}
            ]
    }
    , {"firstName": 1, "address": 1, "salary": 1, _id: 0})

// TODO , Case Sensitivity  , Becaue I get Two Different Results 
================================================
db.instructors.find({"courses": {$all: ["js", "jquery"]}})
// It Does not Show me any Kind Of Data 
db.instructors.find({"courses": {$all: ["js", "signalR"]}})
===============================================
db.instructors.find({}, {"firstName": 1, "courses": 1, _id: 0}).forEach(function(person) {
    print(`${person.firstName} \t  ${person.courses.length}`)
})

// I added The Below If For the Undefined Value ,, Count not Working 

db.instructors.find({}, {"firstName": 1, "courses": 1, _id: 0}).forEach(function(person) {
   if (person.firstName != undefined && person.courses != undefined) { print(`${person.firstName} \t  ${person.courses.length}`)}
})

=======================================================
let Persons  = db.instructors.find({
        $and: [
        {"firstName": {$type: "string"}},
        {"lastName": {$type: "string"}},
    ]
    }, {"firstName": 1, "lastName": 1, "age": 1, _id: 0}).sort( { "firstName": 1, "lastName": -1})
    
Persons.forEach(function(person) {
    print(`full name : ${person.firstName}  ${person.lastName}, age =  ${person.age}`)
})
// THIS WORKED WITH ME , No Cursor Exhauseted !!!


//?????????????????????????? This is Not Working 
db.instructors.find({ $and: [ { "firstName": { $type: "string" } }, { "lastName": { $type: "string" } }] }, { "firstName": 1, "lastName": 1, "age": 1, _id: 0 }).sort({ "firstName": 1 }).sort({ "lastName": -1 })

==========================================================

db.instructors.deleteMany({"firstName": "ebtesam", "courses": {$size: 5}})

=====================
db.instructors.updateMany({} , {$set:{active:true}} , {})

//////////
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 6,
  modifiedCount: 6,
  upsertedCount: 0
}
//////////
======================================================
 db.instructors.updateMany({courses:"EF" },{ $set:{"courses.$":"jquery"}} ,  {})
 ======================================================
 db.instructors.updateMany(
    {$and:[{"firstName": "noha"}, {"lastName": "hesham"}]},
    {$addToSet:{courses:"jquery"}} ,{})
=======================================
db.instructors.updateOne(
    {$and:[{"firstName": "mazen"}, {"lastName": "mohammed"}]},
    {$unset: {"courses": ""}},
    {})
    
// At First Query it game Me 0 Effect So i Changed it to Mazen 
===============================================
db.instructors.updateMany({"courses": {$size: 3}},{$inc: {"salary": -500}},{})

// I changed it To 4 In order to Take Effect  , 
=======================================================
db.instructors.updateMany({},{$rename: {"address": "fulladdress"}},{})
================================================
db.instructors.updateOne({$and:[{"firstName": "noha"}, {"lastName": "hesham"}]},{$set: {"fullAddress.street": 20}},{})
==========================================

db.createCollection("workers", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["fullName","Salary", "Age" ],
            additionalProperties:false,
            properties: {
                _id:{bsonType: "number"},
                fullName: {
                    bsonType: "string"
                },
                Age:{
                    bsonType: "number", 
                    minimum: 25,
                    maximum: 45,
                },
                Salary:{
                    bsonType: "number",
                    minimum: 2000,
                },
                locations: {
                    bsonType: "array",
                    minItems: 1,
                    uniqueItems: true,
                    items: {
                        bsonType: "string"
                    } // End of Item
                } // Locations 
             } // Props ALL
          } // End Of Schema
       } // Validatoion
})
================================
db.workers.insertOne({_id: 1, "fullName": "Ayman Salah", "Salary": 99999, "Age": 30})

db.workers.insertOne({_id: 1, "fullName": "Ayman Salah", "Salary": 99999, "Age": 30})

db.workers.insertOne({_id: "453", "Salary": 99999, "Age": 30})
db.workers.insertOne({_id: 3, "fullName": 33, "Salary": 100, "age": 30 , locations:[]})
db.workers.insertOne({_id: 324, "fullName": "Samy", "Salary": 22100, "age": 30 , locations:["Egypt"]})
db.workers.find()
