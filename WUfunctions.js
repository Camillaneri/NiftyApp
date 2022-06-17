// TOOLTIPS


jQuery(document).ready(function($) {
    console.log("hi i'm jquery")
    //$(".owl-carousel").owlCarousel();
    $('#reference').css("box-shadow", "0px 0px 10px 1900px rgb(0 0 0 / 50%)")
    console.log($("#tutorials").hasClass("active"))
    
    
    
    //
  
    $( "#toTut1" ).click(function() {
      $('#tutorial2').css("display","none")
      $('#tutorial1').css("display", "block");
      $('#reference').css("box-shadow", "unset")
      //$('#reference').css("z-index", "9")
      //$('#refimgcontainer').toggleClass("zindextop");
    });
    $( "#toTut2a" ).click(function() {
      $('#tutorial1').css("display","none")
      $('#tutorial2').css("display","block");
      $('#reference').css("box-shadow", "unset")
      $('#coso').css("box-shadow", "0px 0px 10px 1900px rgb(0 0 0 / 50%)")
      $('.dropboxes').css("box-shadow", "0px 0px 10px 1900px rgb(0 0 0 / 50%)")
      
    });
  
    $( "#toTut3" ).click(function() {
      $('#tutorial2').css("display","none")
      $('#tutorial3').css("display","block");
      $('#coso').css("box-shadow", "unset")
      $('.dropboxes').css("box-shadow", "unset")
      $('#buttons2').css("box-shadow", "0px 0px 10px 1900px rgb(0 0 0 / 50%)")
    
    });
    
    $( "#toTut2b" ).click(function() {
      $('#tutorial3').css("display","none")
      $('#tutorial2').css("display","block");
      
      
    });
  
    $( "#FinishTut" ).click(function() {
      $('.dropboxes').css("box-shadow", "unset")
      $('#tutorials').css("display","none")
      $('#buttons2').css ("box-shadow","unset")
      $('#task').toggleClass("zindex")
    });
   
    // $(".botpage a").tipTip({ content: "This is an anchor tag!"});
    // $(".botpage a").tipTip('show');
    });



//allow drop images
function allowDrop(ev) {
  console.log("a")
    ev.preventDefault();
  }
  
  function drag(ev) {
    console.log("b")
    //console.log("sourceImg for drag "+ev.parentElement.outerHTML)
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    console.log("c")
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var sourceImg = document.getElementById(data)
    
    console.log("sourceImg for drop "+sourceImg.parentElement.outerHTML)
    //console.log("heyyyy"+sourceImg.parentElement.parentElement)
    if(sourceImg.classList.contains("img-fit") == false){
      //console.log("noooo!!!")
    sourceImg.classList.toggle("collapse")//all riquadro inferiore da cui ho preso l'immagine aggiungo la classe collapse(la fa sparire)
  }
    var source = sourceImg.src
    var ident = sourceImg.id
    console.log("d")

    console.log(ev.target)
    ev.target.children[2].src = source
    ev.target.children[2].id = ident
    ev.target.children[0].classList.remove('d-none')
    ev.target.style.border == '0'
  }
  
  function clearImg(ev){
    console.log("e")
  console.log(ev.target.parentElement.children[2])
   ev.target.parentElement.children[2].src = ''
   ev.target.parentElement.children[0].classList.add('d-none')
   newid = ev.target.parentElement.children[2].id
   console.log(newid)
   for(let x = 0; x <  document.getElementsByClassName("recover").length ; x++){ //recover mi fa riconoscere le immaginni sotto non è uno stile
     if(document.getElementsByClassName("recover")[x].id == newid ){ 
      console.log("f") //ritrovo lo spot originale perchè mantiene l'id
      
      document.getElementsByClassName("recover")[x].classList.toggle("collapse")// gli tolgo la classe collapse che ho aggiunto quando ho droppato
     
    }
   }
  }
  

    
