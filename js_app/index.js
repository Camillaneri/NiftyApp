// clear old session storage if user restarts
sessionStorage.clear();

var WUround = 0
sessionStorage.setItem('WUround', WUround)

// function for class reveal in HTML files 
// MAGARI DA COMMENTARE CHE FA 
function reveal() {
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