//COOKIE ALERT
alert("This website uses cookies in order to offer you more relevant information.Please accept the cookies to continue ")

//TOP BUTTON SCROLL
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunc() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

//AUDIO CONNECTION
function soundFunc(){
    var adio = new Audio("./sounds/buttonSound.mp3")
    adio.play()
}