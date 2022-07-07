// Tutorials


jQuery(document).ready(function($) {
    //window.scrollTo(0, 0);
    //console.log("hi i'm jquery")
    //$(".owl-carousel").owlCarousel();
    $('#tutorials').css("z-index", "13")
    $('#RefImg').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
    $('#RefImg').css("z-index", "9")
    
    $('#task').css("z-index", "11")
    
    ////console.log($("#tutorials").hasClass("active"))
    
    
    
    //
  
    $( "#toTut1" ).click(function() {
      //console.log("1") //when you click back from 2
      $('#tutorial2').css("display","none")
      $('#tutorial1').css("display", "block");

      $('#RefImg').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
      $('#RefImg').css("z-index", "9")
      $('#task').css("z-index", "11")

      $('#clumnN2').css("box-shadow", "unset")
      $('.dropboxes').css("box-shadow", "unset")
      $('.dropboxes').css("z-index", "0")
      $('.similarImg0').css("z-index", "0")
      $('.similarImg0').first().css("box-shadow", "unset")
      $('.similarImg0').first().css("z-index", "0")
      $('#task').css("box-shadow", "unset")
      $('#task').css("z-index", "0")

      //$('#reference').css("z-index", "9")
      //$('#refimgcontainer').toggleClass("zindextop");
    });
    
    $( "#toTut2a" ).click(function() {
      //console.log("2")
      $('#tutorial1').css("display","none")
      $('#tutorial2').css("display","block");

      $('#RefImg').css("box-shadow", "unset")
      $('#RefImg').css("z-index", "0")

      $('#clumnN2').css("box-shadow", "-1000px 10001px 0px 10000px rgb(0 0 0 / 60%)")
      $('.dropboxes').css("box-shadow", "20.4px 22px 0px 45px rgb(0 0 0 / 60%)")
      $('.dropboxes').css("z-index", "9")
      $('.similarImg0').css("z-index", "10")
      $('.similarImg0').first().css("box-shadow", "0px 0px 0px 10000px rgb(0 0 0 / 60%)")
      $('.similarImg0').first().css("z-index", "9")
      $('#task').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
      
     
      
    });
  
    $( "#toTut3" ).click(function() {
      //console.log("3")
      $('#tutorial2').css("display","none")
      $('#tutorial3').css("display","block");

      $('#clumnN2').css("box-shadow", "unset")
      $('.dropboxes').css("box-shadow", "unset")
      $('.dropboxes').css("z-index", "0")
      $('.similarImg0').css("z-index", "0")
      $('.similarImg0').first().css("box-shadow", "unset")
      $('.similarImg0').first().css("z-index", "0")
      $('#task').css("box-shadow", "unset")
      $('#task').css("z-index", "0")
     
      $('#buttons2').css("z-index", "9")
      $('#buttons2').css("box-shadow", "0px 0px 0px 3900px rgb(0 0 0 / 60%)")
      //console.log($("#refimgcontainer").hasClass( "zindex" ))
      $('#refimgcontainer').toggleClass("zindex")
      //console.log($("#refimgcontainer").hasClass( "zindex" ))
      $('#refimg').css("z-index", "9")
      const whereisit = document.getElementById("buttons2")
      const {  
        top: t,  
        left: l  
      } = whereisit.getBoundingClientRect();  
      //console.log("stored "+ t, l)
      sessionStorage.setItem("wherebuttons", t);
      window.scrollTo(0, t-40);
    
    });
    
    $( "#toTut2b" ).click(function() {
      //console.log("4")//when you click back from 3
      $('#tutorial3').css("display","none")
      $('#tutorial2').css("display","block");
      
      $('#clumnN2').css("box-shadow", "-1000px 10001px 0px 10000px rgb(0 0 0 / 60%)")
      $('.dropboxes').css("box-shadow", "20.4px 22px 0px 45px rgb(0 0 0 / 60%)")
      $('.dropboxes').css("z-index", "9")
      $('.similarImg0').css("z-index", "10")
      $('.similarImg0').first().css("box-shadow", "0px 0px 0px 10000px rgb(0 0 0 / 60%)")
      $('.similarImg0').first().css("z-index", "9")
      $('#task').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")

      $('#buttons2').css("z-index", "0")
      $('#buttons2').css("box-shadow", "unset")
      
      $('#refimgcontainer').toggleClass("zindex")
      
      $('#refimg').css("z-index", "0")
      window.scrollTo(0, 0);
      
    });
  
    $( "#FinishTut" ).click(function() {
      //console.log("5")
      $('#tutorials').css("display","none")
      $('#tutorials').css("z-index", "0")

      $('#task').toggleClass("zindex")
      $('#task').css("box-shadow", "unset")
      $('#task').css("z-index", "0")


      $('#buttons2').css("z-index", "0")
      $('#buttons2').css("box-shadow", "unset")
      $('#refimgcontainer').toggleClass("zindex")
      $('#refimg').css("z-index", "0")
      

      /* $('.dropboxes').css("box-shadow", "unset")
      
      $('#buttons2').css ("box-shadow","unset")
      $('#task').toggleClass("zindex") */
    });
   
    // $(".botpage a").tipTip({ content: "This is an anchor tag!"});
    // $(".botpage a").tipTip('show');
    });



// drop images
function allowDrop(ev) {
  ////console.log("a")
    ev.preventDefault();
  }
  
  function drag(ev) {
    ////console.log("b")
    ////console.log("sourceImg for drag "+ev.parentElement.outerHTML)
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    
    
    ev.target.children[2].remove()
    
    
    //document.getElementById(data).draggable = ""
    ev.target.appendChild(document.getElementById(data));
    
    ev.target.children[0].classList.remove('d-none')
    ev.target.children[2].classList.add('border1')

    ev.target.parentElement.classList.toggle("no-border")
  }

  function clearImg(ev){

    for(let x = 0; x < document.getElementById("coso").children.length ; x++){
 
      if(document.getElementById("coso").children[x].children.length < 1){

        //ev.target.parentElement.children[2].draggable = true
        ev.target.parentElement.children[2].classList.remove('border1')
        num = ev.target.parentElement.children[1].innerHTML
        numero = num.replace('#', '');
        n = parseFloat(numero);
        document.getElementById("coso").children[x].appendChild(ev.target.parentElement.children[2])
        ev.target.parentElement.parentElement.classList.toggle("no-border")
        document.getElementsByClassName("tall-img")[n-1].insertAdjacentHTML('beforeend', "<img id='WUimg4' class='img-fit' src=''>")
        //ev.target.parentElement.insertAdjacentHTML('beforeend', "<img id='WUimg4' class='img-fit' src=''>");
        ev.target.parentElement.children[0].classList.add('d-none')
        console.log("ev.target.parentElement.children[2] "+ev.target.parentElement.children[2].outerHTML)
        
        break
        
      }
      
  }
}
  

