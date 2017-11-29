var postRequest = new XMLHttpRequest();
postRequest.open('POST', postURL);
specify the http request to made in the first argument, and the second argument is the link to the page we are trying to edit


create a json object, decide the format of the data
{
  photURL: ".."
  caption: ".."
}
need to serialize this json
=====================================================
var photoObj = {
    photoURL: photoURL,
    caption: caption
};
<!-- serialized version of the json object -->
var requestBody = JSON.stringify(photoObj);
postRequest.setRequestHeader('Content-Type', 'application/json');

postRequest.addEventListener('load', function(event){
    if(event.target.status !== 200){
      alert("Error storing photo in database:\n\n\n" + event.target.response);
    }
    else{
      var newPhotoCard = createPhotoCard(photoURL, caption);
      var photoCardContainer = document.querySelector('.photo-card-container');
      photoCardContainer.insertAdjacentHTML('beforeend', newPhotoCard);
    }
});

postRequest.send(requestBody);

=====================================================
on server side js
======================================================
peopleData[personId].photos.push({
  photoURL: req.body.photoURL,
  caption: req.body.caption  
});
======================================================

password and username is
cs290_YourOnidUername
