
function getSimilar(id,box) {
  
  Simquery =  `{
    artworks_by_pk(id:`+id+`){
      id
      url
      media_type 
    }}`
    // fetch first image
  var resp = fetch('https://staging.gql.api.niftyvalue.com/v1/graphql' , {
    method: 'POST',
    headers: {
      'Content-Type': 'text/json',
    },
    body: JSON.stringify({
      query: Simquery
    }),
  })
  .then((res) => 
     res.json()
  ) 
  .then((result) => 
     result['data']['artworks_by_pk']
  ) 
  .then((resultthen) => resultthen['media_type'])
  return resp
}

function loadWarmUp(){


  function getRef() {
    console.log('start')
    
    IDnum = Math.floor(Math.random() * 50000) + 1
    
    // `{
    //   artworks_by_pk(id: `+IDnum+` ){
    //     id
    //     url
    //     media_type
    //   }}
    // ` 

  //   FIND ARTWORKS BY PK AND OTHER QUERY INPUTS 
  // {__schema {
  //     queryType {
  //       name
  //       fields{
  //         name
  //         description
  //         args{
  //           name
  //         }
  //       }
  //     }
  //   }
  // }
    Refquery =  `
      ` 
    // fetch first image
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
      console.log('REF MEDIA TYPE =',media)
        // check right media type
      if(media == 'gif' || media == 'mjpeg' || media == 'png'){
        $('#reference').attr('src',  id_dict['url'])
        console.log(id, 'id now')
        // fetch similars
        query = "https://artdiscovery.api.niftyvalue.com/recs/api/v1.0/recs?artworks_pos="+IDnum
        console.log('START FETCH')
        fetch(query)
        .then(res => res.json())
        .then(data => {
         
          ids = data['recs']
          
          done = 0
          for(id in ids){
            console.log('done=', done)
            search = ids[id]
            if(done<5){
              presence = getSimilar(search, done)
              console.log('presence', presence)


              done+=1
            }
            
          } 
        })
      }else{
            getRef()
          }
        });

  }
  getRef()
  
 
  
}




loadWarmUp()





















// function getWarmUpData() {


// fetch('https://staging.gql.api.niftyvalue.com/v1/graphql' , {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'text/json',
//   },
//   body: JSON.stringify({
//     query: ` {
//       artworks_by_pk(id: [num]{
//       id 
//       url
//       media_type
//     }
//   }
// ` 
// }),
// })

// .then((res) => res.json())
// .then((result) =>{  
//     const allUrls = JSON.stringify(result)
//     clean = removeEmptyOrNull(JSON.parse(allUrls))
//     support = clean['data']['artworks']
//     accepted = []
//     for (item in support) {
//       Mydict = support[item]
//       Mediatype =  Mydict['media_type']
//       if (Mydict.hasOwnProperty("media_type") && Mediatype != 'h264' &&  Mediatype != 'hevc' &&  Mediatype != 'aac' &&  Mediatype != 'pcm_s16le'){
//         accepted.push(Mydict)
//       }
//     }
//     console.log(accepted)
//     refimage = accepted[IDnum]
//     document.getElementById("reference").src = refimage['url']
//     query = "https://artdiscovery.api.niftyvalue.com/recs/api/v1.0/recs?artworks_pos="+refimage['id']
//     ids = fetch(query)
//       .then((response) => response.json())
//       .then((responseJSON) => {
//         biglist = responseJSON['recs']
//         similars = []
//         for (id in biglist){
//           idx = support.findIndex(p => p.id == biglist[id]);
//           myurl = support[idx]
//           if (myurl != undefined && myurl.hasOwnProperty("media_type") ){
//             Similartype =  myurl['media_type']
//             if(Similartype != 'h264' && Similartype != 'hevc'&& Similartype != 'aac' && Similartype != 'pcm_s16le' && Similartype != 'pcm_s24le'){
//               similars.push(myurl)
//             }else{console.log(myurl)}
//           }else{console.log(myurl)}
//         }
//           console.log('slice',similars.slice(1,6))
//           // document.getElementById('similarImg'+id).src = myurl['url']
         
//           //popola diverse div
//           for(item in similars.slice(1,6)){
//             console.log('item is', similars[item])
//             focused = similars[item]
//             console.log('mediatype is',focused['media_type'])
//             document.getElementById('similarImg'+item).src = focused['url']
            


//           }

        
        
         
//       })
//       ;      
     
//   })

  
// };




// getWarmUpData();




