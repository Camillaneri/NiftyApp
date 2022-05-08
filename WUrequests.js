function loadWarmUp(){
  

  




  function getRef() {
    console.log('start')
    
    IDnum = Math.floor(Math.random() * 50000) + 1

    Refquery =  `
              {
                artworks_by_pk(id:`+IDnum+`){
                  id
                  url
                  media_type 
                }}
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
          console.log('RESULT =',data) 
          ids = data['recs']
          console.log('ID DICT FOF SIMILARS =',ids)

          // get image boxes
          children_coso = document.getElementById('coso').children
          console.log('CHILDREN COSO = ', children_coso)
          
          idx = 0
          //get box 0 image 
          function getSimilar0(list, ids_idx) {
            id0 = parseInt(list[ids_idx])
            console.log('ENTERED GETSIMILAR()', ids_idx)
            
            children_coso = document.getElementById('coso').children
            Myimg0 =  children_coso[0].children[0]
        
            console.log('IMG GETSIMILAR0()', Myimg0)
                  
            
            Simquery0 =  `{
              artworks_by_pk(id:`+id0+`){
                id
                url
                media_type 
              }}`
              // fetch first image
            fetch('https://staging.gql.api.niftyvalue.com/v1/graphql' , {
              method: 'POST',
              headers: {
                'Content-Type': 'text/json',
              },
              body: JSON.stringify({
                query: Simquery0
              }),
            })
            .then((res0) => res0.json())
            .then((result0) =>{ 
              console.log('RESULT FETCH IN GETSIMILAR() =',result0)
              id_dict0 = result0['data']['artworks_by_pk']
              media0 = id_dict0['media_type']
              url0 = id_dict0['url']
              console.log('MEDIA TYPE RESULT FETCH IN GETSIMILAR() =',media0)
              if(media0 == 'gif' || media0 == 'mjpeg' || media0 == 'png'){
                console.log('ok')
                Myimg0.setAttribute('src', url0)
                Myimg0.setAttribute('value', id0)
                
              }else{
                console.log('nope')
                ids_idx +=1
                console.log('NEW ID WHEN RECALLING GET SIMILARS GETSIMILAR() =',ids_idx)
                getSimilar0(list, ids_idx)
              }
            })
            return ids_idx
          }
          start_new_slice = getSimilar0(ids, idx)+1,
          console.log('NEW ID TRY = ', start_new_slice)
          // set nwv idex
          ids = ids.slice(start_new_slice,)
          console.log('NEW IDS LIST FOR IMG1 = ', ids)

          //get box 1 image 
          function getSimilar1(list, ids_idx) {
            id1 = parseInt(list[ids_idx])
            console.log('ENTERED GETSIMILAR1()', id1, ids_idx)
            
            children_coso = document.getElementById('coso').children
            Myimg1 =  children_coso[1].children[0]
        
            console.log('ENTERED GETSIMILAR()', id1, ids_idx)
                  
            
            Simquery1 =  `{
              artworks_by_pk(id:`+id1+`){
                id
                url
                media_type 
              }}`
              // fetch first image
            fetch('https://staging.gql.api.niftyvalue.com/v1/graphql' , {
              method: 'POST',
              headers: {
                'Content-Type': 'text/json',
              },
              body: JSON.stringify({
                query: Simquery1
              }),
            })
            .then((res1) => res1.json())
            .then((result1) =>{ 
              console.log('RESULT FETCH IN GETSIMILAR() =',result1)
              id_dict1 = result1['data']['artworks_by_pk']
              media1 = id_dict1['media_type']
              url1 = id_dict1['url']
              console.log('MEDIA TYPE RESULT FETCH IN GETSIMILAR() =',media1)
              if(media1 == 'gif' || media1 == 'mjpeg' || media1 == 'png'){
                console.log('ok')
                Myimg1.setAttribute('src', url1)
                Myimg1.setAttribute('value', id1)
                
              }else{
                console.log('nope')
                ids_idx +=1
                console.log('NEW ID WHEN RECALLING GET SIMILARS GETSIMILAR() =',ids_idx)
                getSimilar1(list, ids_idx)
              }
            })
            return ids_idx
          }

          start_new_slice = getSimilar1(ids, idx)+1,
          console.log('NEW ID TRY = ', start_new_slice)
          // set nwv idex
          ids = ids.slice(start_new_slice,)
          console.log('NEW IDS LIST FOR IMG2 = ', ids)

          function getSimilar2(list, ids_idx) {
            id2 = parseInt(list[ids_idx])
            console.log('ENTERED GETSIMILAR2()', id2, ids_idx)
            
            children_coso = document.getElementById('coso').children
            Myimg2 =  children_coso[2].children[0]
        
            console.log('ENTERED GETSIMILAR()', id2, ids_idx)
                  
            
            Simquery2 =  `{
              artworks_by_pk(id:`+id2+`){
                id
                url
                media_type 
              }}`
              // fetch first image
            fetch('https://staging.gql.api.niftyvalue.com/v1/graphql' , {
              method: 'POST',
              headers: {
                'Content-Type': 'text/json',
              },
              body: JSON.stringify({
                query: Simquery2
              }),
            })
            .then((res2) => res2.json())
            .then((result2) =>{ 
              console.log('RESULT FETCH IN GETSIMILAR() =',result2)
              id_dict2 = result2['data']['artworks_by_pk']
              media2 = id_dict2['media_type']
              url2 = id_dict2['url']
              console.log('MEDIA TYPE RESULT FETCH IN GETSIMILAR() =',media2)
              if(media2 == 'gif' || media2 == 'mjpeg' || media2 == 'png'){
                console.log('ok')
                Myimg2.setAttribute('src', url2)
                Myimg2.setAttribute('value', id2)
                
              }else{
                console.log('nope')
                ids_idx +=1
                console.log('NEW ID WHEN RECALLING GET SIMILARS GETSIMILAR() =',ids_idx)
                getSimilar2(list, ids_idx)
              }
            })
            return ids_idx
          }

          start_new_slice = getSimilar2(ids, idx)+1,
          console.log('NEW ID TRY = ', start_new_slice)
          // set nwv idex
          ids = ids.slice(start_new_slice,)
          console.log('NEW IDS LIST FOR IMG3 = ', ids)

          img0 =  children_coso[0].children[0]
          img1 =  children_coso[1].children[0]
          img2 =  children_coso[2].children[0]
          img3 =  children_coso[3].children[0]
          img4 =  children_coso[4].children[0]

          valout = img0.getAttribute('value')

          console.log('VALUE IMG0 DOPO GET SIMILAR = ', typeof valout, valout, typeof ids[0], ids[0]) 



          console.log('IMG 0 =', img0 )
          console.log('IMG 1 =', img1 )
          console.log('IMG 2 =', img2 )
          console.log('IMG 3 =', img3 )
          console.log('IMG 4 =', img4 )
   
          
        })
      }else{
            getRef()
          }
        });

  }
  getRef()
  
 
  
}




loadWarmUp()



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




