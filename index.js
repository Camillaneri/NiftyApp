sessionStorage.clear();
var WUround = 0
sessionStorage.setItem('WUround', WUround)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      
      elementVisible = 150;
      //console.log("reveals[i] "+reveals[i].outerHTML)
      // console.log("elementTop "+elementTop)
      // console.log("windowHeight "+windowHeight)
      // console.log("elementVisible "+elementVisible)
      // console.log("windowHeight - elementVisible "+(windowHeight - elementVisible))
      

      if (reveals[i].id == "goonbutton"){
        //console.log("ecco")
        elementVisible = 5;
        //console.log(elementVisible)
      }
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");

      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);