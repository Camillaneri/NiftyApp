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
              artworks(limit: 6){
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
        container.appendChild(img);
        i++;
        console.log(img);}}
    )  
    }

loadImages();
