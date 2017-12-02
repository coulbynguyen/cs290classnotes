mongo -u cs290_OnidUsername -p cs290_OnidUsername classmongo.oregonstate.edu/cs290_OnidUsername

================================================
Hierachy
================================================
DB
  Collection
    Document
      Field
================================================
mongo db shell commands <<Press Enter>>
================================================
db.getCollectionNames()

db.peopleData.find()

**inserting data**

db.people.insert({
  personId: "luke",
  name: "Luke Skywalker",
  age: 24,
  photos: []
  })
db.people.find().pretty()

mongo automatically generates a unique id for the object

===================================================
finding people off a personId
===================================================
db.people.find({
  personId: "luke"
  })

db.people.find({ age: { $gte: 65 } })

================================================
searching for people with or
=================================================
db.people.find({ $or: [
  {age: { $gte: 65 } },
  {personId: "luke"}
  ]})

================================================
and
===================================================
$and


================================================
specific find commands
================================================
db.people.find({age: {$gte: 65}},
  {personId: 1, age:1})


=============================================
updating/changing data
============================================
db.people.update(
  { personId: "luke"},
  { $set: {age: 25}}
  )

==========================================
changing everyones data
increment command
=========================================
db.people.updateMany(
  {},
  { $inc: {age: 1}}
  )

============================================
adding item to an object  
===========================================
db.people.update(
  { personId: "luke"},
  { $push: { photos: {
    photoURL: ..Photourl..
    caption: "Robo Luke"
    }
    } }
  )

==========================================
removing item from object
==========================================

db.people.remove({personId: "einstein"})

========================================
CRUD
=======================================
C = Create // insert
R = Read // find
U = Update // update
D = Delete // remove

=======================================
replacing json interactions with mongo db
========================================

===================================
installing a mongo db dependency
===================================
npm install --save mongodb

var MongoClient = require('mongodb').MongoClient

var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;

var mongoConnection;

MongoClient.connect(mongoURL, function(err, connection){
    if(err){
      throw err;
    }
    mongoConnection = connection;
    app.listen(port, function(){
       console.log("== server listening on port:", port);
      });
});
