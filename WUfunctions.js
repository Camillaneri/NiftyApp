// Tutorials


jQuery(document).ready(function($) {
   
    console.log("hi i'm jquery")
    
    //$("body").css("overflow", "hidden")
    $('#tutorials').css("z-index", "13")
    $('#RefImg').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
    $('#RefImg').css("z-index", "9")
    
    $('#task').css("z-index", "11")
    
    //console.log($("#tutorials").hasClass("active"))
    
    
    
    //
  
    $( "#toTut1" ).click(function() {
      console.log("1") //when you click back from 2
      $('#tutorial2').css("display","none")
      $('#tutorial1').css("display", "block");

      $('#RefImg').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
      $('#RefImg').css("z-index", "9")
      $('#task').css("z-index", "11")

      $('#clumnN2').css("box-shadow", "unset")
     /*  $('.dropboxes').css("box-shadow", "unset")
      $('.dropboxes').css("z-index", "0") */
/*       $('.similarImg0').css("z-index", "0")
      $('.similarImg0').first().css("box-shadow", "unset")
      $('.similarImg0').first().css("z-index", "0") */
      $('#task').css("box-shadow", "unset")
      $('#task').css("z-index", "0")

      
    });
    
    $( "#toTut2a" ).click(function() {
      console.log("2")
      $('#tutorial1').css("display","none")
      $('#tutorial2').css("display","block");

      $('#RefImg').css("box-shadow", "unset")
      $('#RefImg').css("z-index", "0")

      $('#clumnN2').css("box-shadow", "-1000px 10001px 0px 10000px rgb(0 0 0 / 60%)")
      /* $('.dropboxes').css("box-shadow", "20.4px 22px 0px 45px rgb(0 0 0 / 60%)")
      $('.dropboxes').css("z-index", "9") */
 /*      $('.similarImg0').css("z-index", "10")
      $('.similarImg0').first().css("box-shadow", "0px 0px 0px 10000px rgb(0 0 0 / 60%)")
      $('.similarImg0').first().css("z-index", "9") */
      $('#task').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")
      
     
      
    });
  
    $( "#toTut3" ).click(function() {
      // console.log("3")
      $('#tutorial2').css("display","none")
      $('#tutorial3').css("display","block");

      $('#clumnN2').css("box-shadow", "unset")
    /*   $('.dropboxes').css("box-shadow", "unset")
      $('.dropboxes').css("z-index", "0") */
/*       $('.similarImg0').css("z-index", "0")
      $('.similarImg0').first().css("box-shadow", "unset")
      $('.similarImg0').first().css("z-index", "0") */
      $('#task').css("box-shadow", "unset")
      $('#task').css("z-index", "0")
     
      $('#buttons2').css("z-index", "9")
      $('#buttons2').css("box-shadow", "0px 0px 0px 3900px rgb(0 0 0 / 60%)")
      console.log($("#refimgcontainer").hasClass( "zindex" ))
      $('#refimgcontainer').toggleClass("zindex")
      console.log($("#refimgcontainer").hasClass( "zindex" ))
      $('#refimg').css("z-index", "9")

      // const whereisit = document.getElementById("buttons2")
      // const {  
      //   top: t,  
      //   left: l  
      // } = whereisit.getBoundingClientRect();  

      // console.log("buttons2 "+ t, l)

      /* const whereisit1 = document.getElementById("tutorial3")
      const {  
        top: t1,  
        left: l1,  
      } = whereisit1.getBoundingClientRect(); 

      console.log("tutorial3 "+ t1, l1) */
      
      sessionStorage.setItem("wherebuttons", t);

      window.scrollTo(0, t-600);

      $('#tutorial3').css("top", t-200)
      
    
    });
    
    $( "#toTut2b" ).click(function() {
      console.log("4")//when you click back from 3
      $('#tutorial3').css("display","none")
      $('#tutorial2').css("display","block");
      
      $('#clumnN2').css("box-shadow", "-1000px 10001px 0px 10000px rgb(0 0 0 / 60%)")
/*       $('.dropboxes').css("box-shadow", "20.4px 22px 0px 45px rgb(0 0 0 / 60%)")
      $('.dropboxes').css("z-index", "9")
      $('.similarImg0').css("z-index", "10")
      $('.similarImg0').first().css("box-shadow", "0px 0px 0px 10000px rgb(0 0 0 / 60%)")
      $('.similarImg0').first().css("z-index", "9") */
      $('#task').css("box-shadow", "0px 0px 10px 3900px rgb(0 0 0 / 60%)")

      $('#buttons2').css("z-index", "0")
      $('#buttons2').css("box-shadow", "unset")
      
      $('#refimgcontainer').toggleClass("zindex")
      
      $('#refimg').css("z-index", "0")
      window.scrollTo(0, 0);
      
    });
  
    $( "#FinishTut" ).click(function() {
      // console.log("5")
      $('#tutorials').css("display","none")
      $('#tutorials').css("z-index", "0")

      $('#task').toggleClass("zindex")
      $('#task').css("box-shadow", "unset")
      $('#task').css("z-index", "0")


      $('#buttons2').css("z-index", "0")
      $('#buttons2').css("box-shadow", "unset")
      $('#refimgcontainer').toggleClass("zindex")
      $('#refimg').css("z-index", "0")
      console.log("ooooo")
      $("#bod").removeClass("overflow-hidden")
      

      /* $('.dropboxes').css("box-shadow", "unset")
      
      $('#buttons2').css ("box-shadow","unset")
      $('#task').toggleClass("zindex") */
    });
   
    // $(".botpage a").tipTip({ content: "This is an anchor tag!"});
    // $(".botpage a").tipTip('show');
    });



// drop images
function allowDrop(ev) {
  //console.log("a")
    ev.preventDefault();
  }
  
  function drag(ev) {
    //console.log("b")
    //console.log("sourceImg for drag "+ev.parentElement.outerHTML)
    ev.dataTransfer.setData("text", ev.target.id);
    ev.target.parentElement.classList.toggle('d-none')
  }
  
  function drop(ev) {
    
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    
    
    ev.target.children[2].remove()
    
    
    //document.getElementById(data).draggable = ""
    ev.target.appendChild(document.getElementById(data));
    
    ev.target.children[0].classList.remove('d-none')
   

    ev.target.parentElement.classList.toggle("no-border")
  }

  function clearImg(ev){

    for(let x = 0; x < document.getElementById("coso").children.length ; x++){
 
      if(document.getElementById("coso").children[x].children.length < 2){

        //ev.target.parentElement.children[2].draggable = true

        num = ev.target.parentElement.children[1].innerHTML
        console.log()
        numero = num.replace('#', '');
        n = parseFloat(numero);
        document.getElementById("coso").children[x].appendChild(ev.target.parentElement.children[2])
        
        ev.target.parentElement.parentElement.classList.toggle("no-border")
        document.getElementsByClassName("tall-img")[n-1].insertAdjacentHTML('beforeend', "<img id='WUimg' class='img-fit' src=''>")
        //ev.target.parentElement.insertAdjacentHTML('beforeend', "<img id='WUimg4' class='img-fit' src=''>");
        ev.target.parentElement.children[0].classList.add('d-none')
        console.log(document.getElementById("coso").children[x].children[0])
        document.getElementById("coso").children[x].children[0].classList.remove('d-none')
        break
        
      }
      
  }
}
  
function display_img(ev){
 /*  // inizio log immagine grande
  var count = parseInt(sessionStorage.getItem('displayedImgs'));
  count +=1
  sessionStorage.setItem('displayedImgs', count);
  // fine log immagine grande
    //////console.log(ev.target) */

  hid = ev.target.id
    
  Refquery =  `
  {
    artwork_metrics(where: {media_type: {_in: ["gif", "png", "jpg", "mjpeg"]}, artwork_id: {_eq: `+hid+` }}) {
      url
      artwork_id
    }
  }
      
  ` 
//fetch url and mediatype for every artwork
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
  

  
  }})

}


function closeimg(){
    //////console.log(document.getElementById("displayimg").classList)
    document.getElementById("shadow").classList.remove("seeme");
    document.getElementById("bod").classList.remove("noscroll")
}

function pin_WU(ev){
  givsrc = ev.target.parentElement.parentElement.children[1].src
  ev.target.parentElement.parentElement.children[1].remove()
  console.log(givsrc)
  free = document.getElementsByClassName('img-fit')
  console.log(free[0].parentElement.children[0])
  free[0].parentElement.children[0].classList.remove('d-none')
  free[0].parentElement.parentElement.classList.toggle("no-border")
  free[0].src = givsrc
  free[0].classList = "img max-h-50 w-100 recover similarImg0"
  ev.target.parentElement.classList.toggle('d-none')
  
}