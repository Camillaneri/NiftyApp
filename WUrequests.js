var WUround = 0
var LoadedImgsListenerWU = 0
var n_round = 0
var AIorder = []

function loadWarmUp(){
  IDnum = Math.floor(Math.random() * 50000)
  console.log(" a "+IDnum)
  //console.log(IDnum) //first image
    Refquery =  `
    {
      artwork_metrics(where: {media_type: {_in: ["gif", "png", "jpg", "mjpeg"]}, artwork_id: {_eq: `+IDnum+` }}) {
        url
        artwork_id
      }
    }
        
    ` 
    //console.log(Refquery)
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
      // console.log('result', result)
      refimg = document.getElementsByClassName("REF")[0]
      //console.log(refimg)
      
      dict = result['data']['artwork_metrics'][0]
      if(dict == null){
        loadWarmUp()
      }
      art_id = IDnum
      
      if(dict['url'] == null){
        loadWarmUp();
      }else{
        art_high_res = dict['url']
      }
     
      if (art_high_res != null && art_high_res != "" && art_id !="" && art_id != null && art_high_res.includes("https://") ){// questo if filtra gli elementi che or ora ci danno problemi, andrà cambiata ma si può comunque usare per cambiare il formato delle gif e dei video per esempio
        
      refimg.src = art_high_res;}else{
            get_img_element.src = "images/wooops1.jpg";
        }
      refimg.src = art_high_res;
      refimg.id = art_id
      sessionStorage.setItem('WUreference', refimg.id)
     

      //console.log(IDnum)
      request = "https://artdiscovery.api.niftyvalue.com/recs/api/v1.0/recs?artworks_pos="+IDnum+"&artworks_neg=''"; //if its more than one they have to be numbers separated by comma without spaces
        //console.log(request)
      ids = fetch(request)
      .then((response) => response.json())
      .then((responseJSON) => {
        biglist = responseJSON['recs']
        //console.log(biglist)
        
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
        //console.log(Refquery1)
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
          //console.log(result)
          dict1 = result['data']['artwork_metrics'];
          if(dict1.length < 5){
            loadWarmUp()
          }
          
          for(let x = 0; x < 5 ; x++){
          dict = result['data']['artwork_metrics'][x]
          art_id = dict['artwork_id']
          art_url = dict['preview']
          get_img_element = document.getElementsByClassName('similarImg0') //put them into the image elements
          
            //console.log(get_img_element)
        
          
        if (art_url != null && art_url != "" && art_id !="" && art_id != null && art_url.includes("https://") ){// questo if filtra gli elementi che or ora ci danno problemi, andrà cambiata ma si può comunque usare per cambiare il formato delle gif e dei video per esempio
            //console.log("HEIGHT!!!!!")
            
            get_img_element[x].style.height = null;
            
            //box = document.getElementsByClassName("position-relative col-lg-4 col-md-6");
            /*for(let x = 0; x < box.length ; x++){
              box[x].style.height = "";
            }
            */
            get_img_element[x].src = art_url;
            
            get_img_element[x].id = art_id;

            document.getElementsByClassName("simimages")[x].classList.remove("imgsubst")

            //qua log che  registra quando sono compilate le src di tutto

            LoadedImgsListenerWU += 1
            AIorder.push(art_id)
            switch(LoadedImgsListenerWU){
              case 5:
                // console.log('all loaded', LoadedImgsListenerWU )
                const startWU = new Date().getTime()
                boxes = document.querySelectorAll('.similarImg0')
                console.log(boxes.src)
                sessionStorage.setItem('startWU'+n_round , startWU)
                sessionStorage.setItem('AIorder'+n_round , AIorder)
                console.log(sessionStorage)
            default: break
            }

            // if(LoadedImgsListenerWU < 5){
              // const taskStarts = new Date().getTime()
              // sessionStorage.setItem('taskStarts'+n_queries , taskStarts)
              // console.log('taskStarts'+n_queries , sessionStorage.getItem('taskStarts'+n_queries )) //returns time in milliseconds since the ECMAScript epoch, which is defined as January 1, 1970, UTC (equivalent to the UNIX epoch).
              // LoadedImgsListener = 0
              // console.log('all loaded', LoadedImgsListenerWU )
            // }

        
            }
        else{
            get_img_element[x].src = "images/wooops1.jpg";
        
        }
      
          
          }})})})

        }
      
 loadWarmUp(); 


 function findbuttons(){
  const whereisit = document.getElementById("buttons2")  
    const {  
            top: t,    
          } = whereisit.getBoundingClientRect();  
    return(t)
 }
      
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
      
      //console.log(document.getElementById("bod").classList)
      //console.log(document.getElementById("task").classList[2])
      //console.log(document.getElementById("tutorial3").style)
      if((document.getElementById("task").classList[2] == "zindex") && (document.getElementById("refimgcontainer").classList.contains("zindex")== false)){
        // console.log("eccoci")
        // console.log("doesn't have zindex "+document.getElementById("refimgcontainer").outerHTML)
        // console.log((document.getElementById("refimgcontainer").classList.contains("zindex")))
        window.scrollTo(0, 0);
         
      }  else if ((document.getElementById("task").classList[2] == "zindex") && document.getElementById("refimgcontainer").classList.contains("zindex")){
        // console.log("preso")
        let pos = sessionStorage.getItem("wherebuttons");
        console.log("retrievedjavascript "+pos)
        // console.log("position "+(pos-500))
        window.scrollTo(0, pos-600);
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
    //console.log("a") // niente
    
  document.getElementById("Small").classList.toggle("show"); //aggiungo show 
  for (var i = 0; i < document.getElementById("Small").children[0].children.length; i++){ 
    document.getElementById("Small").children[0].children[i].classList.toggle("getDatabox1") //aggiungo  getDatabox1
    document.getElementById("Small").children[0].children[i].children[0].children[2].classList.toggle("img-fit")
  }
}
  else if((document.getElementById("Small").children[0].children[0].classList[0] == "getDatabox1") == true){
    //console.log("b") //c'è getDatabox1
    
  for (var i = 0; i < document.getElementById("Small").children[0].children.length; i++){
  document.getElementById("Small").children[0].children[i].classList.toggle("getDatabox1")//tolgo getDatabox1
  document.getElementById("Small").children[0].children[i].classList.toggle("getDatabox") //aggiungo  getDatabox
  document.getElementById("Small").children[0].children[i].children[0].children[2].classList.toggle("img-fit")
  
  }
  document.getElementById("arrowDownButton").classList.toggle("collapse");//tolgo arrowDown
  document.getElementById("arrowUpButton").classList.toggle("collapse");
  //console.log()
}
}
function arrowUp(){
  
  if((document.getElementById("Small").children[0].children[0].classList[0] == "getDatabox1") == false){
    //console.log("c") //c'è getDatabox
    for (var i = 0; i < document.getElementById("Small").children[0].children.length; i++){
      document.getElementById("Small").children[0].children[i].classList.toggle("getDatabox1")//aggiungo  getDatabox1
      document.getElementById("Small").children[0].children[i].classList.toggle("getDatabox")//tolgo getDatabox
      document.getElementById("Small").children[0].children[i].children[0].children[2].classList.toggle("img-fit")
      }
  } else if((document.getElementById("Small").children[0].children[0].classList[0] == "getDatabox1") == true){
    //console.log("d") //c'è getDatabox1
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

function repeatask(){
   WUround += 1;
   sessionStorage.setItem('WUround', WUround);
   console.log('round', WUround);

   document.getElementsByClassName("REF")[0].src=""
   //document.getElementById("RefImg").classList.add("imgsubst")
  for(let x = 0; x < 5 ; x++){
    a = document.getElementsByClassName("simimages")
    if(a[x].children.length > 0){
      a[x].children[0].src=""
    }
    document.getElementsByClassName("simimages")[x].classList.add("imgsubst")
  }

   loadWarmUp();
}