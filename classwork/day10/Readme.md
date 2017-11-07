THIS DAY FOCUSED ON OBJECT CREATION AND FUNCTIONS;

document = the entire document
document.body = body node everything encapsulated between the body tags
===========
var body = document.body;
console.log("body.childNodes:", body.childNodes);

var bodyChildren = body.childNodes;
for(var i = 0; i < bodyChildren.length; i++){

}

var bodyFirstChild = body.firstChild;
var bodyLastChild = body.lastChild;

var elem = bodyFirstChild;
while(elem){
  console.log("elem:", elem);
  elem = elem.nextSibling;
}

var firstChildParent = bodyFirstChild.parentNode;
console.log("firstChildParent", firstChildParent);
var photoCardContainer = document.getElementById('photo-card-container');
console.log("photoCardContainer", photoCardContainer);

var photoCards = document.getElementByClassName('photo-card');
console.log("photoCards:", photoCards);
console.log("photoCards[0]", photoCards[0]);

<!-- photocards.forEach() -->
