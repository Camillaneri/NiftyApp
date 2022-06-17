$(document).ready(() => {
    $("input[type=checkbox]").change(onFormUpdate);
    $("input[type=radio]").change(onFormUpdate);
  })
  
  function onFormUpdate() {
    const registerPassword = $("#registerPassword").val();
    const ArtExp = $("input[name*='ArtExp']").prop('checked');
    const NftExp = $("input[name*='NftExp']").prop('checked');
  
    if (ArtExp && registerPassword && NftExp) {
      $("#submit").removeAttr("disabled");
    } else {
      $("#submit").attr("disabled", "disabled");
    }
  }