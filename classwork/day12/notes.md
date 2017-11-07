add scripts in the head block and add 'defer' after the src and charset

var photoCardContainer = document.getElementById('photo-card-container');
photoCardContainer.innerHTML += "<div class=\"lorem-card\">Hi</div>";
parsed as html. The browser has to run that code.

var userSpecifiedContent = "Hi";
var userSpecifiedContent = "<img src=x onerror=\"alert('Uh oh!')\">";
cross site scripting
xss
photoCardContainer.innerHTML += "<div class=\"lorem-card\">" + userSpecifiedContent + "</div>";

photoCardContainer.textContent += userSpecifiedContent;

createElement == creating a html element in the dom
createTextNode == creating text element in the dom

var newDiv = document.createElement('div');
newDiv.textContent = userSpecifiedContent;
newDiv.classList.add('lorem-card');
newDiv.classList.add('ugly');
newDiv.classList.remove('ugly');

newDiv.style.color = 'orange';
newDiv.style.border = '3px dashed purple';
^^Inline Style on the div

var newSpan = document.createElement('span');
newSpan.classList.add('ugly');

var newTextNode = document.createTextNode(userSpecifiedContent);
newSpan.appendChild(newTextNode);
newDiv.appendChild(newSpan);

photoCardContainer.appendChild(newDiv);

================================================================================
function createPhotoCard(photoURL, caption){
  var photoCardSection = document.createElement('section');
  photoCardSection.classList.add('photo-card');
  var imageContainerDiv = document.createElement('div');
  imageContainerDiv.classList.add('img-container');
  photoCardSection.appendChild(imageContainerDiv);

  var image = document.createElement('img');
  image.classList.add('person-photo-img');
  img.src = photoURL;
  imageContainerDiv.appendChild(image);

  var captionDiv = document.createElement('div');
  captionDiv.classList.add('caption');
  captionDiv.textContent = caption;
  photoCardSection.appendChild(captionDiv);

  return photoCardSection;
}
var newPhotoCard = createPhotoCard("http://placekitten.com/320/320/", "A cute Kitty");

photoCardContainer.appendChild(newPhotoCard);
