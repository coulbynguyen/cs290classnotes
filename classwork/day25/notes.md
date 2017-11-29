use partial to render the header
=============================================
creating the 404.handlebars file
{{> header}}

<main class="error-page">
  <h2>404</h2>

</main>




======================================================
  res.status(404).render('404');
======================================================

npm install --save body-parser
<!-- XMLHttpRequest -->
=====================================================
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/people/:personID/addPhoto', function(req, res, next){
  var personID = req.params.personId;
  if(peopleData[personId]){
    console.log("== request body:", req.body);
  }
  else{
    next();
  }
});

app.post('*', function(req, res){
  res.status(404).send("POST not allowed");
  });
**================================================
on client side js
=================================================
function getPersonId(){
  var currentURL = window.location;
  var urlComponents = currentURL.split('/');
  if(urlComponents[0] === "" && urlComponents[1] === "people"){
    return urlComponents[2];
  }
  else{
    return null;
  }

}

var postRequest = new XMLHttpRequest();
postRequest.open('POST', )
