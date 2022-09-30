// This function displays the tutorials 
// the tutorials are html element, this functions modifies their dom dispaly property to display or hide them

jQuery(document).ready(function($) { 
    window.scrollTo(0, 0)// scroll to the top of the page, the scroll property of body is disabled
    //  initially only the Task page banner is displayed, by clicking on the button(#warmstart) on the banner the Task page and the first tutorial window are displayed

    $( "#taskstart" ).click(function() {
      $('#introtask').css("display","none")
      $('#tutorials').css("display","block")
      $('#tutorialA').css("display","block");
      $('#mainBody').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
      $('#mainBody').css("z-index", "9")
      $('#task2').css("z-index", "9")
      $('#tutorials').css("z-index", "10")
    });
    //all tutorial windows contains buttons to dispaly the next tutorial window(#toTut2a) or the previous(#toTutA)
    $( "#toTutA" ).click(function() {
      $('#tutorialB').css("display","none")
      $('#tutorialA').css("display","block");
      $('#id_dict').css("box-shadow", "unset")
      $('#reference').css("box-shadow", "0 0 30px #198753")
    });

    $( "#toTut2a" ).click(function() {
      $('#tutorialA').css("display","none")
      $('#tutorialB').css("display","block");
      $('#dashboard').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
      $('#dashboard').css("z-index", "9")
      $('#mainBody').css("box-shadow", "unset")
      $('#mainBody').css("z-index", "0")
      
    });
  
    $( "#toTutC" ).click(function() {
      $('#tutorialB').css("display","none")
      $('#tutorialC').css("display","block");
      $('#dashFooter').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
      $('#dashFooter').css("z-index", "9")
      $('#dashboard').toggleClass("check")
    });
    
    $( "#toTut2b" ).click(function() {
      $('#tutorialC').css("display","none")
      $('#tutorialB').css("display","block");
      $('.dropboxes').css("box-shadow", "unset")
      $('#id_dict').css("box-shadow", "0 0 30px #198753")
    });
    //#FinishTut button closes the last tutorial windows 
    $( "#FinishTut" ).click(function() {
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
       // scrolling is enabled
      $("#bd1").removeClass("overflow-hidden")
    });

    });


