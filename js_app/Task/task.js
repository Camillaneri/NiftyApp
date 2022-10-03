

//log data
var n_queries = 0;
sessionStorage.setItem('n_queries', n_queries);
sessionStorage.setItem('displayedImgs', 0);
var query = {'pos':'','neg':''};

var LoadedImgsListener = 0
//log data end

//This function fetches 20 images to fill the Gallery of the Main task
function fill_task_dash(){
// this function is activated also by clicking on the repeat task button, if that's the case we must bring the DOM back to its original state 
//remove classes applied by other functions (darken1 lower the brightness of images selected with the pin icon)
boxes = document.querySelectorAll('.darken1');
boxes.forEach(box => {
    box.classList.remove('darken1');
}); 
//reinstate the css animation(imgsubst) that replace missing images and is removed below when images are dispalyed 
for(let x = 0; x <= 19; x++){
    img_element = document.getElementsByClassName('img-to-like')[x].src = ""
if (document.getElementsByClassName("no-img")[x].classList.contains("imgsubst")== false){
    document.getElementsByClassName("no-img")[x].classList.add("imgsubst")
}
}

//Api request to fetch url and id of 20 images
    fetch('https://staging.gql.api.niftyvalue.com/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      {
        artwork_metrics(where: {media_type: {_in: ["gif", "jpg", "mjpeg", "png"]}}, limit: 21) {
          preview
          artwork_id 
        }
      }
      
        `
    }),
  })
.then(response=>response.json())
.then((result) =>{  
    const myJSON = JSON.stringify(result);
    r_json = JSON.parse(myJSON);
  
    for(let i = 0; i <= 20; i++){
    dict_path = JSON.stringify(r_json['data']['artwork_metrics'][i]['preview']);
    newStr0 = dict_path.replace('"', '');
    img_url = newStr0.replace('"', '');
    dict_path1 = JSON.stringify(r_json['data']['artwork_metrics'][i]['artwork_id']);
    newStr01 = dict_path1.replace('"', '');
    img_id = newStr01.replace('"', '');
    get_img = document.getElementsByClassName('img-to-like')[i]

    //display retrieved images if the url is in the correct format
    if (img_url.includes("https://")){
        get_img.src = img_url;
        get_img.id = img_id;
        //remove the css animation that replace missing images
        document.getElementsByClassName("no-img")[i].classList.remove("imgsubst")
        }
    else{
        get_img.src = "images/wooops.jpg";
    }



    // in the case this function is activated by clicking repeat task button, bring the DOM back to its original state 
    if (document.getElementById('LikesBox').children.length != 0 || document.getElementById('DislikesBox').children.length != 0){

        document.getElementById('LikesBox').innerHTML = "";
        document.getElementById('DislikesBox').innerHTML = "";

        boxes = document.querySelectorAll('.green');
        boxes.forEach(box => {
          box.classList.remove('green');
        });

        boxes = document.querySelectorAll('.red');
        boxes.forEach(box => {
          box.classList.remove('red');
        });
        LoadedImgsListener +=1


        
    } 
    
    
}

    }
)  

// log data
startingT = new Date().getTime()    
sessionStorage.setItem('Task_start', startingT)
console.log("starting time", startingT) 
// log data end


}


//If the user clicks on the pin icon beside an image this function displays the image on the first empty slot in the dasboard 
function Addtodash(ev){
  giveid = ev.target.parentElement.parentElement.children[1].id
  givsrc = ev.target.parentElement.parentElement.children[1].src
  ev.target.parentElement.parentElement.children[1].classList.add("darken1")
  var img = document.createElement('img');
  img.src = givsrc
  img.id = giveid
  img.name = 'query'+n_queries
  img.classList.add('w-10') 
  img.classList.add(giveid) 
  img.classList.add('clear-dash') 
  id_List =[]

  //make a list of the ids of images already displayed on the dashboard
  for(var i = 0; i < document.getElementsByClassName("getDataboxDash").length; i++){
    if(document.getElementsByClassName("getDataboxDash")[i].children.length > 1){
      id_List.push(document.getElementsByClassName("getDataboxDash")[i].children[1].id)
    } 
  } 

  for(var i = 0; i < document.getElementsByClassName("getDataboxDash").length; i++){
    if(document.getElementsByClassName("getDataboxDash")[i].children.length < 2){
      // if the image is not already on the dashboard display it on the first empty slot
      if (id_List.includes(giveid)==false){
        document.getElementsByClassName("getDataboxDash")[i].appendChild(img)
        document.getElementsByClassName("getDataboxDash")[i].children[0].classList.toggle("d-none")
        if(document.getElementsByClassName("getDataboxDash")[i].classList.contains("bigdash")==false){
          document.getElementsByClassName("getDataboxDash")[i].children[1].classList.add("img-fit-into")
          document.getElementsByClassName("getDataboxDash")[i].children[1].classList.add("fit-img")
        }
        if( document.getElementsByClassName("getDataboxDash")[i].classList.contains("bigdash")){
          document.getElementsByClassName("getDataboxDash")[i].children[0].classList.remove("Dimdash")
        }
        id_List.push(document.getElementsByClassName("getDataboxDash")[i].children[1].id)
        break
      }else{
        alert("you already added this image")
        break
      }
  }
  } 
  myImgsListener();
}




// Expand the dashboard

function ExpandDash() {
  
    document.getElementById("dashboard").classList.toggle("col-4");
    document.getElementById("dashboard").classList.toggle("col-3");
    document.getElementById("DashHeader").classList.toggle("smaldashead");
    document.getElementById("DashHeader").classList.toggle("bigdashead");
    document.getElementById("expa").classList.toggle("d-none");
    document.getElementById("contra").classList.toggle("d-none");
    for (var i = 0; i < document.getElementsByClassName("getDataboxDash").length; i++) {
        document.getElementsByClassName("getDataboxDash")[i].classList.toggle("DataDash")
        document.getElementsByClassName("getDataboxDash")[i].classList.toggle("bigdash")
        if(document.getElementsByClassName("getDataboxDash")[i].children.length > 1){
          document.getElementsByClassName("getDataboxDash")[i].children[1].classList.toggle("fit-img")
          document.getElementsByClassName("getDataboxDash")[i].children[1].classList.toggle("img-fit-into")
        }else{
          document.getElementsByClassName("getDataboxDash")[i].classList.toggle("Dimdash")
        }
      }
    document.getElementById("imagesGrid").classList.toggle("flex-column");
    document.getElementById("mainBody").classList.toggle("col-8");
    document.getElementById("mainBody").classList.toggle("col-9");
};








//This function manages the addition of liked and disliked images in the right box
function AddLiked_Disliked(event) {

    num_likd = document.getElementById('LikesBox').children.length
    num_dslikd = document.getElementById('DislikesBox').children.length

    // the user clicked on the "like" button
    // if the user "likes" again the same image delete it from the box
    // if they "like" and "dislike" the same image display an error message
    // if they like more than 3 images display an error message
    // in any other case add the image in the "liked images" box 
    if(event.target.id == 'imgBtnlike'){ 
        AddMeL = event.target.parentElement.parentElement.children[1].src; 
        AddidL = event.target.parentElement.parentElement.children[1].id;
        if (num_likd == 0 && num_dslikd == 0){  
            document.getElementById("LikesBox").innerHTML += "<div class='position-relative col-3 p-0 mx-2 img-contain'><input class='position-absolute cross-btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='clear-liked' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+AddidL+"' src='"+AddMeL+"' class='img-thumbnail img-fit-in'></div>"
            event.target.classList.add("green")
          }
        if((num_likd > 0 && num_likd < 3) || (num_likd == 0 && num_dslikd > 0 && num_dslikd <= 3 )){
            likd_ids = []
            dislikd_ids =[];
            for(let i = 0; i < num_likd; i++){   
                var img_idL = document.getElementById("LikesBox").children[i].children[1].id; 
                likd_ids.push(img_idL)
            }
            for(let i = 0; i < num_dslikd; i++){
            var img_idD = document.getElementById("DislikesBox").children[i].children[1].id; 
            dislikd_ids.push(img_idD)
            }
            if (likd_ids.includes(AddidL)){
                for(let i = 0; i < document.getElementById("LikesBox").children.length; i++){
                  if(document.getElementById("LikesBox").children[i].children[1].id == AddidL){
                    event.target.classList.remove("green")
                    document.getElementById("LikesBox").children[i].remove()
                  }
                } 
            }
            else if (dislikd_ids.includes(AddidL)){
                alert("please don't like and dislike the same image")
            }
            else{
                document.getElementById("LikesBox").innerHTML += "<div class='position-relative col-3 mx-2 p-0 img-contain'><input class='position-absolute cross-btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='clear-liked' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+AddidL+"' src='"+AddMeL+"' class='img-thumbnail  img-fit-in'></div>"
                event.target.classList.add("green")
              }
        }
        else if ( num_likd == 3){
            alert('Maximum number of liked images reached')
        }

    }

    // the user clicked on the "dislike" button

    // if the user "dislikes" again the same image delete it from the box
    // if they "like" and "dislike" the same image display an error message
    // if they "dilike" more than 3 images display an error message
    // in any other case add the image in the "disliked images" box 
    else if(event.target.id == 'imgBtndislike'){
        AddMeD = event.target.parentElement.parentElement.children[1].src; 
        AddidD = event.target.parentElement.parentElement.children[1].id;
        if (num_likd == 0 && num_dslikd == 0){
            document.getElementById("DislikesBox").innerHTML += "<div class='position-relative col-3 mx-2 p-0 img-contain'><input class='position-absolute cross-btn btn-light p-0 ' style='font-family: bootstrap-icons' type='button' id='clear-disliked' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+AddidD+"' src='"+AddMeD+"' class='img-thumbnail img-fit-in'></div>"
            event.target.classList.add("red")
          }
        if((num_dslikd > 0 && num_dslikd < 3) || (num_likd > 0 && num_likd <= 3 && num_dslikd < 3)){
            likd_idsD = []
            dislikd_idsD =[];
            for(let i = 0; i < num_likd; i++){  
                var img_id1 = document.getElementById("LikesBox").children[i].children[1].id; 
                likd_idsD.push(img_id1)
            }
            for(let i = 0; i < num_dslikd; i++){
            var img_id2 = document.getElementById("DislikesBox").children[i].children[1].id; 
            dislikd_idsD.push(img_id2)
            
            }
            if (likd_idsD.includes(AddidD)){
                alert("we get you have conflicting feeling about art but please don't like and dislike the same artpiece:(")
            }
            else if (dislikd_idsD.includes(AddidD)){
                for(let i = 0; i < document.getElementById("DislikesBox").children.length; i++){
                  if(document.getElementById("DislikesBox").children[i].children[1].id == AddidD){
                    event.target.classList.remove("red")
                    document.getElementById("DislikesBox").children[i].remove()
                  }
                } 
            }
            else{
                document.getElementById("DislikesBox").innerHTML += "<div class='position-relative col-3 p-0 mx-2 img-contain'><input class='position-absolute cross-btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='clear-disliked' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+AddidD+"' src='"+AddMeD+"' class='img-thumbnail img-fit-in'></div>"
                event.target.classList.add("red")
              }
        
        }
        else if ( num_dslikd == 3){
            alert('Maximum number of disliked images reached')
        }

    }

}    



//This function delete image from the likes or dislikes box and from the dashboard
function clearImg(ev){
  ev.target.parentNode.children[1].classList.remove("img-fit-in")
  getid = ev.target.parentNode.children[1].id
  ev.target.parentNode.children[1].remove()

  //the image is inside the likes or dislikes box
  if (ev.target.parentNode.parentNode.id == "LikesBox" || ev.target.parentNode.parentNode.id == "DislikesBox"){
    ev.target.parentNode.remove()
    for(let i = 1; i < 21; i++){
      if( document.getElementById("drag"+i).children[1].id == getid){
        if(document.getElementById("drag"+i).children[1].parentNode.children[2].children[0].classList.contains("green")==true){
          document.getElementById("drag"+i).children[1].parentNode.children[2].children[0].classList.remove("green")
        }
        if(document.getElementById("drag"+i).children[1].parentNode.children[2].children[1].classList.contains("red")==true){
          document.getElementById("drag"+i).children[1].parentNode.children[2].children[1].classList.remove("red")
        }
      }
    }
  //the image is inside the dashboard
  } else{
    ev.target.classList.toggle("d-none")
    for(let i = 1; i < 21; i++){
      if( document.getElementById("drag"+i).children[1].id == getid){
        document.getElementById("drag"+i).children[1].classList.remove("darken1")
      }
    }
    if(ev.target.parentElement.classList.contains("bigdash")){
      ev.target.parentElement.classList.add("Dimdash")
    }
    

    
  
  }
  //log data
  myImgsListener(); //log images inserted in query,fed to apply in which they are resumed in a value of session storage 
//log data end
}


// This function cleans the dashboard 
function resetDash(){
  
    a = document.getElementsByClassName("getDataboxDash")
    for(let i = 0; i < a.length; i++){
      if(a[i].children.length > 1){
        a[i].children[1].remove()
        a[i].children[0].classList.add("d-none")
        if(a[i].classList.contains("bigdash") == true){
          a[i].classList.add("Dimdash")
        }
        
    }
  }
  myImgsListener();
}


// log data to gather tot amount of time for each query
function repeatTask(){
  endingingT = new Date().getTime()
  // get total time 
  tot_time = endingingT - startingT

  oldTIMEdict = sessionStorage.getItem("TimeXround") 
  Timedict = {}

  if (oldTIMEdict != null){
    Timedict = JSON.parse(oldTIMEdict)
    Timedict[n_queries]=tot_time 
    sessionStorage.setItem("TimeXround", JSON.stringify(Timedict))
  }else{
    Timedict[n_queries]=tot_time 
    sessionStorage.setItem("TimeXround", JSON.stringify(Timedict))
  }
  resetDash()
  fill_task_dash()
}

//log data end



// This function takes the ids of "liked" and "disliked" images amd fetch the resulting recommended images to fill the gallery
function Apply_like_dislike(){ 

//clean the gallery from the classes added to highlight "liked" or "disliked" images
  for(let x = 0; x <= 19; x++){
    img_element = document.getElementsByClassName('img-to-like')[x].src = ""
    if (document.getElementsByClassName("no-img")[x].classList.contains("imgsubst")== false){
      document.getElementsByClassName("no-img")[x].classList.add("imgsubst")
    }
  }
boxes = document.querySelectorAll('.green');
boxes.forEach(box => {
  box.classList.remove('green');
});
boxes = document.querySelectorAll('.red');
boxes.forEach(box => {
  box.classList.remove('red');
});
boxes = document.querySelectorAll('.darken1');
boxes.forEach(box => {
  box.classList.remove('darken1');
}); 



//log data
  // inizio parte log apply
  endingingT = new Date().getTime()
  console.log("ending time", endingingT)
  // get total time 
  tot_time = endingingT - startingT
  console.log("tot time", tot_time)
  oldTIMEdict = sessionStorage.getItem("TimeXquery") 
  Timedict = {}

  if (oldTIMEdict != null){
    Timedict = JSON.parse(oldTIMEdict)
    Timedict[n_queries]=tot_time 
    sessionStorage.setItem("TimeXquery", JSON.stringify(Timedict))
  }else{
    Timedict[n_queries]=tot_time 
    sessionStorage.setItem("TimeXquery", JSON.stringify(Timedict))
  }
  n_queries+=1 //incrementa count query dopo aver fatto i log sullo stato attuale
  sessionStorage.setItem('n_queries', n_queries);
  //log ids nella query
  var imgs_p =  document.getElementById('LikesBox').querySelectorAll('img')
  var positives = []
  for(var i = 0, n = imgs_p.length; i < n; ++i){
    positives.push(imgs_p[i].id)
  }
  var imgs_n =  document.getElementById('DislikesBox').querySelectorAll('img')
  var negatives = []
  for(var i = 0, n = imgs_n.length; i < n; ++i){
    negatives.push(imgs_n[i].id)
  }
  var dict = {'pos':positives, 'neg':negatives}
  sessionStorage.setItem('query'+n_queries, JSON.stringify(dict))
//log data end
    

    //if no image has been "liked" or "disliked" call the function to fetch 20 new images to fill the gallery
    num_likd = document.getElementById('LikesBox').children.length
    num_dslikd = document.getElementById('DislikesBox').children.length
    if(num_likd == 0 && num_dslikd == 0){
      fill_task_dash()
    }else{

    //number of liked elements
    var num_liked = document.getElementById("LikesBox").childElementCount; 

    //list of id of liked elements
    ids = []
    for(let i = 0; i < num_liked; i++){
    var img_id = document.getElementById("LikesBox").children[i].children[1].id; 
    ids.push(img_id)
    }

    //number of disliked elements
    var num_dsliked = document.getElementById("DislikesBox").childElementCount; 
    
    //list of ids of disliked elements
    d_ids = []
    for(let i = 0; i < num_dsliked; i++){
        var imgds_id = document.getElementById("DislikesBox").children[i].children[1].id; 
        d_ids.push(imgds_id)
        }
    
    // transform the list of liked ids into a string
    liked_ids = ids.join(); 
    
    // transform the list of diliked ids into a string
    disliked_ids = d_ids.join(); 
  
    //use the strings with the ids of "liked" and "disliked" elements to send an api request and retrieve a list of images that are similar to the "liked" images and different from the "disliked" images
    request = "https://artdiscovery.api.niftyvalue.com/recs/api/v1.0/recs?artworks_pos="+liked_ids+"&artworks_neg="+disliked_ids+""; 
   
    ids = fetch(request)
    .then((response) => response.json())
    .then((responseJSON) => {
      biglist = responseJSON['recs']

      //obtain a list of 100 recommended artwoks ids
      biglist_str = biglist.join();
      
      Refquery =  `
      {
        artwork_metrics(where: {media_type: {_in: ["gif", "png", "jpg", "mjpeg"]}, artwork_id: {_in: [`+biglist_str+ `] }}, limit: 20) {
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
        
        //display the recommended images
        for(let x = 0; x <= dict1.length ; x++){
        dict = result['data']['artwork_metrics'][x]
        art_media = dict['media_type']
        art_id = dict['artwork_id']
        art_url = dict['preview']
        get_img_element = document.getElementsByClassName('img-to-like')[x] 
        if ( art_id !="" && art_id != null && art_url.includes("https://") ){
            get_img_element.src = art_url;
            get_img_element.id = art_id;
            document.getElementsByClassName("no-img")[x].classList.remove("imgsubst")
            }
        else{
            get_img_element.src = "images/wooops1.jpg";
        
        }
        
    }
     
        
      }
      
    )
    
} )

}
//log data
startingT = new Date().getTime()    
sessionStorage.setItem('Task_start', startingT)
console.log("starting time", startingT) 
//log data end
}



// display a bigger, high resolution version of an image clicked by the user
function display_img(ev){
  // log counting how may time displayed images is acrivated
  var count = parseInt(sessionStorage.getItem('displayedImgs'));
  count +=1
  sessionStorage.setItem('displayedImgs', count);
  //log data end
  // an api request is necessary to obtain an High resolution version of the image
  hid = ev.target.id
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
  // display a view of the high resolution image
  document.getElementById("shadow").classList.toggle("seeme");
  document.getElementById("displayed").src = art_high_res;
  window.scrollTo(0, 0);
  document.getElementById("bd1").classList.add("noscroll")
  
  }
})

}
//close the view of the high resolution image
function closeimg(){
    document.getElementById("shadow").classList.remove("seeme");
    document.getElementById("bd1").classList.remove("noscroll")
}



// log data

// retrieve My Gallery images ids and count 
function myImgsListener(){
  var myImgIds = []
  const gallery = document.getElementById('imagesGrid')
  const imgs = gallery.querySelectorAll('img')
  sessionStorage.setItem('myGallery_count', imgs.length)
  for(var i = 0; i < imgs.length; i++){
    myImg = imgs[i]
    myImgIds.push('{ '+myImg.name+': '+myImg.id+'}')
  }
  sessionStorage.setItem('myImgIds', myImgIds)
}

myImgsListener();

// log data end



// log data
function resetTask(){
  endingingT = new Date().getTime()
  console.log("ending time", endingingT)
  // get total time 
  tot_time = endingingT - startingT
  console.log("tot time", tot_time)
  oldTIMEdict = sessionStorage.getItem("TimeXround") 
  Timedict = {}

  if (oldTIMEdict != null){
    Timedict = JSON.parse(oldTIMEdict)
    console.log('parsed json session')
    Timedict[n_queries]=tot_time 
    sessionStorage.setItem("TimeXround", JSON.stringify(Timedict))
  }else{
    Timedict[n_queries]=tot_time 
    // console.log(aidict)  
    sessionStorage.setItem("TimeXround", JSON.stringify(Timedict))
  }
  fill_task_dash();
}

// log data end