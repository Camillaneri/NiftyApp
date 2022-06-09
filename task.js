



//GET SIMILAR IMAGES 
function fill_task_dash(){
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
    let i=1;
    for(let i = 0; i <= 20; i++){

    dict_path = JSON.stringify(r_json['data']['artwork_metrics'][i]['preview']);


    newStr0 = dict_path.replace('"', '');
    img_url = newStr0.replace('"', '');//get url


    dict_path1 = JSON.stringify(r_json['data']['artwork_metrics'][i]['artwork_id']);
    newStr01 = dict_path1.replace('"', '');
    img_id = newStr01.replace('"', '');//get id

    //console.log(img_id)
    //console.log(img_url)
   
    get_img = document.getElementsByClassName('img-to-like')[i]
    
    if (img_url.includes("https://") && img_url != "" && img_id !="" && img_url != null){// questo if filtra gli elementi che or ora ci danno problemi, andrà cambiata ma si può comunque usare per cambiare il formato delle gif e dei video per esempio
        get_img.src = img_url;
        get_img.id = img_id;
        }
    else{
        get_img.src = "images/wooops.jpg";
    }
    //for the reset button
    if (document.getElementById('LikesBox').children.length != 0 || document.getElementById('DislikesBox').children.length != 0){
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
    console.log( ev.target)
    console.log(data)
    ev.target.appendChild(document.getElementById(data));
    console.log(ev.target.children[1])
    ev.target.children[1].classList.toggle("img-to-like")
    ev.target.children[1].classList.toggle("clear-dash")
    console.log( ev.target)
    console.log(ev.target.children[1])
};

function dropcopy(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    var copyimg = document.createElement("img");
    var original = document.getElementById(data);
    copyimg.src = original.src;
    copyimg.className = original.className;
    ev.target.appendChild(copyimg);
    ev.target.innerHTML
    ev.target.classList.remove("border")
    
    var items = document.querySelectorAll('.ClearBtn');
    for (const item of items) {
        
        if (item.classList)
            item.classList.remove('d-none');
    }

    if (document.getElementById('dashboard').classList.contains('col-6')) {
        
        var x = document.getElementById('imagesGrid').innerHTML
        x += '<div class="my-4 position-relative getDataboxDash border rounded border-light p-0 col-5 mx-3 " id="getDataDash" ondrop="dropcopy(event)" ondragover="allowDrop(event)"> <input class="position-absolute btn btn-light p-0 d-none ClearBtn" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="clearImg(event)" value="&#xF62A;"> </div> ';
        document.getElementById('imagesGrid').innerHTML = x
    } else {
        var x = document.getElementById('imagesGrid').innerHTML
        x += '<div class="my-4 position-relative getDataboxDash border rounded border-light p-0" id="getDataDash" ondrop="dropcopy(event)" ondragover="allowDrop(event)" ><input class="position-absolute btn btn-light p-0 d-none ClearBtn" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="clearImg(event)" value="&#xF62A;"> </div> ';
        document.getElementById('imagesGrid').innerHTML = x
    }
    




};

// DASHBOARD EXPAND-CONTRACT 

function ExpandDash() {
    console.log("got");
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
console.log("")

function AddLiked_Disliked(event) {
    num_likd = document.getElementById('LikesBox').children.length
    num_dslikd = document.getElementById('DislikesBox').children.length
    console.log("liked "+num_likd)
    console.log("disliked "+num_dslikd)

    if(event.target.id == 'imgBtnlike'){
        console.log("a")
        AddMeL = event.target.parentElement.nextElementSibling.src; 
        AddidL = event.target.parentElement.nextElementSibling.id;
        if (num_likd == 0 && num_dslikd == 0){
            console.log("a.1")
            document.getElementById("LikesBox").innerHTML += "<div class='position-relative col-3 p-0'><input class='position-absolute btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='imgBtn' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+AddidL+"' src='"+AddMeL+"' class='img-thumbnail'></div>"
            }
        if((num_likd > 0 && num_likd < 3) || (num_likd < 0 && num_dslikd > 0 && num_dslikd <= 3 )){
            console.log("a.2")
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
                console.log("a.21")
                alert('we get that you like this artpiece, maybe add it to dashboard instead of liking it twice ;)')
            }
            else if (dislikd_ids.includes(AddidL)){
                console.log("a.22")
                alert("we get you have conflicting feeling about art but please don't like and dislike the same artpiece:(")
            }
            else{
                console.log("a.23")
                document.getElementById("LikesBox").innerHTML += "<div class='position-relative col-3 p-0'><input class='position-absolute btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='imgBtn' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+AddidL+"' src='"+AddMeL+"' class='img-thumbnail'></div>"
            }
        
        }
        else if ( num_likd == 3){
            console.log("a.3")
            alert('Maximum number of liked images reached')
        }

    }
    else if(event.target.id == 'imgBtndislike'){
        console.log("b")
        AddMeD = event.target.parentElement.nextElementSibling.src; 
        AddidD = event.target.parentElement.nextElementSibling.id;
        if (num_likd == 0 && num_dslikd == 0){
            console.log("b.1")
            document.getElementById("DislikesBox").innerHTML += "<div class='position-relative col-3 p-0'><input class='position-absolute btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='imgBtn' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+AddidD+"' src='"+AddMeD+"' class='img-thumbnail'></div>"
            }
        if((num_dslikd > 0 && num_dslikd < 3) || (num_likd > 0 && num_likd <= 3 && num_dslikd < 3)){
            console.log("b.2")
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
                console.log("b.21")
                alert("we get you have conflicting feeling about art but please don't like and dislike the same artpiece:(")
            }
            else if (dislikd_idsD.includes(AddidD)){
                console.log("b.22")
                alert("we get that you don't like this artpiece, but disliking it twice seems a bit excessive :(")
            }
            else{
                console.log("b.23")
                document.getElementById("DislikesBox").innerHTML += "<div class='position-relative col-3 p-0'><input class='position-absolute btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='imgBtn' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+AddidD+"' src='"+AddMeD+"' class='img-thumbnail'></div>"
            }
        
        }
        else if ( num_dslikd == 3){
            console.log("b.3")
            alert('Maximum number of disliked images reached')
        }

    }
    
  
        
    //LIKE
}    



//CLEAR IMGS from fields
function clearImg(ev){
    console.log(ev.target.parentNode)
    ev.target.parentNode.remove();
    // console.log(ev.target.parentNode.parentNode)
}


function resetDash(){
    a = document.getElementsByClassName("clear-dash")
    console.log("a "+a)
    for(let i = 0; i < a.length; i++){
        console.log("a "+a.children[i].children[0])
        a.children[i].children[0].remove()
    }
}


function Apply_like_dislike(){ //start 
    
    
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
} 

function display_img(ev){
    console.log(ev.target)
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
    console.log(document.getElementById("displayimg").classList)
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
  
      } else {
        
       
        reveals[i].classList.remove("active");
        x.style.display = "block";
      }
    }
  }
  
  window.addEventListener("scroll", reveal);





        /*fetch(request)
    .then(data => data.json())
    console.log(data)
    .then(response=>response.json())
    console.log(response)
    .then((result) =>{  
        const myJSON = JSON.stringify(result);
        r_json = JSON.parse(myJSON);})
        console.log(myJSON)
    
        let i=0;
        while(i < 10){
        dict_path = JSON.stringify(r_json['data']['artworks'][i]['url']);
        newStr0 = dict_path.replace('"', '');
        newStr = newStr0.replace('"', '');
    
    
    
    var url = request
    
    var result =[]
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    
    xhr.onreadystatechange = function() {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          response1 = xhr.responseText;
          response_list = response1.split(" ");
          for (let i = 0; i < response_list.length; i++)
          result.push(response_list[i])
          console.log(response1);
          console.log(response_list);
          console.log(result);
          }
       
       
    };
    xhr.send();
    
    
    console.log(result)
    result = xhr.responseText;
    console.log(result);
    impure_array = result.split(" ");
    console.log(impure_array)
    .then(response=>response.json())
    .then((result) =>{  
        //console.log(result);
        const myJSON = JSON.stringify(result);
        //console.log(myJSON);
        r_json = JSON.parse(myJSON);
        //console.log(r_json);
        let i=0;
        var lista = [];
        //console.log(typeof lista);
        for(i = 0; i < 20; i++) 
        {
        new_ids = JSON.stringify(r_json['data'][i]);//is path correct?is it a string?
        container = document.getElementsByClassName('position-relative col-3 p-0');
        img = container.querySelectorAll('.img-thumbnail');//get the div where imgs are(should we create them?)
        img.id = new_ids;//put id and url in img
        }
    
    })
    */