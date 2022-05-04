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
        console.log("col-6")
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
    document.getElementById("dashboard").classList.remove("col-3");
    var boxes = document.querySelectorAll('');
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
    document.getElementById("Expand").classList.add("d-none")

};

function ContractDash() {
    console.log("got");
    document.getElementById("dashboard").classList.remove("col-6");
    document.getElementById("dashboard").classList.add("col-3");
    var boxes = document.querySelectorAll('');
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
    document.getElementById("Expand").classList.remove("d-none")

};

//ADD IMAGES TO QUERY
function AddLiked(ev) {
    if (document.getElementById('LikesBox').children.length < 3 ){

        var AddMe = ev.target.parentElement.nextElementSibling.src;
        console.log(AddMe);

        document.getElementById
        document.getElementById("LikesBox").innerHTML += "<div class='position-relative col-3 p-0'><input class='position-absolute btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='imgBtn' onclick='clearImg(event)' value='&#xF62A;'><img src='"+AddMe+"' class='img-thumbnail'></div>"

    } else {
       alert('Maximum number of liked images reached, please delete at least one image from the box to add a new one')
    }

};

function AddDisliked(ev) {
    if (document.getElementById('DislikesBox').children.length < 3) {
        var AddMe = ev.target.parentElement.nextElementSibling.src;

        console.log(AddMe);

        document.getElementById
        document.getElementById("DislikesBox").innerHTML += "<div class='position-relative col-3 p-0'><input class='position-absolute btn btn-light p-0' style='font-family: bootstrap-icons' type='button' id='imgBtn' onclick='clearImg(event)' value='&#xF62A;'><img src='"+AddMe+"' class='img-thumbnail'></div>"

    } else {
       alert('Maximum number of liked images reached, please delete at least one image from the box to add a new one')
    }

};

//CLEAR IMGS from fields
function clearImg(ev){
    console.log(ev.target.parentNode)
    ev.target.parentNode.remove();
    // console.log(ev.target.parentNode.parentNode)
}






function Apply_like_dislike(event){ //start 
    likebox = document.getElementsByClassName("LikesBox"); //.children[1]; //.id;
    console.log(likebox);
    //liked_ids = likebox.childred;
    
    var num_liked = event.target.parentElement.previousElementSibling.children[0].children[1].childElementCount; 
    ids = []
    
    for(let i = 0; i < num_liked; i++){
    var img_id = event.target.parentElement.previousElementSibling.children[0].children[1].children[i].children[1].id;
    ids.push(img_id)
    }
    
    var num_dsliked = event.target.parentElement.previousElementSibling.children[1].children[1].childElementCount;
    console.log(num_dsliked)
    
    d_ids = []
    
    for(let i = 0; i < num_liked; i++){
        var imgds_id = event.target.parentElement.previousElementSibling.children[1].children[1].children[i].children[1].id;
        d_ids.push(imgds_id)
    
        }
    
    liked_ids = ids.join();
    console.log(liked_ids);
    
    disliked_ids = d_ids.join();
    console.log(disliked_ids);
    
    request = "https://artdiscovery.api.niftyvalue.com/recs/api/v1.0/recs?artworks_pos="+liked_ids+"&artworks_neg="+disliked_ids+""; //if its more than one they have to be numbers separated by comma without spaces
    console.log(request);
    
    
    fetch(request)
    .then(data => data.json())
    console.log(data)
    .then(response=>response.json())
    console.log(response)
    .then((result) =>{  
        const myJSON = JSON.stringify(result);
        r_json = JSON.parse(myJSON);})
        console.log(myJSON)
        /*
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
    
    })*/
    
    
    }
    