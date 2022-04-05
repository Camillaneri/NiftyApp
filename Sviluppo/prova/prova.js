

/*const container = document.querySelector('.container');

const URL = 'https://dog.ceo/api/breeds/image/random'

// get the images

function loadImages(numImages = 10){
   let i=0;
    while(i < numImages){
        fetch('https://staging.gql.api.niftyvalue.com/v1/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
          {
              artworks(limit: 1){
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
        dict_path = JSON.stringify(r_json['data']['artworks'][0]['url']);
        newStr0 = dict_path.replace('"', '');
        newStr = newStr0.replace('"', '');
        console.log(typeof dict_path);
        const img =  document.createElement('img');
        img.src = newStr;
        container.appendChild(img);
        console.log(img);}
    
    )
    i++;
    }   
    }

loadImages();



// listen for scroll event and load more images if we reach the bottom of window
window.addEventListener('scroll',()=>{
    console.log("scrolled", window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages();
    }
})*/

const container = document.querySelector('.container');

const URL = 'https://dog.ceo/api/breeds/image/random'

// get the images

function loadImages(){
   
    
        fetch('https://staging.gql.api.niftyvalue.com/v1/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
          {
              artworks(limit: 20){
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
        console.log(typeof dict_path);
        const img =  document.createElement('img');
        img.src = newStr;
        img.id = "dragData"+i
        container.appendChild(img);
        i++;
        console.log(img);}}
    )  
    }

loadImages();


/*
// listen for scroll event and load more images if we reach the bottom of window
window.addEventListener('scroll',()=>{
    console.log("scrolled", window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages();
    }
})*/