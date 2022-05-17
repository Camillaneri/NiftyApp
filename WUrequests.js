function loadWarmUp(){
  function getRef() {
    console.log('START LOADING')
    IDnum = Math.floor(Math.random() * 50000) + 1

    Refquery =  `
        {
          {
            artwork_metrics(where: {media_type: {_in: ["gif", "png", "jpg", "mjpeg"]}, artwork_id: {_eq: `+IDnum+` }}) {
              preview
              artwork_id
            }
          }
     
      ` 
  
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
      console.log(result)
      id_dict = result['data']['artworks_by_pk']
      media = id_dict['media_type']
      id = id_dict['id']
      console.log('ID =',media)
      $('#reference').attr('src',  id_dict['url'])
      query = "https://artdiscovery.api.niftyvalue.com/recs/api/v1.0/recs?artworks_pos="+IDnum

      request = "https://artdiscovery.api.niftyvalue.com/recs/api/v1.0/recs?artworks_pos="+liked_ids+"&artworks_neg="+disliked_ids+""; //if its more than one they have to be numbers separated by comma without spaces
   
      ids = fetch(request)
      .then((response) => response.json())
      .then((responseJSON) => {
        biglist = responseJSON['recs']
  
        //list of 100 similar artwoks ids
        biglist_str = biglist.join();
        
        Refquery =  `
        {
          artwork_metrics(where: {media_type: {_in: ["gif", "png", "jpg", "mjpeg"]}, artwork_id: {_in: [`+biglist_str+ `] }}, limit: 5 {
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
     
