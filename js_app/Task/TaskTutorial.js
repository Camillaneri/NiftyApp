// TOOLTIPS

jQuery(document).ready(function($) { // the good one
    window.scrollTo(0, 0)
   /*  
    $('#tutorialA').css("display","none");
    $('#tutorialB').css("display","none")
    $('#tutorialC').css("display","none") */


    $( "#taskstart" ).click(function() {
      console.log("yo")
      $('#introtask').css("display","none")
      $('#tutorials').css("display","block")
    $('#tutorialA').css("display","block");
    $('#mainBody').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
    $('#mainBody').css("z-index", "9")

    $('#task2').css("z-index", "9")
    $('#tutorials').css("z-index", "10")
  });

    $( "#toTutA" ).click(function() {
      console.log("a")//indietro da b
      $('#tutorialB').css("display","none")
      $('#tutorialA').css("display","block");
      $('#id_dict').css("box-shadow", "unset")
      $('#reference').css("box-shadow", "0 0 30px #198753")
    });

    $( "#toTut2a" ).click(function() {
      console.log("b")
      $('#tutorialA').css("display","none")
      $('#tutorialB').css("display","block");

      $('#dashboard').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
      $('#dashboard').css("z-index", "9")
      
      
      $('#mainBody').css("box-shadow", "unset")
    $('#mainBody').css("z-index", "0")
      
    });
  
    $( "#toTutC" ).click(function() {
      console.log("c")
      $('#tutorialB').css("display","none")
      $('#tutorialC').css("display","block");

     /*  $('#dashboard').css("box-shadow", "unset")
      $('#dashboard').css("z-index", "0") */

      $('#dashFooter').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
      $('#dashFooter').css("z-index", "9")

      $('#dashboard').toggleClass("check")

      const whereisit = document.getElementById("dashFooter")
      console.log("c")
      const {  
        top: t,  
        left: l  
      } = whereisit.getBoundingClientRect();  
      // console.log("stored "+ t, l)
      sessionStorage.setItem("wherebuttons1", t);
   
    });
    
    $( "#toTut2b" ).click(function() {
      console.log("d")//indietro da c
      $('#tutorialC').css("display","none")
      $('#tutorialB').css("display","block");
      $('.dropboxes').css("box-shadow", "unset")
      $('#id_dict').css("box-shadow", "0 0 30px #198753")
    });
  
    $( "#FinishTut" ).click(function() {
      console.log("e")
      $('#dashboard').toggleClass("check")
      $('.dropboxes').css("box-shadow", "unset")
      $('#tutorials').css("display","none")
      $('#task2').toggleClass("zindex")

      $('#dashboard').css("box-shadow", "unset")
      $('#dashboard').css("z-index", "0")
      $('#dashFooter').css("box-shadow", "unset")
      $('#dashFooter').css("z-index", "0")


      $('#task2').css("z-index", "0")
      $('#tutorials').css("z-index", "0")
      $("#bd1").removeClass("overflow-hidden")
    });
   
    // $(".botpage a").tipTip({ content: "This is an anchor tag!"});
    // $(".botpage a").tipTip('show');
    });

function display(ev) {
    // console.log(ev.target)
   
    $('#reference').css("box-shadow", "0 0 30px #198753")
      }



