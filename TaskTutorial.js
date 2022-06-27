// TOOLTIPS

jQuery(document).ready(function($) { // the good one
    console.log("hi i'm jquery")
    $('#tutorialB').css("display","none")
    $('#tutorialC').css("display","none")
    $('#mainBody').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
    $('#mainBody').css("z-index", "9")

    $('#task2').css("z-index", "9")
    $('#tutorials').css("z-index", "10")
  
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
      $('#id_dict').css("box-shadow", "unset")
      $('.dropboxes').css("box-shadow", "0 0 30px #198753")
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
      $('.dropboxes').css("box-shadow", "unset")
      $('#tutorials').css("display","none")
      $('#task2').toggleClass("zindex")

      $('#task2').css("z-index", "0")
      $('#tutorials').css("z-index", "0")
    });
   
    // $(".botpage a").tipTip({ content: "This is an anchor tag!"});
    // $(".botpage a").tipTip('show');
    });

function display(ev) {
    console.log(ev.target)
   
    $('#reference').css("box-shadow", "0 0 30px #198753")
      }



// $(document).ready(function(){
//     console.log("hey")
    
//     $("img").click(function(){
//         console.log($this)
//         var a = ($this).attr("src") 
//         console.log("boh")
//         $('#displayimg').css("display","block");
//         $('#displayed').attr(a);
//       });
    
    
//         // jQuery methods go here...
      
//       });

// $(document).ready(function() {
//     $("img").click(function() {
//           var id = $('img', this).attr('class');
//           console.log(id);
//         });
//       });


      
// $(document).ready(function() {
//     $('.w-10').click(function () {
//         alert($(this).find('img').attr('class'));
//           console.log(id);
//         });
//       });