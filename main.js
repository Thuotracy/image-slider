var prev = document.getElementById('previous');
var next = document.getElementById('next');

var arr = ["img/image1.jpg",
           "img/image2.jpg", 
           "img/image3.jpg", 
           "img/image4.jpg", 
           "img/image5.jpg", 
           "img/image6.jpg", 
           "img/image7.jpg",
           "img/image8.jpg", 
           "img/image9.jpg", 
           "img/image10.jpg"];

var i = 0;

// next btn
next.addEventListener('click', function(){
  i++;
  document.getElementById('image').src = arr[i];
})

// prev btn
// prev.addEventListener('click', function(){
//     i--;
//     document.getElementById('image').src = arr[i]; 
})