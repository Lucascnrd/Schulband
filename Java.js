// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var b = new Array();
b[0] = new Image(); b[0].src = "Startbild.jpg";
b[1] = new Image(); b[1].src = "Startbild2.jpg";
b[2] = new Image(); b[2].src = "Startbild3.jpg";
var i = 0;
function Animation () {
  if (i > 2)
    i = 0;
  document.images[1].src = b[i].src;
  i = i + 1;
  window.setTimeout("Animation()", 7000);
}

window.setTimeout("Animation()", 1000);