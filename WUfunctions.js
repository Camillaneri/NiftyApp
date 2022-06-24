// Tutorials


jQuery(document).ready(function($) {
    //window.scrollTo(0, 0);
    console.log("hi i'm jquery")
    //$(".owl-carousel").owlCarousel();
    $('#RefImg').css("box-shadow", "0px 0px 10px 1900px rgb(0 0 0 / 50%)")
    $('#RefImg').css("z-index", "9")
    //console.log($("#tutorials").hasClass("active"))
    
    
    
    //
  
    $( "#toTut1" ).click(function() {
      console.log("1")
      $('#tutorial2').css("display","none")
      $('#tutorial1').css("display", "block");

      //$('#reference').css("z-index", "9")
      //$('#refimgcontainer').toggleClass("zindextop");
    });
    
    $( "#toTut2a" ).click(function() {
      console.log("2")
      $('#tutorial1').css("display","none")
      $('#tutorial2').css("display","block");
      $('#RefImg').css("box-shadow", "unset")
      $('#RefImg').css("z-index", "0")

      $('#clumnN2').css("box-shadow", "-300px 329.5px 0px 600px rgb(0 0 0 / 80%)")
      $('.dropboxes').css("box-shadow", "0px 1px 0px 66.3px rgb(0 0 0 / 80%)")
      $('.dropboxes').css("z-index", "9")
      $('#similarBox0').css("box-shadow", "0px 0px 10px 1900px rgb(0 0 0 / 80%)")
      $('#similarBox0').css("z-index", "9")
      $('#similarBox4').css("z-index", "10")
      $('#similarBox3').css("z-index", "10")
      $('#similarBox2').css("z-index", "10")
      $('#similarBox1').css("z-index", "10")
      
      
    });
  
    $( "#toTut3" ).click(function() {
      console.log("3")
      $('#tutorial2').css("display","none")
      $('#tutorial3').css("display","block");

      $('#clumnN2').css("box-shadow", "unset")
      $('.dropboxes').css("box-shadow", "unset")
      $('.dropboxes').css("z-index", "0")
      $('#similarBox4').css("z-index", "0")
      $('#similarBox3').css("z-index", "0")
      $('#similarBox2').css("z-index", "0")
      $('#similarBox1').css("z-index", "0")
      $('#similarBox0').css("box-shadow", "unset")
      $('#similarBox0').css("z-index", "0")
      
      $('#buttons2').css("z-index", "9")
      $('#buttons2').css("box-shadow", "0px 0px 10px 1900px rgb(0 0 0 / 80%)")
      $('#refimgcontainer').css("z-index", "-1")
      $('#refimg').css("z-index", "9")
      
     
      
    
    });
    
    $( "#toTut2b" ).click(function() {
      console.log("4")
      $('#tutorial3').css("display","none")
      $('#tutorial2').css("display","block");
      
      
    });
  
    $( "#FinishTut" ).click(function() {
      console.log("5")
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
  //console.log("a")
    ev.preventDefault();
  }
  
  function drag(ev) {
    //console.log("b")
    //console.log("sourceImg for drag "+ev.parentElement.outerHTML)
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    
    
    ev.target.children[2].remove()
    
    
    //document.getElementById(data).draggable = ""
    ev.target.appendChild(document.getElementById(data));
    
    ev.target.children[0].classList.remove('d-none')
   

    ev.target.parentElement.classList.toggle("no-border")
  }

  function clearImg(ev){

    for(let x = 0; x < document.getElementById("coso").children.length ; x++){
 
      if(document.getElementById("coso").children[x].children.length < 1){

        //ev.target.parentElement.children[2].draggable = true

        num = ev.target.parentElement.children[1].innerHTML
        numero = num.replace('#', '');
        n = parseFloat(numero);
        document.getElementById("coso").children[x].appendChild(ev.target.parentElement.children[2])
        ev.target.parentElement.parentElement.classList.toggle("no-border")
        document.getElementsByClassName("tall-img")[n-1].insertAdjacentHTML('beforeend', "<img id='WUimg4' class='img-fit' src=''>")
        //ev.target.parentElement.insertAdjacentHTML('beforeend', "<img id='WUimg4' class='img-fit' src=''>");
        ev.target.parentElement.children[0].classList.add('d-none')

        break
        
      }
      
  }
}
  
