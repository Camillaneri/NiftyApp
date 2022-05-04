
//GET PRE SURVEY FUNCTION
function getPresur() {
    document.getElementById("changeMe").innerHTML = '<div class="container bg-light p-3 border rounded-3 overflow-scroll" id="centralBox"> <h1 class="display-3 p-3 ">Presurvey</h1><form class="container overflow-scroll"> <div class="p-3"> <label for="PresurveyInput1" class="form-label">Expertise level on art</label> <input type="range" class="form-range" min="0" max="5" step="1" id="artExp"></div> <div class="p-3"> <label for="PresurveyInput2" class="form-label">Expertise level on NFTs </label> <input type="range" class="form-range" min="0" max="5" step="1" id="nftExp"> </div> <div class="p-3"><label for="PresurveyInput3" class="form-label">Education in art </label> <select class="form-select form-select-sm-3 mt-3" aria-label=".form-select-sm example"> <option selected >Open this select menu</option>  <option value="1">Formal training in applied arts</option> <option value="2">Bachelor of Fine Arts</option> <option value="3">Master of Fine Arts	</option> <option value="4">Master of Applied Arts	</option>  <option value="5">Some art education but no degree</option> </select> </div> <div class="p-3"> <label for="PresurveyInput4" class="form-label">Education in finance</label><select class="form-select form-select-sm-3 mt-3" aria-label=".form-select-sm example"> <option selected >Open this select menu</option> <option value="1">Some education on finance but no degree</option>  <option value="2">Bachelor of Finance</option> <option value="3">Master of Finance</option><option value="4">Master of Finance</option>  </select>  </div>  <div class="p-3"><label for="PresurveyInput5" class="form-label">Average time spent on multimedia applications  </label> <div class="form-check"> <input class="form-check-input" type="radio" name="TimeArt" id="RadioTimeArt1" checked> <label class="form-check-label" for="RadioTimeArt1"> 0-10 hours </label> </div> <div class="form-check"> <input class="form-check-input" type="radio" name="TimeArt" id="RadioTimeArt2" ><label class="form-check-label" for="RadioTimeArt2"> 10-20 hours</label></div>    <div class="form-check"><input class="form-check-input" type="radio" name="TimeArt" id="RadioTimeArt3" ><label class="form-check-label" for="RadioTimeArt3">20-30 hours </label></div> <div class="form-check"> <input class="form-check-input" type="radio" name="TimeArt" id="RadioTimeArt4" ><label class="form-check-label" for="RadioTimeArt4">+30 hours </label> </div>  </div> <div class="p-3"> <label for="PresurveyInput5" class="form-label">It is hard for me to take a decision</label><div class="form-check"> <input class="form-check-input" type="radio" name="Decision" id="Decision1"checked><label class="form-check-label" for="Decision1">Strongly Disagree</label> </div><div class="form-check"> <input class="form-check-input" type="radio" name="Decision" id="Decision2" > <label class="form-check-label" for="Decision2">Disagree</label> </div> <div class="form-check"><input class="form-check-input" type="radio" name="Decision" id="Decision3" > <label class="form-check-label" for="Decision3"> I do not know </label> </div> <div class="form-check"> <input class="form-check-input" type="radio" name="Decision" id="Decision4" > <label class="form-check-label" for="Decision4">Agree  </label> </div> <div class="form-check"><input class="form-check-input" type="radio" name="Decision" id="Decision5" > <label class="form-check-label" for="Decision5">Strongly Agree </label></div> </div> <div class="p-3"> <label for="PresurveyInput5" class="form-label">I get bored easily</label>   <div class="form-check"><input class="form-check-input" type="radio" name="Bore" id="Bore1"checked> <label class="form-check-label" for="Bore1">   Strongly Disagree  </label> </div> <div class="form-check"><input class="form-check-input" type="radio" name="Bore" id="Bore2" ><label class="form-check-label" for="Bore2"> Disagree </label> </div> <div class="form-check"> <input class="form-check-input" type="radio" name="Bore" id="Bore3" > <label class="form-check-label" for="Bore3">I do not know </label> </div> <div class="form-check"><input class="form-check-input" type="radio" name="Bore" id="Bore4" ><label class="form-check-label" for="Bore4">Agree</label></div><div class="form-check"> <input class="form-check-input" type="radio" name="Bore" id="Bore5" > <label class="form-check-label" for="Bore5"> Strongly Agree </label></div> </div> <div class="p-3"><label for="PresurveyInput5" class="form-label">I am a curious person</label><div class="form-check"> <input class="form-check-input" type="radio" name="Curios" id="Curios1"checked><label class="form-check-label" for="Curios1">Strongly Disagree </label></div> <div class="form-check"><input class="form-check-input" type="radio" name="Curios" id="Curios2" ><label class="form-check-label" for="Curios2">Disagree </label></div> <div class="form-check"><input class="form-check-input" type="radio" name="Curios" id="Curios3" > <label class="form-check-label" for="Curios3">I do not know  </label> </div> <div class="form-check"> <input class="form-check-input" type="radio" name="Curios" id="Curios4" > <label class="form-check-label" for="Curios4"> Agree </label></div><div class="form-check"> <input class="form-check-input" type="radio" name="Curios" id="Curios5" > <label class="form-check-label" for="Curios5"> Strongly Agree </label></div> </div> </form><div class="d-grid gap-2 d-md-flex justify-content-md-end">  <button class="btn btn-success px-4 me-md-2" type="button" onclick="getWarmup()">Next</button> </div></div>';
};

//GET HOME FUNCTION
function getHome() {
    document.getElementById("changeMe").innerHTML = '<div class="container bg-light p-3 border rounded-3 overflow-scroll" id="centralBox"> <div class="text-center p-3"><h1 class="display-3 p-3 ">Welcome on NiftyEValue</h1><p class="lead p-3">A brief explanation of what is NiftyEValue, why we are doing this study and what kind of task the user has to complete.</p> <p class=" p-3">[Description of how we deal with data] </p> </div><div class="d-grid gap-2 d-md-flex justify-content-md-end"> <button class="btn btn-success px-4 me-md-2" type="button" onclick="getPresur()">Next</button> </div></div>';

};


//GET WARMUP FUNCTION
function getWarmup() {
    document.getElementById("changeMe").outerHTML = '<div class="container mainBox center" id="changeMe">    <div class="row">        <div class="col-4 g-3 ">            <div class="card border bg-light">                <img id="sample" src="https://ipfs.pixura.io/ipfs/QmPR8zrhpzvJuswEaDrKCuLKiHDd9ZUwAb1TwdCc2vHoyn/IMG_5676.JPG" class="img" alt="...">            </div>        </div>        <div class="col g-3">            <div class="mainBoxcontainer p-3">                <div class="description">                    <h4>Rank items by similarity</h4>                    <p class="lead">Given the reference image drag and drop in order of similarity (from 1 to 5)the images below</p>                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">                        <button class="btn btn-success px-4 me-md-2" type="button" onclick="getTask()">Next</button>                    </div>                </div>            </div>        </div>    </div>    <div class="row dropboxes p-3 my-3">        <div class="g-3 getDatabox">            <header class="getDataheader text-center"><h5>Firts place </h5></header>            <div id="getData" ondrop="dropcopy(ev)" ondragover="allowDrop(ev)" class="card text-center" >            </div>        </div>        <div class="g-3 getDatabox">            <header class="getDataheader text-center"><h5>Second place</h5></header>            <div id="getData" ondrop="dropcopy(ev)" ondragover="allowDrop(ev)" class="card text-center" >            </div>        </div>        <div class="g-3 getDatabox">            <header class="getDataheader text-center"><h5>Third place</h5></header>            <div id="getData" ondrop="dropcopy(ev)" ondragover="allowDrop(ev)" class="card text-center" >            </div>        </div>        <div class="g-3 getDatabox">            <header class="getDataheader text-center"><h5>Fourth place</h5></header>            <div id="getData" ondrop="dropcopy(ev)" ondragover="allowDrop(ev)" class="card text-center" >            </div>        </div>        <div class="g-3 getDatabox">            <header class="getDataheader text-center"><h5>Fifth place</h5></header>            <div id="getData" ondrop="dropcopy(ev)" ondragover="allowDrop(ev)" class="card text-center" >            </div>        </div>    </div>    <div class="row" id="coso">          </div>';
    
    // GET FIRST WARM UP IMAGE
    
    
    
    function loadoneImages(random_n){  //random-n mi permette di cambiare l'elemento in modo recursiovo se non mi piace la url
        fetch('https://staging.gql.api.niftyvalue.com/v1/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
          {
              artworks(limit: 10){
              url
            }
          }
            `
        }),
      })
    .then(response=>response.json())
    .then((result) =>{  
        console.log(result);
        const myJSON = JSON.stringify(result);
        console.log(myJSON);
        r_json = JSON.parse(myJSON);
        console.log(r_json);
        let i=0;
        var lista = [];
        console.log(typeof lista);
        for(i = 0; i < 10; i++) //loop che crea la lista
        {
        dict_path = JSON.stringify(r_json['data']['artworks'][i]['url']);//estraggo le url dal json
        console.log(dict_path);
        newStr0 = dict_path.replace('"', '');
        newStr = newStr0.replace('"', '');//tolgo le virgolette()
        console.log(newStr);
        if(newStr0 != ""){ // evito gli elementi vuoti
            lista[i]= newStr;
            }
        }
        console.log(lista);
        
        lista_pop = lista[random_n];//random-n è un numero random che inizializzo con la call della funzione

        console.log(random_n);
        if (lista_pop.includes("https://") && !lista_pop.includes(".mp4") && !lista_pop.includes(".gif")){// questo if filtra gli elementi che or ora ci danno problemi, andrà cambiata ma si può comunque usare per cambiare il formato delle gif e dei video per esempio
        document.getElementById("sample").src=lista_pop;
        }
        else{
            random-n + 1;//se la url non mi piace cambio il numero
        }
       }
        ) 
    }

    loadoneImages( Math.floor(Math.random() * 10));//questo è random_n



    //GET SIMILAR IMAGES 
    
    function loadImages(){
        fetch('https://staging.gql.api.niftyvalue.com/v1/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
          {
              artworks(limit: 5){
              url
            }
          }
            `
        }),
      })
    .then(response=>response.json())
    .then((result) =>{  
        const myJSON = JSON.stringify(result);
        r_json = JSON.parse(myJSON);
        let i=0;
        while(i < 10){
        dict_path = JSON.stringify(r_json['data']['artworks'][i]['url']);
        newStr0 = dict_path.replace('"', '');
        newStr = newStr0.replace('"', '');
        //console.log(typeof dict_path);
        const img =  document.createElement('img');
        img.src = newStr;
        //console.log(newStr)
        //img class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(ev)"
        img.id = "dragData1"+i
        img.className ="img-thumbnail"
        img.draggable = "true"
        img.ondragstart = "drag(ev)"
       //console.log(img)
        //<div class="col g-3"> 
        const div =  document.createElement('div');
        div.className ="g-3"
        div.classList.add("col")
        //console.log(div);
        div.appendChild(img);
        container = document.getElementById('coso');
        //console.log(container);
        container.appendChild(div);
        //console.log(container)
        i++;
        //console.log(img)
        ;}}
    )  
    }
    
    loadImages();
    
};
             

//GET TASK FUNCTION
function getTask() {
    document.body.classList.remove("min-vh-100")
    document.body.classList.add("vh-100")
    document.body.classList.add("overflow-hidden")
    document.getElementById("MainFooter").classList.remove("fixed-bottom");
    document.getElementById("MainFooter").classList.add("position-bottom");
    document.getElementById("MainNav").classList.remove("fixed-top");
    document.getElementById("MainNav").classList.add("position-top");
    document.getElementById("changeMe").classList.add("row");
    document.getElementById("changeMe").classList.add("wrapper");
    document.getElementById("changeMe").classList.add("p-0");
    document.getElementById("changeMe").classList.add("overflow-hidden");
    document.getElementById("changeMe").classList.remove("container");
    document.getElementById("changeMe").classList.remove("mainBox");
    document.getElementById("changeMe").classList.remove("center");
    document.getElementById("changeMe").innerHTML = '<div class="col-3 bg-dark text-light h-100" id="dashboard"> <div class="position-absolute bg-dark p-3 container-fluid" id="DashHeader"><span> Dashboard</span><button class="btn btn-dark expand" type="button"id="Expand" onclick="ExpandDash()"> <i class="bi bi-arrows-angle-expand"></i></button><button class="btn btn-dark expand d-none" type="button" id="Contract" onclick="ContractDash()"><i class="bi bi-arrows-angle-contract"></i> </button> </div><div class="px-3 position-relative" id="imagesGrid"> <div class="my-4 position-relative getDataboxDash border rounded border-light p-0" id="getDataDash" ondrop="dropcopy(event)" ondragover="allowDrop(event)"> <input class="position-absolute btn btn-light p-0 d-none ClearBtn" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="clearImg(event)" value="&#xF62A;"></div></div><div class="container-fluid d-flex position-absolute px-3 bg-dark" id="dashFooter" > <button class="mx-1 col btn btn-success w-50" type="button" onclick="getHome()">Next</button><button class="mx-1col btn btn-success w-50" type="button" onclick="resetDash()">Reset</button> </div></div><div class="col p-4" id="galleryBack"><div class="p-4 mb-2" id="TaskBox"><h4>Rank items by similarity</h4><p class="lead">Given the reference image drag and drop in order of similarity (from 1 to 5)the images below</p></div> <div class="mb-2 " id="QueryForm">   <div class="input-group">   <div class="px-2 col border-end" > <span class="row " ><i class="bi bi-hand-thumbs-up py-2">  Likes</i></span> <div class="row mx-1" id="LikesBox"> </div> </div> <div class="px-2 col"> <span class="row horizontal-scroll"><i class="bi bi-hand-thumbs-down py-2">  Dislikes</i> </span><div class="row mx-1" id="DislikesBox"></div> </div> </div> <div class="row mx-1 py-2"> <button class="mx-1 col btn btn-success w-100" type="button" onclick="sendQuery()">Apply</button>   <button class="mx-1 col btn btn-success w-100" type="button" onclick="resetQuery()">Reset</button> </div></div> <div class="row mx-1" id="Gallery"> <div class="position-relative col-3 p-0" id="item1"> <div class="col-2 position-absolute"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"> </div> <img id="dragData3" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"></div> <div class="position-relative col-3 p-0 "  id="item2"> <div class="col-2 position-absolute"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"> </div> <img id="dragData2" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"> </div>  <div class="position-relative col-3 p-0 GalleryItem"  id="item3"> <div class="col-2 m-1 position-absolute">  <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;">   <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"> </div>  <img id="dragData1" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"> </div> <div class="position-relative col-3 p-0 GalleryItem" id="item4"> <div class="col-2 m-1 position-absolute"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"> </div> <img id="dragData4" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"> </div> <div class="position-relative col-3 p-0 GalleryItem" id="item5"> <div class="col-2 m-1 position-absolute"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"> </div> <img id="dragData5" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"> </div> <div class="position-relative col-3 p-0 GalleryItem" id="item6"> <div class="col-2 m-1 position-absolute"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"> </div> <img id="dragData6" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"> </div> <div class="position-relative col-3 p-0 GalleryItem"  id="item7"> <div class="col-2 m-1 position-absolute"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;">  <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"></div> <img id="dragData7" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"> </div> <div class="position-relative col-3 p-0 GalleryItem" id="item8">  <div class="col-2 m-1 position-absolute">  <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;">   </div> <img id="dragData8" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"></div>  <div class="position-relative col-3 p-0 GalleryItem" id="item9"> <div class="col-2 m-1 position-absolute"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"> </div> <img id="dragData9" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"></div>  <div class="position-relative col-3 p-0 GalleryItem" id="item10"> <div class="col-2 m-1 position-absolute"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"> </div>  <img id="dragData10" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)">  </div>   <div class="position-relative col-3 p-0 GalleryItem" id="item11"> <div class="col-2 m-1 position-absolute"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"></div><img id="dragData11" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"> </div>       <div class="position-relative col-3 p-0 GalleryItem" id="item12"><div class="col-2 m-1 position-absolute"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"><input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"></div> <img id="dragData12" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"></div>  <div class="position-relative col-3 p-0 GalleryItem" id="item13"> <div class="col-2 m-1 position-absolute"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"><input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"> </div> <img id="dragData13" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"> </div> <div class="position-relative col-3 p-0 GalleryItem" id="item14"><div class="col-2 m-1 position-absolute"><input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"><input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"></div> <img id="dragData14" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"> </div> <div class="position-relative col-3 p-0 GalleryItem" id="item15"> <div class="col-2 m-1 position-absolute">   <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;">   <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"> </div> <img id="dragData15" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"> </div> <div class="position-relative col-3 p-0 GalleryItem" id="item16"><div class="col-2 m-1 position-absolute"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"><input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"> </div> <img id="dragData16" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"></div>   <div class="position-relative col-3 p-0 GalleryItem" id="item17"> <div class="col-2 m-1 position-absolute"><input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"><input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"> </div> <img id="dragData17" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"> </div> <div class="position-relative col-3 p-0 GalleryItem" id="item18"><div class="col-2 m-1 position-absolute"> <input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"><input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"> </div><img id="dragData18" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"></div> <div class="position-relative col-3 p-0 GalleryItem" id="item19"> <div class="col-2 m-1 position-absolute"><input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"><input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"></div><img id="dragData19" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"></div> <div class="position-relative col-3 p-0 GalleryItem" id="item20"><div class="col-2 m-1 position-absolute"><input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddLiked(event)" value="&#xF407;"><input class="btn btn-light p-0" style="font-family: bootstrap-icons" type="button" id="imgBtn" onclick="AddDisliked(event)" value="&#xF405;"> </div> <img id="dragData20" src="https://ipfs.pixura.io/ipfs/QmW3XevHttaTBQ9CwVYtTE8e92kpmCJW4FysGncSfPDBee/screaminSkull-final-opt.gif" class="img-thumbnail" alt="..." draggable = “true” ondragstart="drag(event)"> </div>        </div> </div>  </div>'

}


//GET POST SURVEY
function getSurv(){
    document.getElementById("changeMe").outerHTML = '<div class="col wrapper vcenter-item" id="changeMe"><div class="container bg-light p-3 border rounded-3 overflow-scroll" id="centralBox"> <h1 class="display-3 p-3 ">Presurvey</h1><form class="container overflow-scroll"></form><button class="btn btn-success px-4 me-md-2" type="button" onclick="getPresur()">Next</button></div></div> ' 
    
}

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







