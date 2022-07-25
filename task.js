


var n_queries = 0;
sessionStorage.setItem('n_queries', n_queries);
sessionStorage.setItem('clearedLikedImgs', 0);
sessionStorage.setItem('clearedDislikedImgs', 0);
sessionStorage.setItem('dispolayedImgs', 0);
sessionStorage.setItem('displayedImgs', 0);
sessionStorage.setItem('queryImgsClrd', '');
var query = {'pos':'','neg':''};

var LoadedImgsListener = 0
//GET SIMILAR IMAGES 
function fill_task_dash(){
  boxes = document.querySelectorAll('.darken1');
boxes.forEach(box => {
  box.classList.remove('darken1');
});


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
     ////console.log("preso")
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
        ////console.log(LoadedImgsListener)
        
    } 
    
}

////console.log('start task')
    
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
    id_List =[]
    var data = ev.dataTransfer.getData("Text");
    ////console.log("target"+ ev.target.outerHTML)
    //ev.target.appendChild(document.getElementById(data));
    var copyimg = document.createElement("img");
    var original = document.getElementById(data);
    
    ////console.log("SOURCE"+copyimg.src)
    ////console.log("ORIG-SOURCE"+original.src)
    copyimg.src = original.src;
    copyimg.classList = original.classList;
    copyimg.id = original.id
    copyimg.name = 'query'+n_queries

    

    for(var i = 0; i < document.getElementsByClassName("getDataboxDash").length; i++){
      if(document.getElementsByClassName("getDataboxDash")[i].children.length > 1){
        id_List.push(document.getElementsByClassName("getDataboxDash")[i].children[1].id)
      } 
    }
      //console.log( id_List)

    //console.log(ev.target.outerHTML)
    if(id_List.includes(original.id)==false){
      if(ev.target.classList.contains("bigdash")){
        ev.target.classList.remove("Dimdash")
        ev.target.appendChild(copyimg);
        ev.target.children[1].classList.toggle("img-to-like");
        ev.target.children[1].classList.toggle("clear-dash");
        myImgsListener(); //@chiara è tuo questo?
        ev.target.children[0].classList.toggle("d-none")
        //original.classList.add("imggreen")
      }else{
    //ev.target.classList.toggle("DataDash")
    ev.target.classList.remove("Dimdash")
    ev.target.appendChild(copyimg);
    ev.target.children[1].classList.toggle("img-to-like");
    ev.target.children[1].classList.add("img-fit-into");
    ev.target.children[1].classList.add("fit-img");
    ev.target.children[1].classList.toggle("clear-dash");
    myImgsListener();//@chiara è tuo questo? perchè l'ho duplicato
    ev.target.children[0].classList.toggle("d-none")
    original.classList.add("darken1")
    //original.classList.add("imggreen")
  }
  }
    else{
      alert("you already added this image")
    }
  
    
};  



//PIN TO DASH

function Addtodash(ev){
  //////console.log(ev.target.parentElement.parentElement.children[2])
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

  idilist = []
  //console.log(giveid)

  for(var i = 0; i < document.getElementsByClassName("getDataboxDash").length; i++){
    if(document.getElementsByClassName("getDataboxDash")[i].children.length > 1){
      id_List.push(document.getElementsByClassName("getDataboxDash")[i].children[1].id)
    } 
    //console.log( id_List)
    ////console.log(document.getElementsByClassName("DataDash")[i])
    /* if(document.getElementsByClassName("DataDash")[i].children.length > 1 && document.getElementsByClassName("DataDash")[i].children[1].id == giveid ){
      alert("you already added this image")
    }  */
      
  } 
  for(var i = 0; i < document.getElementsByClassName("getDataboxDash").length; i++){
    if(document.getElementsByClassName("getDataboxDash")[i].children.length < 2){
      if (id_List.includes(giveid)==false){
      //console.log(id_List.includes(giveid)==false)
    //ev.target.parentElement.classList.remove("lightgreencol")
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
    //////console.log("heyyyyyyyyyyyy "+ev.target.parentElement.parentElement.children[2].outerHTML)
    break
  
    }else{
      alert("you already added this image")
      break
    }
  }
  } 
  myImgsListener();
}




// DASHBOARD EXPAND-CONTRACT 

function ExpandDash() {
    //////console.log("got");
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






//ADD IMAGES TO QUERY
//////console.log("")

////console.log(query)
function AddLiked_Disliked(event) {
  
  
   
    ////console.log('session:', sessionStorage)
    

    num_likd = document.getElementById('LikesBox').children.length
    num_dslikd = document.getElementById('DislikesBox').children.length
    ////console.log("liked "+num_likd)
    ////console.log("disliked "+num_dslikd)

    if(event.target.id == 'imgBtnlike'){

        AddMeL = event.target.parentElement.parentElement.children[1].src; 
        AddidL = event.target.parentElement.parentElement.children[1].id;
  
        if (num_likd == 0 && num_dslikd == 0){
            
            //////console.log("a.1")
            document.getElementById("LikesBox").innerHTML += "<div class='position-relative col-3 p-0 mx-2 img-contain'><input class='position-absolute cross-btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='clear-liked' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+AddidL+"' src='"+AddMeL+"' class='img-thumbnail img-fit-in'></div>"
            event.target.classList.add("green")
          }
        if((num_likd > 0 && num_likd < 3) || (num_likd == 0 && num_dslikd > 0 && num_dslikd <= 3 )){
            ////console.log("a.2")
            likd_ids = []
            dislikd_ids =[];
            for(let i = 0; i < num_likd; i++){   
                var img_idL = document.getElementById("LikesBox").children[i].children[1].id; //id of liked elements
                likd_ids.push(img_idL)
                console.log(likd_ids)
            }
            for(let i = 0; i < num_dslikd; i++){
            var img_idD = document.getElementById("DislikesBox").children[i].children[1].id; //id of liked elements
            dislikd_ids.push(img_idD)
            }
            if (likd_ids.includes(AddidL)){
                //console.log("a.21")
                //alert('we get that you like this artpiece, maybe add it to dashboard instead of liking it twice ;)')
                //console.log("ciao"+document.getElementById("LikesBox").children[0].children[1].id)
                for(let i = 0; i < document.getElementById("LikesBox").children.length; i++){
                  if(document.getElementById("LikesBox").children[i].children[1].id == AddidL){
                    console.log("ciao")
                    console.log("ciao"+document.getElementById("LikesBox").children[i].children[1].id)
                    event.target.classList.remove("green")
                    document.getElementById("LikesBox").children[i].remove()
                  }
                } 
            }
            else if (dislikd_ids.includes(AddidL)){
                ////console.log("a.22")
                alert("we get you have conflicting feeling about art but please don't like and dislike the same artpiece:(")
            }
            else{
                ////console.log("a.23")
                
                document.getElementById("LikesBox").innerHTML += "<div class='position-relative col-3 mx-2 p-0 img-contain'><input class='position-absolute cross-btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='clear-liked' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+AddidL+"' src='"+AddMeL+"' class='img-thumbnail  img-fit-in'></div>"
                event.target.classList.add("green")
              }
        
        }
        else if ( num_likd == 3){
            ////console.log("a.3")
            alert('Maximum number of liked images reached')
        }

    }
    else if(event.target.id == 'imgBtndislike'){
        ////console.log("b")
        AddMeD = event.target.parentElement.parentElement.children[1].src; 
        AddidD = event.target.parentElement.parentElement.children[1].id;
        if (num_likd == 0 && num_dslikd == 0){
            //////console.log("b.1")
            document.getElementById("DislikesBox").innerHTML += "<div class='position-relative col-3 mx-2 p-0 img-contain'><input class='position-absolute cross-btn btn-light p-0 ' style='font-family: bootstrap-icons' type='button' id='clear-disliked' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+AddidD+"' src='"+AddMeD+"' class='img-thumbnail img-fit-in'></div>"
            event.target.classList.add("red")
          }
        if((num_dslikd > 0 && num_dslikd < 3) || (num_likd > 0 && num_likd <= 3 && num_dslikd < 3)){
            ////console.log("b.2")
            likd_idsD = []
            dislikd_idsD =[];
            for(let i = 0; i < num_likd; i++){  
                var img_id1 = document.getElementById("LikesBox").children[i].children[1].id; //id of liked elements
                likd_idsD.push(img_id1)
                
            }
            for(let i = 0; i < num_dslikd; i++){
            var img_id2 = document.getElementById("DislikesBox").children[i].children[1].id; //id of disliked elements
            dislikd_idsD.push(img_id2)
            console.log(likd_idsD)
            }
            if (likd_idsD.includes(AddidD)){
                ////console.log("b.21")
                alert("we get you have conflicting feeling about art but please don't like and dislike the same artpiece:(")
            }
            else if (dislikd_idsD.includes(AddidD)){
                console.log("b.22")
                //alert("we get that you don't like this artpiece, but disliking it twice seems a bit excessive :(")
                for(let i = 0; i < document.getElementById("DislikesBox").children.length; i++){
                  if(document.getElementById("DislikesBox").children[i].children[1].id == AddidD){
                    console.log("ciao")
                    console.log("ciao"+document.getElementById("DislikesBox").children[i].children[1].id)
                    event.target.classList.remove("red")
                    document.getElementById("DislikesBox").children[i].remove()
                  }
                } 
            }
            else{
                //////console.log("b.23")
                document.getElementById("DislikesBox").innerHTML += "<div class='position-relative col-3 p-0 mx-2 img-contain'><input class='position-absolute cross-btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='clear-disliked' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+AddidD+"' src='"+AddMeD+"' class='img-thumbnail img-fit-in'></div>"
                event.target.classList.add("red")
              }
        
        }
        else if ( num_dslikd == 3){
            ////console.log("b.3")
            alert('Maximum number of disliked images reached')
        }

    }
    
  
        
    //LIKE
}    



//CLEAR IMGS from fields
function clearImg(ev){
    //console.log("ciauxxx "+ev.target.parentNode.children[1].outerHTML)
    ////console.log("iddd "+ev.target.parentNode.outerHTML)
    ev.target.parentNode.children[1].classList.remove("img-fit-in")
    getid = ev.target.parentNode.children[1].id
    
    //inizio log removed images 
    console.log("hey 1")
    ev.target.parentNode.children[1].remove()
/* 
     if (document.getElementById(getid) != null && document.getElementById(getid).classList.contains("darken1")){
      console.log("beccato")
    document.getElementById(getid).classList.remove("darken1") 
    } */
    if (ev.target.parentNode.parentNode.id == "LikesBox" || ev.target.parentNode.parentNode.id == "DislikesBox"){
      //console.log("A")
      console.log("hey 2"+document.getElementById(getid).outerHTML)
      ev.target.parentNode.remove()
    
    

    for(let i = 1; i < 21; i++){
      console.log(document.getElementById("drag"+i).children[0])
      if( document.getElementById("drag"+i).children[1].id == getid){
        if(document.getElementById("drag"+i).children[1].parentNode.children[2].children[0].classList.contains("green")==true){
          console.log("boo2")
          document.getElementById("drag"+i).children[1].parentNode.children[2].children[0].classList.remove("green")
        }
        if(document.getElementById("drag"+i).children[1].parentNode.children[2].children[1].classList.contains("red")==true){
          document.getElementById("drag"+i).children[1].parentNode.children[2].children[1].classList.remove("red")
        }
      }
    }
      
    
    //console.log("ciauxxx1 "+ev.target.parentNode.outerHTML)
    
    ////console.log("iddd "+ev.target.parentNode.outerHTML)
    
    
    } else{
      //console.log("B")
      ev.target.classList.toggle("d-none")
      
      /* console.log(getid)
      for(let i = 1; i < 21; i++){
        console.log(document.getElementById("drag"+i).children[0])
        if( document.getElementById("drag"+i).children[1].id == getid){
          console.log("vai")
          document.getElementById("drag"+i).children[0].classList.add("lightgreencol")
        }
      } */
      

      for(let i = 1; i < 21; i++){
        console.log(document.getElementById("drag"+i).children[0])
        if( document.getElementById("drag"+i).children[1].id == getid){
          console.log("vai")
          document.getElementById("drag"+i).children[1].classList.remove("darken1")
        }
      }
      
      ////console.log('inside query:',ev.target.id)
      let imgId = ev.target.id
      if(ev.target.parentElement.classList.contains("bigdash")){
        ev.target.parentElement.classList.add("Dimdash")
      }
      

      switch (imgId){
        case 'clear-liked':
          var clearedlkd = parseInt(sessionStorage.getItem('clearedLikedImgs'))
          clearedlkd +=1
          sessionStorage.setItem('clearedLikedImgs', clearedlkd)
          ////console.log('liked removed',clearedlkd)
          break
        case 'clear-disliked':
          var cleareddslkd = parseInt(sessionStorage.getItem('clearedDislikedImgs'))
          cleareddslkd +=1
          sessionStorage.setItem('clearedDislikedImgs', cleareddslkd)
          
          
          ////console.log('disliked removed', cleareddslkd)
          break
      }
      
    
    }
    //fine log removed images 
    myImgsListener(); //log images inserted in query, poi le do in pasto ad apply per riassumrle in una unica value di session storage 
    //////console.log(ev.target.parentNode.parentNode)
}



function resetDash(){
    a = document.getElementsByClassName("getDataboxDash")
    for(let i = 0; i < a.length; i++){
      if(a[i].children.length > 1){
        console.log(a[i])
        console.log(a[i].classList)
        console.log(a[i].classList.contains("bigdash") == true)
        console.log("a " +a[i].children[1].outerHTML)
        a[i].children[1].remove()
        a[i].children[0].classList.add("d-none")
        if(a[i].classList.contains("bigdash") == true){
          a[i].classList.add("Dimdash")
        }
        
    }
  }
  myImgsListener();
}

function repeatTask(){
  resetDash()
  fill_task_dash()
}

function Apply_like_dislike(){ //start 

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

  // inizio parte log apply

  //riassumiamo le immagini cancellate da like e dislike in un unico item di storage Session
  let removedLiked = sessionStorage.getItem('clearedLikedImgs')
  let removedDisiked = sessionStorage.getItem('clearedDislikedImgs')
  ////console.log(n_queries, removedLiked, removedDisiked)
  // creaiamo una string con numero di query e dati da poi mettere in session storage
  var clearedforSession = +n_queries+': {removedLiked: '+removedLiked+', removedDisiked: '+removedDisiked+'}'
  ////console.log('clearedforSession', clearedforSession)

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
  ////console.log('queryImgsClrd', queryImgsClrd)

  // riporta i count delle immagini (liked e disliked) e rimossi a zero per il count della prossima query
  sessionStorage.setItem('clearedLikedImgs', 0);
  sessionStorage.setItem('clearedDislikedImgs', 0);

  n_queries+=1 //incrementa count query dopo aver fatto i log sullo stato attuale
  ////console.log("Query number: ", n_queries);
  
  ////console.log("Add query");
  sessionStorage.setItem('n_queries', n_queries);
  ////console.log('n_queries =', n_queries)

  //log ids nella query
  var imgs_p =  document.getElementById('LikesBox').querySelectorAll('img')

  var positives = []
  for(var i = 0, n = imgs_p.length; i < n; ++i){
    ////console.log('img =', imgs_p[i].id)
    positives.push(imgs_p[i].id)
  }
  ////console.log('array pos=', positives)

  var imgs_n =  document.getElementById('DislikesBox').querySelectorAll('img')
  var negatives = []
  for(var i = 0, n = imgs_n.length; i < n; ++i){
    ////console.log('img =', imgs_n[i].id)
    negatives.push(imgs_n[i].id)
  }
  ////console.log('array neg=', negatives)
  ////console.log('quries number',n_queries)
  var dict = {'pos':positives, 'neg':negatives}
  ////console.log('dict:',JSON.stringify(dict))
  sessionStorage.setItem('query'+n_queries, JSON.stringify(dict))
  ////console.log('print session storage:', sessionStorage)
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
            //////console.log(get_img_element.naturalWidth + 'x' + get_img_element.naturalHeight)
            //////console.log(get_img_element.width + 'x' + get_img_element.height)
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
  // inizio log immagine grande
  var count = parseInt(sessionStorage.getItem('displayedImgs'));
  count +=1
  sessionStorage.setItem('displayedImgs', count);
  // fine log immagine grande
    //////console.log(ev.target)

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
  document.getElementById("bd1").classList.add("noscroll")
  

  
  }})

}


function closeimg(){
    //////console.log(document.getElementById("displayimg").classList)
    document.getElementById("shadow").classList.remove("seeme");
    document.getElementById("bd1").classList.remove("noscroll")
}


  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    x = document.getElementById("introwarmup");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      
      var elementTop = reveals[1].getBoundingClientRect().top;
      
      
      
      
      elementVisible = 300;
      
      if (reveals[i].id == "goonbutton"){
        
        elementVisible = 5;
        
      }
      if (elementTop < windowHeight - elementVisible) {
        
        
        reveals[i].classList.add("active");
        x.style.display = "none";
        if((document.getElementById("task2").classList[5] == "zindex")&&(document.getElementById("dashboard").classList.contains("check") == false)){
          window.scrollTo(0, 0);
          } else if ((document.getElementById("task2").classList[5] == "zindex") && document.getElementById("dashboard").classList.contains("check")){
            //console.log("preso")
            let pos = sessionStorage.getItem("wherebuttons1");
            //console.log("retrieved "+pos)
            //console.log("position "+(pos-800))
            window.scrollTo(0, pos-650);
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
  ////console.log(gallery)
  
  const imgs = gallery.querySelectorAll('img')
  sessionStorage.setItem('myGallery_count', imgs.length)
  ////console.log('imgs',imgs.length)
  for(var i = 0; i < imgs.length; i++){
    myImg = imgs[i]
    myImgIds.push('{ '+myImg.name+': '+myImg.id+'}')
    ////console.log('i=', myImg.id)
  }
  ////console.log('array :', myImgIds)
  sessionStorage.setItem('myImgIds', myImgIds)
  ////console.log(sessionStorage.getItem('myImgIds'))
}

myImgsListener();
