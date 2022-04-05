function test(){

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
      .then((res) => res.json())
      .then((result) => console.log(result));
}


const container1 = document.querySelector('.row');
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
            artworks(limit: 20){
            url
          }
        }
          `
      }),
    })
    .then(response => response.json())
    .then(data=>{
    const img =  document.createElement('img');
    img.src = `${data.message}`
    container1.appendChild(img)
    })
    i++;
  }   
 }

loadImages();
