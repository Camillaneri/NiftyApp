// clear old session storage if user restarts
sessionStorage.clear();

// script creating an unique identifier for the user, it will remain the same for all the session
var random = Math.floor(Math.random()*(0-200 +1)+200);
var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
var id =  day +''+ month + '' + year + ''+random
// set id in session storage 
sessionStorage.setItem('id', id);

// function for class reveal in HTML files 


//This functions create the effect of elements appering on the page while the user scrolls down
function reveal() {
  //it makes elements visible to the user when they reach a certain height on the visible screen
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      
      elementVisible = 150;
      if (reveals[i].id == "goonbutton"){
        elementVisible = 5;
      }
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");

      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);