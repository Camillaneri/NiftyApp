WUround = sessionStorage.getItem('WUround')
var LoadedImgsListenerWU = 0


var aidict = {}
var Userdict = {}
var Refdict = {}
var Timedict = {}


function loadWarmUp(){
  console.log('at round',WUround)
  var AIorder = []
  IDnum = Math.floor(Math.random() * 50000)
  // console.log(" a "+IDnum)
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
      
      thisRound = sessionStorage.getItem('WUround')
      oldREFdict = sessionStorage.getItem("WUreference") 
      console.log(oldREFdict)
    

      if (oldREFdict != null){
        Refdict = JSON.parse(oldREFdict)
        console.log('parsed json session')
        Refdict[thisRound]=art_id 
        sessionStorage.setItem("WUreference", JSON.stringify(Refdict))
      }else{
        Refdict[thisRound]=art_id 
        console.log('first ref', art_id)  
        sessionStorage.setItem("WUreference", JSON.stringify(Refdict))
      }

      document.getElementById('RefImg').classList.remove('imgsubst')

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
            get_img_element[x].src = art_url;
            get_img_element[x].id = art_id;
            document.getElementsByClassName("simimages")[x].classList.remove("imgsubst")

            LoadedImgsListenerWU += 1
            AIorder.push(art_id)
           
            switch(LoadedImgsListenerWU){
              case 5:
                boxes = document.querySelectorAll('.similarImg0')
                console.log(boxes.src)
                console.log(sessionStorage)
            default: break
            }
            }
        else{
            get_img_element[x].src = "images/wooops1.jpg";
        
        }
      
       
          }
          
          // tis id-else condition  parses and sets in session storage the json cpontaining the order given by the algorithm
          oldAIdict = sessionStorage.getItem("AIorder") 
          console.log(oldAIdict)
          thisRound = sessionStorage.getItem('WUround')
          
          if (oldAIdict != null){
          aidict = JSON.parse(oldAIdict)
          console.log('parsed json session')
          aidict[thisRound]=AIorder 
          sessionStorage.setItem("AIorder", JSON.stringify(aidict))
          document.getElementById("repeat-btn").disabled = false;
          document.getElementById("end-btn").disabled = false;
          startingT = new Date().getTime()
          console.log("starting time", startingT)
          }else{
            aidict[thisRound]=AIorder 
          // console.log(aidict)  
          sessionStorage.setItem("AIorder", JSON.stringify(aidict))
          document.getElementById("repeat-btn").disabled = false;
          document.getElementById("end-btn").disabled = false;
          startingT = new Date().getTime()
          console.log("starting time", startingT)
          }
          
        })})})

        }
      
 loadWarmUp(); 


// DA RICONTROLLARE

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

  // gather number of actual round 
  WUround = sessionStorage.getItem('WUround')
  WUround = parseInt(WUround)
  thisRound = WUround

  //get milliseconds of end 
  endingingT = new Date().getTime()
  console.log("ending time", endingingT)
  // get total time 
  tot_time = endingingT - startingT
  console.log("tot time", tot_time)

  oldTIMEdict = sessionStorage.getItem("TimeXround") 


  if (oldTIMEdict != null){
    Timedict = JSON.parse(oldTIMEdict)
    console.log('parsed json session')
    Timedict[thisRound]=tot_time 
    sessionStorage.setItem("TimeXround", JSON.stringify(Timedict))
  }else{
    Timedict[thisRound]=tot_time 
    // console.log(aidict)  
    sessionStorage.setItem("TimeXround", JSON.stringify(Timedict))
  }


  //MANAGE ORDER GIVEN BY THE USER
  oldUSERdict = sessionStorage.getItem("userOrder") 
  console.log(oldUSERdict)

  // create array with images ordered by user
  support = document.getElementById('Small').children[0].children
  img1 = support[0].children[0].children[2].id
  img2 = support[1].children[0].children[2].id
  img3 = support[2].children[0].children[2].id
  img4 = support[3].children[0].children[2].id
  img5 = support[4].children[0].children[2].id
  UserOrder= [img1, img2, img3, img4, img5]
  console.log('User order', UserOrder)

  // this if-else condition  parses and sets in session storage the json cpontaining the order given by the algorithm  
  if (oldUSERdict != null){
    Userdict = JSON.parse(oldUSERdict)
    console.log('parsed json session')
    Userdict[thisRound]=UserOrder 
    sessionStorage.setItem("userOrder", JSON.stringify(Userdict))
  }else{
    Userdict[thisRound]=UserOrder 
    // console.log(aidict)  
    sessionStorage.setItem("userOrder", JSON.stringify(Userdict))
  }


  WUround+=1
  sessionStorage.setItem('WUround', WUround)
  
  location.reload()

} 


function endTask(){


  WUround = sessionStorage.getItem('WUround')
  WUround = parseInt(WUround)
  thisRound = WUround
  //get milliseconds of end 
  endingingT = new Date().getTime()
  console.log("ending time", endingingT)
  // get total time 
  tot_time = endingingT - startingT
  console.log("tot time", tot_time)

  oldTIMEdict = sessionStorage.getItem("TimeXround") 

  if (oldTIMEdict != null){
    Timedict = JSON.parse(oldTIMEdict)
    console.log('parsed json session')
    Timedict[thisRound]=tot_time 
    sessionStorage.setItem("TimeXround", JSON.stringify(Timedict))
  }else{
    Timedict[thisRound]=tot_time 
    // console.log(aidict)  
    sessionStorage.setItem("TimeXround", JSON.stringify(Timedict))
  }

  oldUSERdict = sessionStorage.getItem("userOrder") 
  console.log(oldUSERdict)

  // create array with images ordered by user
  support = document.getElementById('Small').children[0].children
  img1 = support[0].children[0].children[2].id
  img2 = support[1].children[0].children[2].id
  img3 = support[2].children[0].children[2].id
  img4 = support[3].children[0].children[2].id
  img5 = support[4].children[0].children[2].id
  UserOrder= [img1, img2, img3, img4, img5]
  console.log('User order', UserOrder)

  // this if-else condition  parses and sets in session storage the json cpontaining the order given by the algorithm
  
  if (oldUSERdict != null){
    Userdict = JSON.parse(oldUSERdict)
    console.log('parsed json session')
    Userdict[thisRound]=UserOrder 
    sessionStorage.setItem("userOrder", JSON.stringify(Userdict))
  }else{
    Userdict[thisRound]=UserOrder 
    // console.log(aidict)  
    sessionStorage.setItem("userOrder", JSON.stringify(Userdict))
  }

  
  // sessionStorage.setItem("AIorder", JSON.stringify(aidict))
  sessionStorage.setItem("userOrder", JSON.stringify(Userdict))
  console.log(sessionStorage)
 

}

