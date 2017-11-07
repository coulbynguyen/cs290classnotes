setAttribute('data-price', '500');
getAttribute();

newPhotoCard.setAttribute('id', 'newly-add-photo-card');

console.log(newPhotoCard.getAttribute('data-price'));
photoCardContainer.appendChild(newPhotoCard);
photoCardContainer.insertBefore(newPhotoCard, photoCardContainer.firstChild);
photoCardContainer.replaceChild(newPhotoCard, photoCardContainer.firstChild);

======================
removing something
newDiv.remove();
newDiv.parentNode.removeChild(newDiv);
==========================
EVENT HANDLING
==========================
addEventListener();

var firstBox = document.querySelector('.box');
<!-- targets the first element it finds with the tag -->
firstBox.addEventListener('click', function(){
  firstBox.classList.toggle('highlighted');
  });

window.addEventListener('click', function(){
  console.log("== Window Clicked");
  });

function respondToBoxClick(){
  console.log("== Responding to box Click");
}

firstBox.addEventListener('click', respondToBoxClick);
<!-- using a named function dont ever call the function, pass the function in by name -->

============================================


function respondToBoxClick(event){
  console.log("== Responding to box Click, event:", event);
  console.log("== Responding to box Click, event.target:", event.target);
  event.target.classList.toggle('highlighted');
}

firstBox.addEventListener('click', respondToBoxClick);
================================================================
var allBoxes = dobument.getElementsByClassname('box');

function respondToBoxClick(event){
  console.log("== Responding to box Click, event:", event);
  console.log("== Responding to box Click, event.target:", event.target);
  console.log("== Responding to box Click, event.currentTarget:", event.currentTarget);
  <!-- current target refers to the element that has the event listener
  the target refers to the lowest element that was clicked/the event that generated the event -->
  event.currentTarget.classList.toggle('highlighted');
  event.stopPropagation();
}

allBoxes[0].addEventListener('click', respondToBoxClick);
allBoxes[1].addEventListener('click', respondToBoxClick);

for(var i = 0; i < allBoxes.length; i++){
  allBoxes[i].addEventListener('click', respondToBoxClick);
}

window.addEventListener('click', function(event){
  console.log("== window clicked, event.target:", event.target);
  });
