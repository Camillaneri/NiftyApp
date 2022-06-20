


var n_queries = 0;
sessionStorage.setItem('n_queries', n_queries);
sessionStorage.setItem('clearedLikedImgs', 0);
sessionStorage.setItem('clearedDislikedImgs', 0);
sessionStorage.setItem('queryImgsClrd', '');
var query = {'pos':'','neg':''};

//GET SIMILAR IMAGES 
function fill_task_dash(){
  for(let x = 0; x <= 19; x++){
    img_element = document.getElementsByClassName('img-to-like')[x].src = ""
  if (document.getElementsByClassName("no-img")[x].classList.contains("imgsubst")== false){
    document.getElementsByClassName("no-img")[x].classList.add("imgsubst")
  }
}
  
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
    img_url = newStr0.replace('"', '');//get url


    dict_path1 = JSON.stringify(r_json['data']['artwork_metrics'][i]['artwork_id']);
    newStr01 = dict_path1.replace('"', '');
    img_id = newStr01.replace('"', '');//get id

 
   
    get_img = document.getElementsByClassName('img-to-like')[i]
    
    if (img_url.includes("https://") && img_url != "" && img_id !="" && img_url != null){// questo if filtra gli elementi che or ora ci danno problemi, andrà cambiata ma si può comunque usare per cambiare il formato delle gif e dei video per esempio
        get_img.src = img_url;
        get_img.id = img_id;
        
        document.getElementsByClassName("no-img")[i].classList.remove("imgsubst")
        
        }
    else{
        get_img.src = "images/wooops.jpg";
    }
    //for the reset button
    if (document.getElementById('LikesBox').children.length != 0 || document.getElementById('DislikesBox').children.length != 0){
     console.log("preso")
        document.getElementById('LikesBox').innerHTML = "";
        document.getElementById('DislikesBox').innerHTML = "";
        
    } 
    
}
    
    ;}
)  
}

fill_task_dash();





// IMAGE DRAG AND COPYDRAG

function allowDrop(ev) {
    
    ev.preventDefault();
};

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
    
};  

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
   
    //ev.target.appendChild(document.getElementById(data));
    var copyimg = document.createElement("img");
    var original = document.getElementById(data);
    copyimg.src = original.src;
    copyimg.classList = original.classList;
    copyimg.id = original.id
    ev.target.appendChild(copyimg);
    ev.target.children[1].classList.toggle("img-to-like");
    ev.target.children[1].classList.toggle("clear-dash");
    myImgsListener();
      
    
};  



function Addtodash(ev){
  //console.log(ev.target.parentElement.parentElement.children[2])
  giveid = ev.target.parentElement.parentElement.children[2].id
  givsrc = ev.target.parentElement.parentElement.children[2].src
  var img = document.createElement('img');
  img.src = givsrc
  img.id = giveid
  img.value = 'query'+n_queries
  img.classList = ['w-10', 'clear-dash']

  idilist = []


  
  for(var i = 0; i < document.getElementsByClassName("DataDash").length; i++){
    console.log(document.getElementsByClassName("DataDash")[i])
    if(document.getElementsByClassName("DataDash")[i].children.length > 1 && document.getElementsByClassName("DataDash")[i].children[1].id == giveid ){
      alert("you already added this image")
    } 
      
  } 
  for(var i = 0; i < document.getElementsByClassName("DataDash").length; i++){
    if(document.getElementsByClassName("DataDash")[i].children.length < 2){
    document.getElementsByClassName("DataDash")[i].appendChild(img)
    //console.log("heyyyyyyyyyyyy "+ev.target.parentElement.parentElement.children[2].outerHTML)
    break
    }
  } 
  myImgsListener();
  
  
  
    
}

// DASHBOARD EXPAND-CONTRACT 

function ExpandDash() {
    //console.log("got");
    document.getElementById("dashboard").classList.toggle("col-6");
    document.getElementById("dashboard").classList.toggle("col-3");
    for (var i = 0; i < document.getElementsByClassName("getDataboxDash").length; i++) {
        document.getElementsByClassName("getDataboxDash")[i].classList.toggle("DataDash")
        document.getElementsByClassName("getDataboxDash")[i].classList.toggle("bigdash")
      }

    document.getElementById("mainBody").classList.toggle("col-6");
    document.getElementById("mainBody").classList.toggle("col-9");
    

};






//ADD IMAGES TO QUERY
//console.log("")

console.log(query)
function AddLiked_Disliked(event) {
  
  
   
    console.log('session:', sessionStorage)
    

    num_likd = document.getElementById('LikesBox').children.length
    num_dslikd = document.getElementById('DislikesBox').children.length
    //console.log("liked "+num_likd)
    //console.log("disliked "+num_dslikd)

    if(event.target.id == 'imgBtnlike'){

        AddMeL = event.target.parentElement.parentElement.children[2].src; 
        AddidL = event.target.parentElement.parentElement.children[2].id;
  
        if (num_likd == 0 && num_dslikd == 0){
            //console.log("a.1")
            document.getElementById("LikesBox").innerHTML += "<div class='position-relative col-3 p-0'><input class='position-absolute btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='clear-liked' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+AddidL+"' src='"+AddMeL+"' class='img-thumbnail'></div>"
            }
        if((num_likd > 0 && num_likd < 3) || (num_likd < 0 && num_dslikd > 0 && num_dslikd <= 3 )){
            //console.log("a.2")
            likd_ids = []
            dislikd_ids =[];
            for(let i = 0; i < num_likd; i++){   
                var img_idL = document.getElementById("LikesBox").children[i].children[1].id; //id of liked elements
                likd_ids.push(img_idL)
            }
            for(let i = 0; i < num_dslikd; i++){
            var img_idD = document.getElementById("DislikesBox").children[i].children[1].id; //id of liked elements
            dislikd_ids.push(img_idD)
            }
            if (likd_ids.includes(AddidL)){
                //console.log("a.21")
                alert('we get that you like this artpiece, maybe add it to dashboard instead of liking it twice ;)')
            }
            else if (dislikd_ids.includes(AddidL)){
                //console.log("a.22")
                alert("we get you have conflicting feeling about art but please don't like and dislike the same artpiece:(")
            }
            else{
                //console.log("a.23")
                document.getElementById("LikesBox").innerHTML += "<div class='position-relative col-3 p-0'><input class='position-absolute btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='clear-liked' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+AddidL+"' src='"+AddMeL+"' class='img-thumbnail'></div>"
            }
        
        }
        else if ( num_likd == 3){
            //console.log("a.3")
            alert('Maximum number of liked images reached')
        }

    }
    else if(event.target.id == 'imgBtndislike'){
        //console.log("b")
        AddMeD = event.target.parentElement.parentElement.children[2].src; 
        AddidD = event.target.parentElement.parentElement.children[2].id;
        if (num_likd == 0 && num_dslikd == 0){
            //console.log("b.1")
            document.getElementById("DislikesBox").innerHTML += "<div class='position-relative col-3 p-0'><input class='position-absolute btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='clear-disliked' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+AddidD+"' src='"+AddMeD+"' class='img-thumbnail'></div>"
            }
        if((num_dslikd > 0 && num_dslikd < 3) || (num_likd > 0 && num_likd <= 3 && num_dslikd < 3)){
            //console.log("b.2")
            likd_idsD = []
            dislikd_idsD =[];
            for(let i = 0; i < num_likd; i++){  
                var img_id1 = document.getElementById("LikesBox").children[i].children[1].id; //id of liked elements
                likd_idsD.push(img_id1)
            }
            for(let i = 0; i < num_dslikd; i++){
            var img_id2 = document.getElementById("DislikesBox").children[i].children[1].id; //id of liked elements
            dislikd_idsD.push(img_id2)
            }
            if (likd_idsD.includes(AddidD)){
                //console.log("b.21")
                alert("we get you have conflicting feeling about art but please don't like and dislike the same artpiece:(")
            }
            else if (dislikd_idsD.includes(AddidD)){
                //console.log("b.22")
                alert("we get that you don't like this artpiece, but disliking it twice seems a bit excessive :(")
            }
            else{
                //console.log("b.23")
                document.getElementById("DislikesBox").innerHTML += "<div class='position-relative col-3 p-0'><input class='position-absolute btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='clear-disliked' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+AddidD+"' src='"+AddMeD+"' class='img-thumbnail'></div>"
            }
        
        }
        else if ( num_dslikd == 3){
            //console.log("b.3")
            alert('Maximum number of disliked images reached')
        }

    }
    
  
        
    //LIKE
}    



//CLEAR IMGS from fields
function clearImg(ev){
    console.log("ciauxxx "+ev.target.parentNode)
    //inizio log removed images 
    ev.target.parentNode.children[1].remove();
    if (ev.target.parentNode.parentNode.id == "LikesBox" || ev.target.parentNode.parentNode.id == "DislikesBox"){
      console.log('inside query:',ev.target.id)
      let imgId = ev.target.id

      switch (imgId){
        case 'clear-liked':
          var clearedlkd = parseInt(sessionStorage.getItem('clearedLikedImgs'))
          clearedlkd +=1
          sessionStorage.setItem('clearedLikedImgs', clearedlkd)
          console.log('liked removed',clearedlkd)
          break
        case 'clear-disliked':
          var cleareddslkd = parseInt(sessionStorage.getItem('clearedDislikedImgs'))
          cleareddslkd +=1
          sessionStorage.setItem('clearedDislikedImgs', cleareddslkd)
          
          
          console.log('disliked removed', cleareddslkd)
          break
      }
      ev.target.parentNode.remove()
    
    }
    //fine log removed images 
    myImgsListener(); //log images inserted in query, poi le do in pasto ad apply per riassumrle in una unica value di session storage 
    //console.log(ev.target.parentNode.parentNode)
}


function resetDash(){
    a = document.getElementsByClassName("getDataboxDash")
    //console.log("a "+a)
    for(let i = 0; i < a.length; i++){
      if(a[i].children.length > 1){
        a[i].children[1].remove()
    }
  }
  myImgsListener();
}


function Apply_like_dislike(){ //start 

  for(let x = 0; x <= 19; x++){
    img_element = document.getElementsByClassName('img-to-like')[x].src = ""
    if (document.getElementsByClassName("no-img")[x].classList.contains("imgsubst")== false){
      document.getElementsByClassName("no-img")[x].classList.add("imgsubst")
    }
  }

  // inizio parte log apply

  //riassumiamo le immagini cancellate da like e dislike in un unico item di storage Session
  let removedLiked = sessionStorage.getItem('clearedLikedImgs')
  let removedDisiked = sessionStorage.getItem('clearedDislikedImgs')
  console.log(n_queries, removedLiked, removedDisiked)
  // creaiamo una string con numero di query e dati da poi mettere in session storage
  var clearedforSession = +n_queries+': {removedLiked: '+removedLiked+', removedDisiked: '+removedDisiked+'}'
  console.log('clearedforSession', clearedforSession)

  var queryImgsClrd = sessionStorage.getItem('queryImgsClrd'); //riprendi value attuale in session storage
  
  switch (queryImgsClrd){
    case '':
      queryImgsClrd = clearedforSession;
      break
    default:
      queryImgsClrd = queryImgsClrd+', '+clearedforSession;
      break
  }
  sessionStorage.setItem('queryImgsClrd', queryImgsClrd)
  console.log('queryImgsClrd', queryImgsClrd)

  // riporta i count delle immagini (liked e disliked) e rimossi a zero per il count della prossima query
  sessionStorage.setItem('clearedLikedImgs', 0);
  sessionStorage.setItem('clearedDislikedImgs', 0);

  n_queries+=1 //incrementa count query dopo aver fatto i log sullo stato attuale
  console.log("Query number: ", n_queries);
  
  console.log("Add query");
  sessionStorage.setItem('n_queries', n_queries);
  console.log('n_queries =', n_queries)

  //log ids nella query
  var imgs_p =  document.getElementById('LikesBox').querySelectorAll('img')

  var positives = []
  for(var i = 0, n = imgs_p.length; i < n; ++i){
    console.log('img =', imgs_p[i].id)
    positives.push(imgs_p[i].id)
  }
  console.log('array pos=', positives)

  var imgs_n =  document.getElementById('DislikesBox').querySelectorAll('img')
  var negatives = []
  for(var i = 0, n = imgs_n.length; i < n; ++i){
    console.log('img =', imgs_n[i].id)
    negatives.push(imgs_n[i].id)
  }
  console.log('array neg=', negatives)
  console.log('quries number',n_queries)
  var dict = {'pos':positives, 'neg':negatives}
  console.log('dict:',JSON.stringify(dict))
  sessionStorage.setItem('query'+n_queries, JSON.stringify(dict))
  console.log('print session storage:', sessionStorage)
  // sessionStorage.setItem()
  // fine parte log apply



    
    num_likd = document.getElementById('LikesBox').children.length
    num_dslikd = document.getElementById('DislikesBox').children.length
    

    var num_liked = document.getElementById("LikesBox").childElementCount; //n of liked elements
  
    
 
    ids = []
    
    for(let i = 0; i < num_liked; i++){
    var img_id = document.getElementById("LikesBox").children[i].children[1].id; //id of liked elements
    ids.push(img_id)
    }

    
    
    var num_dsliked = document.getElementById("DislikesBox").childElementCount; //n of disliked elements
    
    

    d_ids = []
    
    for(let i = 0; i < num_dsliked; i++){
        var imgds_id = document.getElementById("DislikesBox").children[i].children[1].id; //id of disliked elements
        d_ids.push(imgds_id)
    
        }
    
    liked_ids = ids.join(); //string of liked to put in request
    
    
    
    disliked_ids = d_ids.join(); //string of disliked to put in request
  
    
    
    request = "https://artdiscovery.api.niftyvalue.com/recs/api/v1.0/recs?artworks_pos="+liked_ids+"&artworks_neg="+disliked_ids+""; //if its more than one they have to be numbers separated by comma without spaces
   
    ids = fetch(request)
    .then((response) => response.json())
    .then((responseJSON) => {
      biglist = responseJSON['recs']

      //list of 100 similar artwoks ids
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
        
        for(let x = 0; x <= dict1.length ; x++){
        dict = result['data']['artwork_metrics'][x]
        art_media = dict['media_type']
        art_id = dict['artwork_id']
        art_url = dict['preview']
        //art_high_res = dict['url']
        
        get_img_element = document.getElementsByClassName('img-to-like')[x] //put them into the image elements
       
        
    
        if (art_url != null && art_url != "" && art_id !="" && art_id != null && art_url.includes("https://") ){// questo if filtra gli elementi che or ora ci danno problemi, andrà cambiata ma si può comunque usare per cambiare il formato delle gif e dei video per esempio
            
            get_img_element.src = art_url;
            
            get_img_element.id = art_id;
            document.getElementsByClassName("no-img")[x].classList.remove("imgsubst")
            //console.log(get_img_element.naturalWidth + 'x' + get_img_element.naturalHeight)
            //console.log(get_img_element.width + 'x' + get_img_element.height)
            }
        else{
            get_img_element.src = "images/wooops1.jpg";
        
        }
    }
      
        
      }
      
    )
    
}
     

    )
} 

function display_img(ev){
    //console.log(ev.target)
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

  document.getElementById("displayimg").classList.toggle("seeme");
  document.getElementById("displayed").src = art_high_res;
  }})

}

function closeimg(){
    //console.log(document.getElementById("displayimg").classList)
    document.getElementById("displayimg").classList.toggle("seeme");
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
        if((document.getElementById("task2").classList[5] == "zindex")){
          window.scrollTo(0, 0);
          }
  
      } else {
        
       
        reveals[i].classList.remove("active");
        x.style.display = "block";
      }
    }
  }
  
  window.addEventListener("scroll", reveal);





// retrieve dash images ids and count 

function myImgsListener(){
  var myImgIds = []
  const gallery = document.getElementById('imagesGrid')
  console.log(gallery)
  
  const imgs = gallery.querySelectorAll('img')
  sessionStorage.setItem('myGallery_count', imgs.length)
  console.log('imgs',imgs.length)
  for(var i = 0; i < imgs.length; i++){
    myImg = imgs[i]
    myImgIds.push(JSON.str('{ '+myImg.value+': '+myImg.id+'}'))
    console.log('i=', myImg.id)
  }
  console.log('array :', myImgIds)
  sessionStorage.setItem('myImgIds', +JSON.stringify(myImgIds))
}

myImgsListener();

