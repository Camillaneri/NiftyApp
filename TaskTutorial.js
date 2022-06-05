// TOOLTIPS

/*jQuery(document).ready(function($) { // the good one
    console.log("hi i'm jquery")
    $('#reference').css("box-shadow", "0 0 30px #198753")
  
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
    });
   
    // $(".botpage a").tipTip({ content: "This is an anchor tag!"});
    // $(".botpage a").tipTip('show');
    });*/

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