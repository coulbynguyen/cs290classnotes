var path = require('path');
var express = require('express');
var app = express();
var availablePeople = [
  'luke',
  'beyonce',
  'einstein',
  'ta-nehisi',
  'marie'
]


app.get('/people/:personId', function(req, res, next){
  var personId = req.params.personId;
  if(availablePeople.indexOf(personID) !== -1){
  console.log("==personID:", personId);
  <!-- this is correct but im sick and tired of color res.status(200).sendFile(path.join( __dirname, 'public', 'people.html')); -->
  res.status(200).sendFile(path.join( dirname, 'public', 'people.html'));
  }
  else{
    next();
  }
});

<!-- /people -> public/people.html -->
app.get('/people', function(req, res){
  <!-- this is correct but im sick and tired of color res.status(200).sendFile(path.join( __dirname, 'public', 'people.html')); -->
  res.status(200).sendFile(path.join( dirname, 'public', 'people', personId + '.html'));

});


app.use(express.static('public'));

<!-- app.use('*'. function(req, res){ -->
  <!-- res.status(404).sendFile(path.join(__dirname, 'public', '404.html')); -->
<!-- }); -->

app.listen(8000, function(){
    console.log("==Server Listening on port 8000");
});


<!-- Windows: C:\users\ -->
<!-- Unix: /users/ -->
<!-- /people/luke -> public/people/luke.html -->
<!-- /people/beyonce -> public/people/beyonce.html -->
<!-- parameterized url -->
<!-- /people/:personID -> public/people/publicID.html -->

===========================================================================================================
handlebars is one of the most used templating engines
===========================================================================================================
add a script to the head
have to specify a type to the script
<script src="whatever link the handlebars.js gives you"></script>
<script id="photo-card-template" type="text/x-handlebars-template">
  <section class="photo-card">
    <div class="caption">
      {{caption}}
    </div>
  </section>
</script>

var photoCardTemplate = null;

....

var photoCardTemplateElem = document.getElementById('photo-card-template');
photoCardTemplate = Handlebars.compile(photoCardTemplateElem.innerHTML);
