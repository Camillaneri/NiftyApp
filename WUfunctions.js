// Tutorials


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



// drop images
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
    
    console.log("upper slot fill "+ev.target.children[2].outerHTML)

    ev.target.children[2].remove()
    console.log("upper slot fill deleted")
    console.log("upper slot fill "+ev.target.children[2])
    
    //document.getElementById(data).draggable = ""
    ev.target.appendChild(document.getElementById(data));
    console.log("upper slot fill refilled")
    ev.target.children[0].classList.remove('d-none')
    console.log("upper slot fill "+ev.target.children[2].outerHTML)
  }

  function clearImg(ev){
    console.log("e")
    console.log("upper slot  "+ev.target.parentElement.children[2].outerHTML)
    for(let x = 0; x < document.getElementById("coso").children.length ; x++){
      console.log("f")
      console.log("upper slot  "+ev.target.parentElement.children[2].outerHTML)
      if(document.getElementById("coso").children[x].children.length < 1){
        console.log("g")
        console.log("to here "+document.getElementById("coso").children[x].outerHTML)
        //console.log("img to append  "+ev.target.parentElement.children[2].outerHTML)
        //ev.target.parentElement.children[2].draggable = true
        console.log("upper slot  "+ev.target.parentElement.children[2].outerHTML)
        console.log("from here  "+ev.target.parentElement.children[2].outerHTML)
        num = ev.target.parentElement.children[1].innerHTML
        numero = num.replace('#', '');
        n = parseFloat(numero);
        document.getElementById("coso").children[x].appendChild(ev.target.parentElement.children[2])
        console.log("ooooooo "+document.getElementsByClassName("tall-img")[n-1].outerHTML)
        document.getElementsByClassName("tall-img")[n-1].insertAdjacentHTML('beforeend', "<img id='WUimg4' class='img-fit' src=''>")
        //ev.target.parentElement.insertAdjacentHTML('beforeend', "<img id='WUimg4' class='img-fit' src=''>");
        ev.target.parentElement.children[0].classList.add('d-none')
        console.log("upper slot  "+ev.target.parentElement.children[2].outerHTML)
        break
        
      }
      
  }
}
  
