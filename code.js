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



