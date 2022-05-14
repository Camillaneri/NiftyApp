



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
          url
          preview
          artwork_id
          media_type
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
    
    get_img = document.getElementsByClassName('w-10')[i]
    
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
};copyimg

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
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
    document.getElementById("dashboard").classList.add("col-6");
    console.log(document.getElementById("dashboard").classList);
    document.getElementById("dashboard").classList.remove("col-3");
    if (document.getElementById("dashboard").classList.contains("col-6")){
    document.getElementById("Expand").innerHTML = '<button class="btn btn-dark expand" type="button" id="Expand" onclick="ContractDash()"> <i class="bi bi-arrows-angle-expand"></i></button>';
    console.log(document.getElementById("Expand").innerHTML)
    }
    /*var boxes = document.querySelectorAll('');
    console.log(boxes)
    for (const box of boxes) {
        box.classList.add('col-4');
        box.classList.remove('col-3');
    }
    document.getElementById("DashHeader").classList.add("w-50");
    document.getElementById("dashFooter").classList.add("w-50");
    var boxes = document.querySelectorAll('.getDataboxDash');
    console.log(boxes)
    for (const box of boxes) {
        box.classList.add('col-5');
        box.classList.add('mx-3');
    }
    document.getElementById("imagesGrid").classList.add("row")
    document.getElementById("imagesGrid").style.margin = "10% 0"
    document.getElementById("Contract").classList.remove("d-none")
    document.getElementById("Expand").classList.add("d-none")*/

};

function ContractDash() {
    console.log("oki");
    console.log(document.getElementById("dashboard").classList);
    document.getElementById("dashboard").classList.add("col-3");
    console.log(document.getElementById("dashboard").classList);
    document.getElementById("dashboard").classList.remove("col-6");
    console.log(document.getElementById("dashboard").classList);
    
    /*var boxes = document.querySelectorAll('');
    console.log(boxes)
    for (const box of boxes) {
        box.classList.add('col-3');
        box.classList.remove('col-4');
    }
    document.getElementById("DashHeader").classList.remove("w-50");
    document.getElementById("dashFooter").classList.remove("w-50");
    var boxes = document.querySelectorAll('.getDataboxDash');
    for (const box of boxes) {
        box.classList.remove('col-5');
        box.classList.remove('mx-3');
    }
    document.getElementById("imagesGrid").classList.remove("row")
    document.getElementById("imagesGrid").style.margin =" 30% 0"
    document.getElementById("Contract").classList.add("d-none")
    document.getElementById("Expand").classList.remove("d-none")*/

};

//ADD IMAGES TO QUERY
/*function AddLiked(ev) {
    num_likd = document.getElementById('LikesBox').children.length
    
    if (num_likd < 3 ){

        var AddMe = ev.target.parentElement.nextElementSibling.src;
        var Addid = ev.target.parentElement.nextElementSibling.id;
        //console.log(AddMe);
        
        ids = []
        console.log()
        if (num_likd > 0){
            console.log(num_likd)
        for(let i = 0; i < num_likd; i++){
            var img_id = document.getElementById("LikesBox").children[i].children[1].id; //id of liked elements
            console.log(num_likd)
            console.log(ids)
        if(ids.includes("Addid")){
            alert('we get that you like this artpiece, maybe add it to dashboard instead of liking it twice ;)')
        }else{
            ids.push(img_id)
            console.log(ids)
        }
    }
        }

    
        document.getElementById("LikesBox").innerHTML += "<div class='position-relative col-3 p-0'><input class='position-absolute btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='imgBtn' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+Addid+"' src='"+AddMe+"' class='img-thumbnail'></div>"

    } else {
       alert('Maximum number of liked images reached, please delete at least one image from the box to add a new one')
    }

};

function AddDisliked(ev) {
    if (document.getElementById('DislikesBox').children.length < 3) {
        var AddMe = ev.target.parentElement.nextElementSibling.src;
        var Addid = ev.target.parentElement.nextElementSibling.id;

        //console.log(AddMe);

        document.getElementById
        document.getElementById("DislikesBox").innerHTML += "<div class='position-relative col-3 p-0'><input class='position-absolute btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='imgBtn' onclick='clearImg(event)' value='&#xF62A;'><img id='"+Addid+"' src='"+AddMe+"' class='img-thumbnail'></div>"

    } else {
       alert('Maximum number of liked images reached, please delete at least one image from the box to add a new one')
    }

};*/
//ADD IMAGES TO QUERY

function AddLiked_Disliked(ev) {

    if(ev.target.id = 'imgBtnlike'){

    num_likd = document.getElementById('LikesBox').children.length
    
    if (num_likd < 3 ){

        var AddMe = ev.target.parentElement.nextElementSibling.src;
        
        var Addid = ev.target.parentElement.nextElementSibling.id;
        //console.log(AddMe);
    
        document.getElementById("LikesBox").innerHTML += "<div class='position-relative col-3 p-0'><input class='position-absolute btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='imgBtn' onclick='clearImg(event)' value='&#xF62A;'><img id ='"+Addid+"' src='"+AddMe+"' class='img-thumbnail'></div>"

    } else {
       alert('Maximum number of liked images reached, please delete at least one image from the box to add a new one')
    }
}else if ((ev.target.id = 'imgBtndislike')){

    if (document.getElementById('DislikesBox').children.length < 3) {
        var AddMe = ev.target.parentElement.nextElementSibling.src;
        
        var Addid = ev.target.parentElement.nextElementSibling.id;

        //console.log(AddMe);

        
        document.getElementById("DislikesBox").innerHTML += "<div class='position-relative col-3 p-0'><input class='position-absolute btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='imgBtn' onclick='clearImg(event)' value='&#xF62A;'><img id='"+Addid+"' src='"+AddMe+"' class='img-thumbnail'></div>"
        console.log( document.getElementById("DislikesBox").innerHTML)
    } else {
       alert('Maximum number of liked images reached, please delete at least one image from the box to add a new one')
    }
}

};



//CLEAR IMGS from fields
function clearImg(ev){
    console.log(ev.target.parentNode)
    ev.target.parentNode.remove();
    // console.log(ev.target.parentNode.parentNode)
}







function Apply_like_dislike(){ //start 
    
    for(let y = 0; y < 21; y++){
        get1_img_element = document.getElementsByClassName('w-10')[y];
        
        //get1_img_element.src = "images/wooops1.jpg";
    }

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
          url
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
        art_high_res = dict['url']
        
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
}  
    
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