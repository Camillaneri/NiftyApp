WUround = sessionStorage.getItem('WUround')
var LoadedImgsListenerWU = 0


var aidict = {}
var Userdict = {}

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

      sessionStorage.setItem('WUreference', refimg.id)
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
                sessionStorage.setItem('startWU' , startWU)
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
          }else{
            aidict[thisRound]=AIorder 
          // console.log(aidict)  
          sessionStorage.setItem("AIorder", JSON.stringify(aidict))
          document.getElementById("repeat-btn").disabled = false;
          document.getElementById("end-btn").disabled = false;
          }
          
        })})})

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
  console.log('hi')
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

  document.getElementsByClassName("REF")[0].src=""
  document.getElementById("RefImg").classList.add("imgsubst")
  oldAIord = sessionStorage.getItem("AIorder")
  // console.log('old AI order',JSON.parse(oldAIord))
  support = document.getElementById('Small').children[0].children
  // console.log('support',support[0].children[0].children[2])
  img1 = support[0].children[0].children[2].id
  img2 = support[1].children[0].children[2].id
  img3 = support[2].children[0].children[2].id
  img4 = support[3].children[0].children[2].id
  img5 = support[4].children[0].children[2].id
  Userdict[WUround]= [img1, img2, img3, img4, img5]
  // console.log('dict',Userdict)
  console.log(sessionStorage)
  WUround = sessionStorage.getItem('WUround')
  WUround = parseInt(WUround)
  WUround+=1
  sessionStorage.setItem('WUround', WUround)
  
  location.reload()

    // document.getElementById("clumnN2").innerHTML="<div class='p-4 collapse show almostBlack' id='Small'>  <!--Small--> <div class='dropboxes d-flex overflowY almostBlack'><div class='getDatabox1'>                     <div id='getData21' ondrop='drop(event)' ondragover='allowDrop(event)' class='position-relative myDiv text-center tall-img' >            <button class='position-absolute cross-btn btn-dark align-self-end d-none pincontainer' onclick='clearImg(event)'>x</button> <div class='position-absolute m-1 z-1 border-dot'>#1</div> <img id='WUimg1' class='img-fit' src=''></div>  </div>   <div class='getDatabox1'>     <div id='getData22' ondrop='drop(event)' ondragover='allowDrop(event)' class='position-relative myDiv text-center tall-img' >            <button class='position-absolute cross-btn btn-dark align-self-end d-none pincontainer' onclick='clearImg(event)'>x</button> <div class='position-absolute m-1 z-1 border-dot'>#2</div> <img id='WUimg2' class='img-fit' src=''></div>          </div>        <div class='getDatabox1'> <div id='getData23' ondrop='drop(event)' ondragover='allowDrop(event)' class='position-relative myDiv text-center tall-img' >             <button class='position-absolute cross-btn btn-dark align-self-end d-none pincontainer' onclick='clearImg(event)'>x</button> <div class='position-absolute m-1 z-1 border-dot'> #3</div> <img id='WUimg3' class='img-fit' src=''></div>       </div>        <div class='getDatabox1'>            <div id='getData24' ondrop='drop(event)' ondragover='allowDrop(event)' class='position-relative myDiv text-center tall-img' >            <button class='position-absolute cross-btn btn-dark align-self-end d-none pincontainer' onclick='clearImg(event)'>x</button> <div class='position-absolute m-1 z-1 border-dot'>#4</div> <img id='WUimg4' class='img-fit' src=''></div>         </div>        <div class='getDatabox1'>     <div id='getData25' ondrop='drop(event)' ondragover='allowDrop(event)' class='position-relative myDiv text-center tall-img' >            <button class='position-absolute cross-btn btn-dark align-self-end d-none pincontainer' onclick='clearImg(event)'>x</button> <div class='position-absolute m-1 z-1 border-dot'>#5</div> <img id='WUimg5' class='img-fit' src=''></div>        </div>  </div>       </div>  <div class='flex-grow-1 text-center justify-content-center' id='linguetta'><button type='button' class='almostBlack text-center' onclick='arrowDown()' id='arrowDownButton'><i class='fa-solid fa-chevron-down'></i></button><button type='button' class='almostBlack text-center collapse' onclick='arrowUp()' id='arrowUpButton'><i class='fa-solid fa-chevron-up'></i></button></div><div class='row px-4 d-flex flex-wrap mx-auto overflowY dcenter-item' id='coso'>    <div class='col-12 col-md-6  col-lg-4 position-relative simimages imgsubst mb-3 px-2 p-0'  onclick='display_img(event)'  id='similarBox0' draggable='true' ondragstart='drag(event)'><div class='col-2 position-absolute w-min-content text-left pincontainer' id='' type='button' onclick='pin_WU(event)'><i class='fa-solid pt-2 fa-thumbtack mt-2' id='pin' data-toggle='tooltip' title='click on the pin to add the image to the dashboard'></i></div><img value='0' src='' draggable='true' class='img max-h-50 w-100 recover similarImg0'  id=''>    </div> <div class='col-12 col-md-6 col-lg-4 position-relative simimages imgsubst mb-3 px-2 p-0'  onclick='display_img(event)'  id='similarBox1' draggable='true' ondragstart='drag(event)'><div class='col-2 position-absolute w-min-content text-left pincontainer' id='' type='button' onclick='pin_WU(event)'><i class='fa-solid pt-2 fa-thumbtack mt-2' id='pin' data-toggle='tooltip' title='click on the pin to add the image to the dashboard'></i></div><img value='0' src='' draggable='true' class='img max-h-50 w-100 recover similarImg0'  id=''></div>  <div class='col-12 col-md-6 col-lg-4  position-relative simimages imgsubst mb-3 px-2 p-0'  onclick='display_img(event)'  id='similarBox2' draggable='true' ondragstart='drag(event)'><div class='col-2 position-absolute w-min-content text-left pincontainer' id='' type='button' onclick='pin_WU(event)'><i class='fa-solid pt-2 fa-thumbtack mt-2' id='pin' data-toggle='tooltip' title='click on the pin to add the image to the dashboard'></i></div><img value='0' src='' draggable='true' class='img max-h-50 w-100 recover similarImg0'  id=''></div> <div class='col-12 col-md-6 col-lg-4  position-relative simimages imgsubst mb-3 px-2 p-0'  onclick='display_img(event)'  id='similarBox3' draggable='true' ondragstart='drag(event)'><div class='col-2 position-absolute w-min-content text-left pincontainer' id='' type='button' onclick='pin_WU(event)'><i class='fa-solid pt-2 fa-thumbtack mt-2' id='pin' data-toggle='tooltip' title='click on the pin to add the image to the dashboard'></i></div><img value='0' src='' draggable='true' class='img max-h-50 w-100 recover similarImg0'  id=''>                     </div><div class='col-12 col-md-6 col-lg-4  position-relative simimages imgsubst mb-3 px-2 p-0'  onclick='display_img(event)'  id='similarBox4' draggable='true' ondragstart='drag(event)'><div class='col-2 position-absolute w-min-content text-left pincontainer' id='' type='button' onclick='pin_WU(event)'><i class='fa-solid pt-2 fa-thumbtack mt-2' id='pin' data-toggle='tooltip' title='click on the pin to add the image to the dashboard'></i></div><img value='0' src='' draggable='true' class='img max-h-50 w-100 recover similarImg0'  id=''></div>     </div> </div>"


  /* for(let x = 0; x < 5 ; x++){
    a = document.getElementsByClassName("simimages")
    if(a[x].children.length > 0){
      a[x].children[0].src=""
    }
    document.getElementsByClassName("simimages")[x].classList.add("imgsubst")
  } */

  
   loadWarmUp();



} 


function endTask(){
  const endWU = new Date().getTime()
  sessionStorage.setItem('endWU'+n_round , endWU)
  // sessionStorage.setItem("AIorder", JSON.stringify(aidict))
  sessionStorage.setItem("userOrder", JSON.stringify(Userdict))
  console.log(sessionStorage)
 

}

function resetWU(){

}