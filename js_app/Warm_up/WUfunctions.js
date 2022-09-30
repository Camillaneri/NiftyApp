
// this jquery function dispalys the tutorial windows
jQuery(document).ready(function($) {
  //  initially only the Warm Up banner is displayed, by clicking on the button(#warmstart) on the banner the Warm-Up page and the first tutorial window are displayed
  window.scrollTo(0, 0)// while thwe tutorial are visible the scroll is diasabled and ther page is scrolled to the top
  $( "#warmstart" ).click(function() {
      $('#introwarm').css("display","none")
      $('#tutorials').css("display","block")
      $('#tutorials').css("z-index", "13")
      $('#RefImg').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
      $('#RefImg').css("z-index", "9")
      $('#task').css("z-index", "11")
  });
    //all tutorial windows contains buttons to dispaly the next tutorial window(#toTut2a) or the previous(#toTut1)
    $( "#toTut1" ).click(function() {
      $('#tutorial2').css("display","none")
      $('#tutorial1').css("display", "block");
      $('#RefImg').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
      $('#RefImg').css("z-index", "9")
      $('#RefImg').css("filter", "unset")
      $('#clumnN2').css("box-shadow", "unset")
      $('#task').css("box-shadow", "unset")
      $('#task').css("z-index", "0")      
    });
    
    $( "#toTut2a" ).click(function() {
      $('#tutorial1').css("display","none")
      $('#tutorial2').css("display","block");
      $('#RefImg').css("box-shadow", "unset")
      $('#RefImg').css("z-index", "0")
      $('#clumnN2').css("box-shadow", "-1000px 10001px 0px 10000px rgb(0 0 0 / 60%)")
      $('#task').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
    });
  
    $( "#toTut3" ).click(function() {
      $('#tutorial2').css("display","none")
      $('#tutorial3').css("display","block");
      $('#clumnN2').css("box-shadow", "unset")
      $('#task').css("box-shadow", "unset")
      $('#task').css("z-index", "0")
      $('#buttons2').css("z-index", "9")
      $('#buttons2').css("box-shadow", "0px 0px 0px 3900px rgb(0 0 0 / 60%)")
      $('#refimgcontainer').toggleClass("zindex")
      $('#refimg').css("z-index", "9")      
    });
    
    $( "#toTut2b" ).click(function() {
      $('#tutorial3').css("display","none")
      $('#tutorial2').css("display","block");
      $('#clumnN2').css("box-shadow", "-1000px 10001px 0px 10000px rgb(0 0 0 / 60%)")
      $('#task').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
      $('#buttons2').css("z-index", "0")
      $('#buttons2').css("box-shadow", "unset")
      $('#refimgcontainer').toggleClass("zindex")
      $('#refimg').css("z-index", "0")
      window.scrollTo(0, 0);
      
    });
    //#FinishTut button closes the last tutorial windows 
    $( "#FinishTut" ).click(function() {
      $('#tutorials').css("display","none")
      $('#tutorials').css("z-index", "0")
      $('#task').toggleClass("zindex")
      $('#task').css("box-shadow", "unset")
      $('#task').css("z-index", "0")
      $('#buttons2').css("z-index", "0")
      $('#buttons2').css("box-shadow", "unset")
      $('#refimgcontainer').toggleClass("zindex")
      $('#refimg').css("z-index", "0")
      // scrolling is enabled
      $("#bod").removeClass("overflow-hidden")

    });

    });



  // This function deletes images displyed inside the numbered slots
  function clearImg(ev){
    for(let x = 0; x < document.getElementById("coso").children.length ; x++){
      if(document.getElementById("coso").children[x].children.length < 2){
        num = ev.target.parentElement.children[1].innerHTML
        numero = num.replace('#', '');
        n = parseFloat(numero);
        document.getElementById("coso").children[x].appendChild(ev.target.parentElement.children[2])
        ev.target.parentElement.parentElement.classList.toggle("no-border")
        document.getElementsByClassName("tall-img")[n-1].insertAdjacentHTML('beforeend', "<img id='WUimg' class='img-fit' src=''>")
        ev.target.parentElement.children[0].classList.add('d-none')
        document.getElementById("coso").children[x].children[0].classList.remove('d-none')
        break
      }
    }
  }
  
// This function displays a bigger, high resolution version of an image when the user click on it
function display_img(ev){
  hid = ev.target.id
  // an api request is necessary to fetch high resolution image (the ones already displayed are low resolution)
  Refquery =  `
  {
    artwork_metrics(where: {media_type: {_in: ["gif", "png", "jpg", "mjpeg"]}, artwork_id: {_eq: `+hid+` }}) {
      url
      artwork_id
    }
  }
      
  ` 
fetch('https://staging.gql.api.niftyvalue.com/v1/graphql' , {
  method: 'POST',
  headers: {
    'Content-Type': 'text/json',
  },
  body: JSON.stringify({
    query: Refquery
  }),
})
.then((res) => res.json())
.then((result) =>{ 
  dict1 = result['data']['artwork_metrics'];
  for(let x = 0; x <= dict1.length ; x++){
    dict = result['data']['artwork_metrics'][x]
    art_id = dict['artwork_id']
    art_high_res = dict['url']

    document.getElementById("shadow").classList.toggle("seeme");
    document.getElementById("displayed").src = art_high_res;
    window.scrollTo(0, 0);
    document.getElementById("bod").classList.add("noscroll")
    }
  })

}

// This function closes the view of the high resolution image
function closeimg(){
    document.getElementById("shadow").classList.remove("seeme");
    document.getElementById("bod").classList.remove("noscroll")
}

//When an user click on the pin icon beside an image the same image is displayed in the first empty numbered slot
function pin_WU(ev){
  givsrc = ev.target.parentElement.parentElement.children[1].src
  givid = ev.target.parentElement.parentElement.children[1].id
  ev.target.parentElement.parentElement.classList.toggle('noWidth')
  ev.target.parentElement.parentElement.classList.toggle('px-2')
  ev.target.parentElement.parentElement.children[1].remove()
  free = document.getElementsByClassName('img-fit')
  free[0].id = givid
  free[0].parentElement.children[0].classList.remove('d-none')
  free[0].parentElement.parentElement.classList.toggle("no-border")
  free[0].src = givsrc
  free[0].classList = "img max-h-50 w-100 recover similarImg0"
  ev.target.parentElement.classList.toggle('d-none')
  
}

// Enlarge the numbered slots.
function arrowDown(){
  for (var i = 0; i < document.getElementById("Small").children[0].children.length; i++){
    document.getElementById("Small").children[0].children[i].classList.toggle("getDatabox1")
    document.getElementById("Small").children[0].children[i].classList.toggle("getDatabox") 
    document.getElementById("Small").children[0].children[i].children[0].children[2].classList.toggle("img-fit")
  }
  document.getElementById("arrowDownButton").classList.toggle("d-none");
  document.getElementById("arrowUpButton").classList.toggle("d-none");
}

// Compress the numbered slots.
function arrowUp(){
      for (var i = 0; i < document.getElementById("Small").children[0].children.length; i++){ 
        document.getElementById("Small").children[0].children[i].classList.toggle("getDatabox1") 
        document.getElementById("Small").children[0].children[i].classList.toggle("getDatabox") 
        document.getElementById("Small").children[0].children[i].children[0].children[2].classList.toggle("img-fit")
      }
      document.getElementById("arrowDownButton").classList.toggle("d-none");
      document.getElementById("arrowUpButton").classList.toggle("d-none");
}