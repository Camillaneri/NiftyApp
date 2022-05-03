const removeEmptyOrNull = (obj) => {
  Object.keys(obj).forEach(k =>
    (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||
    (!obj[k] && obj[k] !== undefined) && delete obj[k] || obj.length == 1);
  return obj;
};



function getWarmUpData() {

query =  `{
  artworks_by_pk(id: 200){
    url
    media_type
  }}
` 
fetch('https://staging.gql.api.niftyvalue.com/v1/graphql' , {
  method: 'POST',
  headers: {
    'Content-Type': 'text/json',
  },
  body: JSON.stringify({
    query: ` {
      artworks_by_pk(id: [num]{
      id 
      url
      media_type
    }
  }
` 
}),
})

.then((res) => res.json())
.then((result) =>{  
    const allUrls = JSON.stringify(result)
    clean = removeEmptyOrNull(JSON.parse(allUrls))
    support = clean['data']['artworks']
    accepted = []
    for (item in support) {
      Mydict = support[item]
      Mediatype =  Mydict['media_type']
      if (Mydict.hasOwnProperty("media_type") && Mediatype != 'h264' &&  Mediatype != 'hevc' &&  Mediatype != 'aac' &&  Mediatype != 'pcm_s16le'){
        accepted.push(Mydict)
      }
    }
    console.log(accepted)
    IDnum = Math.floor(Math.random() * accepted.length) + 1
    refimage = accepted[IDnum]
    document.getElementById("reference").src = refimage['url']
    query = "https://artdiscovery.api.niftyvalue.com/recs/api/v1.0/recs?artworks_pos="+refimage['id']
    ids = fetch(query)
      .then((response) => response.json())
      .then((responseJSON) => {
        biglist = responseJSON['recs']
        similars = []
        for (id in biglist){
          idx = support.findIndex(p => p.id == biglist[id]);
          myurl = support[idx]
          if (myurl != undefined && myurl.hasOwnProperty("media_type") ){
            Similartype =  myurl['media_type']
            if(Similartype != 'h264' && Similartype != 'hevc'&& Similartype != 'aac' && Similartype != 'pcm_s16le' && Similartype != 'pcm_s24le'){
              similars.push(myurl)
            }else{console.log(myurl)}
          }else{console.log(myurl)}
        }
          console.log('slice',similars.slice(1,6))
          // document.getElementById('similarImg'+id).src = myurl['url']
         
          //popola diverse div
          for(item in similars.slice(1,6)){
            console.log('item is', similars[item])
            focused = similars[item]
            console.log('mediatype is',focused['media_type'])
            document.getElementById('similarImg'+item).src = focused['url']
            


          }

        
        
         
      })
      ;      
     
  })

  
};




getWarmUpData();

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