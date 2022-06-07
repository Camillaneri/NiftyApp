/*function loadWarmUp(){
  function getRef() {
    console.log('START LOADING')
    IDnum = Math.floor(Math.random() * 50000) + 1

    Refquery =  `
        {
          {
            artwork_metrics(where: {media_type: {_in: ["gif", "png", "jpg", "mjpeg"]}, artwork_id: {_eq: `+IDnum+` }}) {
              preview
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
      console.log(result)
      id_dict = result['data']['artworks_by_pk']
      media = id_dict['media_type']
      id = id_dict['id']
      console.log('ID =',media)
      $('#reference').attr('src',  id_dict['url'])
      query = "https://artdiscovery.api.niftyvalue.com/recs/api/v1.0/recs?artworks_pos="+IDnum

      request = "https://artdiscovery.api.niftyvalue.com/recs/api/v1.0/recs?artworks_pos="+liked_ids+"&artworks_neg="+disliked_ids+""; //if its more than one they have to be numbers separated by comma without spaces
   
      ids = fetch(request)
      .then((response) => response.json())
      .then((responseJSON) => {
        biglist = responseJSON['recs']
  
        //list of 100 similar artwoks ids
        biglist_str = biglist.join();
        
        Refquery =  `
        {
          artwork_metrics(where: {media_type: {_in: ["gif", "png", "jpg", "mjpeg"]}, artwork_id: {_in: [`+biglist_str+ `] }}, limit: 5 {
            artwork_id
            media_type
            preview
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
          art_media = dict['media_type']
          art_id = dict['artwork_id']
          art_url = dict['preview']
          //art_high_res = dict['url']
          
          get_img_element = document.getElementsByClassName('w-10')[x] //put them into the image elements
         
          
      
          if (art_url != null && art_url != "" && art_id !="" && art_id != null && art_url.includes("https://") ){// questo if filtra gli elementi che or ora ci danno problemi, andrà cambiata ma si può comunque usare per cambiare il formato delle gif e dei video per esempio
              
              get_img_element.src = art_url;
              
              get_img_element.id = art_id;
              console.log(get_img_element.naturalWidth + 'x' + get_img_element.naturalHeight)
              console.log(get_img_element.width + 'x' + get_img_element.height)
              }
          else{
              get_img_element.src = "images/wooops1.jpg";
          
          }
      }
        
          
        }
        
      )
      
  }
       
  
      )
    }*/


     
function loadWarmUp(){
  
  

  IDnum = Math.floor(Math.random() * 50000)
  //console.log(" a "+IDnum)

  

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
      //console.log(result)
      refimg = document.getElementById("reference")
      //console.log(refimg)
      
      dict = result['data']['artwork_metrics'][0]
      if(dict == null){
        //console.log("preso1!")
        loadWarmUp()
      }
      /*if(dict == undefined){
        //console.log("preso2!")
        loadWarmUp()
      }*/
      //console.log(dict)
      //console.log(result['data']['artwork_metrics'].length)
      art_id = IDnum
      art_high_res = dict['url']
      if(art_high_res == null){
        //console.log("preso!")
        loadWarmUp()
      }

      //console.log("controllo "+art_high_res)

     
      
      if (art_high_res != null && art_high_res != "" && art_id !="" && art_id != null && art_high_res.includes("https://") ){// questo if filtra gli elementi che or ora ci danno problemi, andrà cambiata ma si può comunque usare per cambiare il formato delle gif e dei video per esempio
        refimg.src = art_high_res;
            }
        else{
            get_img_element.src = "images/wooops1.jpg";
        }
      refimg.src = art_high_res;
     

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
          get_img_element = document.getElementById('similarImg0') //put them into the image elements
          
            //console.log(get_img_element)
        
    
        if (art_url != null && art_url != "" && art_id !="" && art_id != null && art_url.includes("https://") ){// questo if filtra gli elementi che or ora ci danno problemi, andrà cambiata ma si può comunque usare per cambiare il formato delle gif e dei video per esempio
            //console.log("HEIGHT!!!!!")
            
            get_img_element.style.height = null;
            
            //box = document.getElementsByClassName("position-relative col-lg-4 col-md-6");
            /*for(let x = 0; x < box.length ; x++){
              box[x].style.height = "";
            }
            */
            get_img_element.src = art_url;
            
            get_img_element.id = art_id;
        
            }
        else{
            get_img_element.src = "images/wooops1.jpg";
        
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

    } else {
      
     
      reveals[i].classList.remove("active");
      x.style.display = "block";
    }
  }
}

window.addEventListener("scroll", reveal);

function arrowDown(){
  console.log("arrowDown big "+document.getElementById("Big").classList+" small "+document.getElementById("Small").classList)
  if((document.getElementById("Big").classList[2] == "show") == false && (document.getElementById("Small").classList[2] == "show") == false){
    console.log("a") 
    console.log("arrowDown big "+document.getElementById("Big").classList+" small "+document.getElementById("Small").classList)
  document.getElementById("Small").classList.toggle("show");}
  else if((document.getElementById("Big").classList[2] == "show") == false && (document.getElementById("Small").classList[2] == "show") == true){
    console.log("b")
    console.log("arrowDown big "+document.getElementById("Big").classList+" small "+document.getElementById("Small").classList) 
  document.getElementById("Small").classList.toggle("show");
  document.getElementById("Big").classList.toggle("show");
  document.getElementById("arrowDownButton").classList.toggle("collapse");
    if((document.getElementById("arrowUpButton").classList[2] == "collapse") == true){
      document.getElementById("arrowUpButton").classList.toggle("collapse");
    }
    console.log("arrowDownButton "+document.getElementById("arrowUpButton").classList)
  }
}
function arrowUp(){
  console.log("arrowUp big "+document.getElementById("Big").classList+" small "+document.getElementById("Small").classList)
  if((document.getElementById("Big").classList[2] == "show") == true && (document.getElementById("Small").classList[2] == "show") == false){
    console.log("c") 
  document.getElementById("Big").classList.toggle("show");
  document.getElementById("Small").classList.toggle("show");}
  else if((document.getElementById("Big").classList[2] == "show") == false && (document.getElementById("Small").classList[2] == "show") == true){
    console.log("d") 
  document.getElementById("Small").classList.toggle("show");
  document.getElementById("arrowUpButton").classList.toggle("collapse");
  if((document.getElementById("arrowDownButton").classList[2] == "collapse") == true){
    document.getElementById("arrowDownButton").classList.toggle("collapse");
  }
  
  }

}
/*function disappear1(){
  if((document.getElementById("Small").classList[2] == "show") == false){
  document.getElementById("Big").classList.toggle("collapse");
  }
}*/