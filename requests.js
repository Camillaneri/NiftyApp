// TOOLTIPS

jQuery(document).ready(function($) {
  console.log("hi i'm jquery")
  $('#reference').css("box-shadow", "0 0 30px #198753")

  $( "#toTut1" ).click(function() {
    $('#tutorial2').css("display","none")
    $('#tutorial1').css("display","block");
    $('#id_dict').css("box-shadow", "unset")
    $('#reference').css("box-shadow", "0 0 30px #198753")
  });
  $( "#toTut2a" ).click(function() {
    $('#tutorial1').css("display","none")
    $('#tutorial2').css("display","block");
    $('#reference').css("box-shadow", "unset")
    $('#id_dict').css("box-shadow", "0 0 30px #198753")
  });

  $( "#toTut3" ).click(function() {
    $('#tutorial2').css("display","none")
    $('#tutorial3').css("display","block");
    $('#id_dict').css("box-shadow", "unset")
    $('.dropboxes').css("box-shadow", "0 0 30px #198753")
  });
  
  $( "#toTut2b" ).click(function() {
    $('#tutorial3').css("display","none")
    $('#tutorial2').css("display","block");
    $('.dropboxes').css("box-shadow", "unset")
    $('#id_dict').css("box-shadow", "0 0 30px #198753")
  });

  $( "#FinishTut" ).click(function() {
    $('.dropboxes').css("box-shadow", "unset")
    $('#tutorials').css("display","none")
  });
 
  // $(".botpage a").tipTip({ content: "This is an anchor tag!"});
  // $(".botpage a").tipTip('show');
  });
  
const removeEmptyOrNull = (obj) => {
  Object.keys(obj).forEach(k =>
    (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||
    (!obj[k] && obj[k] !== undefined) && delete obj[k] || obj.length == 1);
  return obj;
};


let RefID
function loadWarmUp(){
  
  
  function getRef() {
    console.log('start')

    IDnum = Math.floor(Math.random() * 50000) + 1
    
    Refquery =  `{
      artworks_by_pk(id: `+IDnum+` ){
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
      const id = id_dict['id']
      
      console.log(media)
        // check right media type
      if(media == 'gif' || media == 'mjpeg' || media == 'png'){
        $('#reference').attr('src',  id_dict['url'])
        console.log(id, 'id now')
        RefID = id
      }else{
        console.log('not found')
        getRef()}
      }
      
    )
  
  } ;
  console.log(RefID, 'last')
  getRef()

  
  
  
}
loadWarmUp(),




















// // fetch similars
// query = "https://artdiscovery.api.niftyvalue.com/recs/api/v1.0/recs?artworks_pos="+IDnum

// ids = fetch(query)
// .then((response) => response.json())
// .then((res) => {
//     similars=res['recs']
    
//     idx = 0
//     i = 0
//     while(i <=4, idx++){
//       console.log(idx)
//       id = similars[idx]
//       Simquery =  `{
//         artworks_by_pk(id: `+id+` ){
//         id
//         url
//         media_type
//         }}
//       ` 
//       fetch('https://staging.gql.api.niftyvalue.com/v1/graphql' , {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'text/json',
//         },
//         body: JSON.stringify({
//           query: Simquery
//       }),
//       })
//       .then((res2) => res2.json())
//       .then((result2) =>{ 
//         id2 = JSON.stringify(result2)
//         amico  = result2['data']['artworks_by_pk']
//         console.log(amico)
//         media2 = amico['media_type']
//         if(media2 == 'gif' || media2 == 'mjpeg' || media2 == 'png'){              
//           $('#similarImg'+idx).attr('src',  amico['url'])
//           idx+=1
      
//         }else{
          
//       }
      
//     })
//     i++;
//   }
// })}





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

//allow drop images
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var source = document.getElementById(data).src
  console.log(ev.target)
  ev.target.children[2].src = source
  ev.target.children[0].classList.remove('d-none')
  ev.target.style.border == '0'
}

function clearImg(ev){
 ev.target.parentElement.children[2].src = ''
 ev.target.parentElement.children[0].classList.add('d-none')
}