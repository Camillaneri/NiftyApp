
//the script below disables the submit button until all check-lists and the radio-button have been filled.

$(document).ready(() => {
    $("input[type=checkbox]").change(onFormUpdate);
    $("input[type=radio]").change(onFormUpdate);
    
  })
  
  function onFormUpdate() {

    const ArtExp = $("#ArtExp1").prop('checked') || $("#ArtExp2").prop('checked') || $("#ArtExp3").prop('checked') || $("#ArtExp4").prop('checked') || $("#ArtExp5").prop('checked');
    const NftExp = $("#NftExp1").prop('checked') || $("#NftExp2").prop('checked') || $("#NftExp3").prop('checked') || $("#NftExp4").prop('checked') || $("#NftExp5").prop('checked');
    const FinBcExp = $("#FinBcExp1").prop('checked') || $("#FinBcExp2").prop('checked') || $("#FinBcExp3").prop('checked') || $("#FinBcExp4").prop('checked') || $("#FinBcExp5").prop('checked');
    const useMM = $("#useMM1").prop('checked') || $("#useMM2").prop('checked') || $("#useMM3").prop('checked') || $("#useMM4").prop('checked') || $("#useMM5").prop('checked');

    console.log(ArtExp, NftExp, FinBcExp, useMM)
    if (ArtExp  && NftExp && FinBcExp && useMM) {
      $("#submit").removeAttr("disabled");
    } else {
      $("#submit").attr("disabled", "disabled");
    }
  }

//MODAL
 function finishsurv() {
  if($("#submit").attr("disabled")==("disabled")){
    $("#myModal1").css("display","block");
  }
 }

 function closemod(){
  $("#myModal1").css("display","none");
 }