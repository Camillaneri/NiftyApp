// TOOLTIPS

jQuery(document).ready(function($) {
    console.log("hi i'm jquery")
    $('#reference').css("box-shadow", "0 0 30px #198753")
    console.log($("#tutorials").hasClass("active"))
    
    
    
    //
  
    $( "#toTut1" ).click(function() {
      $('#tutorial2').css("display","none")
      $('#tutorial1').css("display","block");
      $('#id_dict').css("box-shadow", "unset")
      $('#reference').css("box-shadow", "0 0 30px #198753")
    });
    $( "#toTut2a" ).click(function() {
      $('#tutorial1').css("display","none")
      $('#tutorial2').css("display","block");
      $('#reference').css("box-shadow", "unset")
      $('#id_dict').css("box-shadow", "0 0 30px #198753")
    });
  
    $( "#toTut3" ).click(function() {
      $('#tutorial2').css("display","none")
      $('#tutorial3').css("display","block");
      $('#id_dict').css("box-shadow", "unset")
      $('.dropboxes').css("box-shadow", "0 0 30px #198753")
    });
    
    $( "#toTut2b" ).click(function() {
      $('#tutorial3').css("display","none")
      $('#tutorial2').css("display","block");
      $('.dropboxes').css("box-shadow", "unset")
      $('#id_dict').css("box-shadow", "0 0 30px #198753")
    });
  
    $( "#FinishTut" ).click(function() {
      $('.dropboxes').css("box-shadow", "unset")
      $('#tutorials').css("display","none")
      $('body').toggleClass("noscroll");
    });
   
    // $(".botpage a").tipTip({ content: "This is an anchor tag!"});
    // $(".botpage a").tipTip('show');
    });



//allow drop images
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var sourceImg = document.getElementById(data)
    console.log("sourceImg  "+sourceImg)
    sourceImg.classList.toggle("collapse")
    var source = sourceImg.src
    var ident = sourceImg.id
    

    console.log(ev.target)
    ev.target.children[2].src = source
    ev.target.children[2].id = ident
    ev.target.children[0].classList.remove('d-none')
    ev.target.style.border == '0'
  }
  
  function clearImg(ev){
  console.log(ev.target.parentElement.children[2])
   ev.target.parentElement.children[2].src = ''
   ev.target.parentElement.children[0].classList.add('d-none')
   newid = ev.target.parentElement.children[2].id
   console.log(newid)
   for(let x = 0; x <  document.getElementsByClassName("recover").length ; x++){
     if(document.getElementsByClassName("recover")[x].id == newid ){
      document.getElementsByClassName("recover")[x].classList.toggle("collapse")
     }
   }
  }
  
