1- getElementByClassName can only target 1 selector
2- getElementById
3- getElementByTagName
querySelector can target multiple selectors by using dot operator ('.navitem.right')

4- var firstPhotoCard = document.querySelector('.photo-card:first-child');
^ grabs the photo card that is the first child
anything that works in CSS can work in querySelector

querySelector is less efficient but much more useful.

5- var allPersonImages = document.querySelectorAll('.img-container img');
grabs all the images that are contained inside an image container

firstPhotoCard.innerHTML == dangerous

firstPhotoCard.textContent == safer

allPersonImages[0].src = gives the http link
images only have src

links[0].href gives the link to page
only links have href

var loremCard = document.querySelector('.lorem-card');

loremCard.clientWidth
loremCard.clientHeight
this is the values up to its padding. Excluding the border and margin

loremCard.offsetWidth
loremCard.offsetHeight
this is the vaulues up to its border. Excluding the margin, but including the border
this will contain the space made for the scroll bar
scroll bar are always placed inside the border

loremCard.scrollWidth
loremCard.scrollHeight
Shows the total size of the content including the padding

loremCard.scrollLeft
loremCard.scrollTop
The number of the pixles that the content is scrolled down. how much away it is scrolled from the top.
scroll left works similarly

window.scrollX
window.scrollY

loremCard.getBoundingClientRect()
gives the x and y position of the object relative to the window/viewport
and the width and height of the rendered element on the page
