

     
function loadWarmUp(){
  
  

  IDnum = Math.floor(Math.random() * 50000)
  console.log(" a "+IDnum)



  console.log(IDnum) //first image
    Refquery =  `
    {
      artwork_metrics(where: {media_type: {_in: ["gif", "png", "jpg", "mjpeg"]}, artwork_id: {_eq: `+IDnum+` }}) {
        url
        artwork_id
      }
    }
        
    ` 
    console.log(Refquery)
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)
    //fetch url and mediatype for every artwork
    fetch('https://staging.gql.api.niftyvalue.com/v1/graphql' , {
      method: 'POST',
      headers: {
        'Content-Type': 'text/json',
      },
      body: JSON.stringify({
        query: Refquery
      }),
    },
    { signal: controller.signal })
    .then((res) => res.json())
    .then((result) =>{ 
      dict1 = result['data']['artwork_metrics'];
      console.log(result)
      refimg = document.getElementById("reference")
      console.log(refimg)
      
      dict = result['data']['artwork_metrics'][0]
      if(dict == null){
        console.log("preso1!")
        loadWarmUp()
      }
      /*if(dict == undefined){
        console.log("preso2!")
        loadWarmUp()
      }*/
      console.log(dict)
      console.log(result['data']['artwork_metrics'].length)
      art_id = IDnum
      art_high_res = dict['url']
      if(art_high_res == null){
        console.log("preso!")
        loadWarmUp()
      }

      console.log("controllo "+art_high_res)

     
      
      if (art_high_res != null && art_high_res != "" && art_id !="" && art_id != null && art_high_res.includes("https://") ){// questo if filtra gli elementi che or ora ci danno problemi, andrà cambiata ma si può comunque usare per cambiare il formato delle gif e dei video per esempio
        refimg.src = art_high_res;
            }
        else{
            get_img_element.src = "images/wooops1.jpg";
        }
      refimg.src = art_high_res;
     

      console.log(IDnum)
      request = "https://artdiscovery.api.niftyvalue.com/recs/api/v1.0/recs?artworks_pos="+IDnum+"&artworks_neg=''"; //if its more than one they have to be numbers separated by comma without spaces
        console.log(request)
      ids = fetch(request)
      .then((response) => response.json())
      .then((responseJSON) => {
        biglist = responseJSON['recs']
        console.log(biglist)
        
        //list of 100 similar artwoks ids
        biglist_str = biglist.join();
        
        Refquery1 =  `
        {
          artwork_metrics(where: {media_type: {_in: ["gif", "png", "jpg", "mjpeg"]}, artwork_id: {_in: [`+biglist_str+ `] }}) {
            artwork_id
            preview
          }
        }
            
        ` 
        console.log(Refquery1)
        //fetch url and mediatype for every artwork
        fetch('https://staging.gql.api.niftyvalue.com/v1/graphql' , {
          method: 'POST',
          headers: {
            'Content-Type': 'text/json',
          },
          body: JSON.stringify({
            query: Refquery1
          }),
        })
        .then((res) => res.json())
        .then((result) =>{ 
          console.log(result)
          dict1 = result['data']['artwork_metrics'];
          if(dict1.length < 5){
            loadWarmUp()
          }
          
          for(let x = 0; x < 5 ; x++){
          dict = result['data']['artwork_metrics'][x]
          art_id = dict['artwork_id']
          art_url = dict['preview']
          get_img_element = document.getElementsByClassName('similarImg0') //put them into the image elements
          
            console.log(get_img_element)
        
          
        if (art_url != null && art_url != "" && art_id !="" && art_id != null && art_url.includes("https://") ){// questo if filtra gli elementi che or ora ci danno problemi, andrà cambiata ma si può comunque usare per cambiare il formato delle gif e dei video per esempio
            console.log("HEIGHT!!!!!")
            
            get_img_element[x].style.height = null;
            
            //box = document.getElementsByClassName("position-relative col-lg-4 col-md-6");
            /*for(let x = 0; x < box.length ; x++){
              box[x].style.height = "";
            }
            */
            get_img_element[x].src = art_url;
            
            get_img_element[x].id = art_id;

            document.getElementsByClassName("simimages")[x].classList.remove("imgsubst")
        
            }
        else{
            get_img_element[x].src = "images/wooops1.jpg";
        
        }
      
          
          }})})})

        }
      
 loadWarmUp()
        
 /*function placeholders(){
  
  randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
          document.getElementById("reference").style.backgroundColor = randomColor;
           //document.documentElement.style.setProperty('--placeholder-color', randomColor);
           for (let x = 0; x <= 4 ; x++){
            randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
            document.getElementsByClassName("max-h-50")[x].style.backgroundColor = randomColor;
            
           }
    
 }*/
      
 function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  x = document.getElementById("introwarmup");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    
    var elementTop = reveals[i].getBoundingClientRect().top;
    
    
    
    
    elementVisible = 100;
    
    if (reveals[i].id == "goonbutton"){
      
      elementVisible = 5;
      
    }
    if (elementTop < windowHeight - elementVisible) {
      
      
      reveals[i].classList.add("active");
      x.style.display = "none";
      console.log(document.getElementById("bod").classList)
      console.log(document.getElementById("task").classList[2])
      console.log(document.getElementById("tutorial3").style)
      if((document.getElementById("task").classList[2] == "zindex") && (document.getElementById("tutorial3").style !== "display: block;")){
      window.scrollTo(0, 0);
      }
      else if ((document.getElementById("task").classList[2] == "zindex") && (document.getElementById("tutorial3").style == "display: block;")){
        window.scrollBy(0, 100)
      }
      //window.scrollBy(0, 100)
     

    } else {
      
     
      reveals[i].classList.remove("active");
      x.style.display = "block";
      
    }
  }
}

window.addEventListener("scroll", reveal);



function arrowDown(){
  
  if((document.getElementById("Small").classList[2] == "show") == false && (document.getElementById("Small").children[0].children[0].classList[0] == "getDatabox1") == false){
    console.log("a") // niente
    
  document.getElementById("Small").classList.toggle("show"); //aggiungo show 
  for (var i = 0; i < document.getElementById("Small").children[0].children.length; i++){ 
    document.getElementById("Small").children[0].children[i].classList.toggle("getDatabox1") //aggiungo  getDatabox1
    document.getElementById("Small").children[0].children[i].children[0].children[2].classList.toggle("img-fit")
  }
}
  else if((document.getElementById("Small").children[0].children[0].classList[0] == "getDatabox1") == true){
    console.log("b") //c'è getDatabox1
    
  for (var i = 0; i < document.getElementById("Small").children[0].children.length; i++){
  document.getElementById("Small").children[0].children[i].classList.toggle("getDatabox1")//tolgo getDatabox1
  document.getElementById("Small").children[0].children[i].classList.toggle("getDatabox") //aggiungo  getDatabox
  document.getElementById("Small").children[0].children[i].children[0].children[2].classList.toggle("img-fit")
  
  }
  document.getElementById("arrowDownButton").classList.toggle("collapse");//tolgo arrowDown
  document.getElementById("arrowUpButton").classList.toggle("collapse");
  console.log()
}
}
function arrowUp(){
  
  if((document.getElementById("Small").children[0].children[0].classList[0] == "getDatabox1") == false){
    console.log("c") //c'è getDatabox
    for (var i = 0; i < document.getElementById("Small").children[0].children.length; i++){
      document.getElementById("Small").children[0].children[i].classList.toggle("getDatabox1")//aggiungo  getDatabox1
      document.getElementById("Small").children[0].children[i].classList.toggle("getDatabox")//tolgo getDatabox
      document.getElementById("Small").children[0].children[i].children[0].children[2].classList.toggle("img-fit")
      }
  } else if((document.getElementById("Small").children[0].children[0].classList[0] == "getDatabox1") == true){
    console.log("d") //c'è getDatabox1
  document.getElementById("Small").classList.toggle("show");//tolgo small
  for (var i = 0; i < document.getElementById("Small").children[0].children.length; i++){ 
    document.getElementById("Small").children[0].children[i].classList.toggle("getDatabox1") //tolgo getDatabox1
    document.getElementById("Small").children[0].children[i].children[0].children[2].classList.toggle("img-fit")
  }
  document.getElementById("arrowDownButton").classList.toggle("collapse");//tolgo arrowDown
  document.getElementById("arrowUpButton").classList.toggle("collapse");
  /*
  if((document.getElementById("arrowDownButton").classList[2] == "collapse") == true){
    document.getElementById("arrowDownButton").classList.toggle("collapse");//tolgo arrowDownButton
  }*/
  
  }

}