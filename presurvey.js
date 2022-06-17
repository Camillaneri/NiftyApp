$(document).ready(() => {
    $("input[type=checkbox]").change(onFormUpdate);
    
  })
  
  function onFormUpdate() {

    const ArtExp = $("#ArtExp1").prop('checked') || $("#ArtExp2").prop('checked') || $("#ArtExp3").prop('checked') || $("#ArtExp4").prop('checked') || $("#ArtExp5").prop('checked');
    const NftExp = $("#NftExp1").prop('checked') || $("#NftExp2").prop('checked') || $("#NftExp3").prop('checked') || $("#NftExp4").prop('checked') || $("#NftExp5").prop('checked');
    const FinBcExp = $("#FinBcExp1").prop('checked') || $("#FinBcExp2").prop('checked') || $("#FinBcExp3").prop('checked') || $("#FinBcExp4").prop('checked') || $("#FinBcExp5").prop('checked');
    console.log(ArtExp, NftExp, FinBcExp)
    if (ArtExp  && NftExp && FinBcExp) {
      $("#submit").removeAttr("disabled");
    } else {
      $("#submit").attr("disabled", "disabled");
    }
  }