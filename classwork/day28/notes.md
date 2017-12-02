===================
start to use mongo in the routes
===================
db.getCollectionNames()

db.peopleData.find().pretty()

=========================
in server.js
=========================

app.get('/people', function(req, res){
    var peopleDataCollection = mongoConnection.collection('peopleData');
    peopleDataCollection.find({}).toArray(function(err, results){
      if(err){
        res.status(500).send("Error fetching people from DB");
      }
      else{
      res.status(200).render('peoplePage', {
          people: results
        });
      }
    });
});


==============================
person page route
=============================
app.get('/people/:personId', function(req,res,next){
  var peopleDataCollection = mongoConnection.collection('peopleData');

  peopleDataCollection.find({ personId: req.params.personId}).toArray(function(err, results){
    if(err){
      res.status(500).send("Error fetching person from DB");
    }
    else if(results.length > 0){
      res.status(200).render('personPage', results[0]);
    }
    else{
      next();
    }
  });
});


==============
=============
app.post('/people/:personId/addPhoto', function(req, res, next){
  if(req.body && req.body.photURL){
    var peopleDataCollection = mongoConnection.collection('peopleData');
    var photoObj = {
      photoURL: req.body.photoURL,
      caption: req.body.caption
    };

    peopleDataCollection.updateOne(
      {personId: req.params.personId},
      {$push: {photos: photoObj}},
      function(err, result){
        if(err){
          res.status(500).send("Error fetching people from DB");
        }
        else{
          res.status(200).send("Success");
        }
      }
      )
  }
});
