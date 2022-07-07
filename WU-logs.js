
function endTask(){
    const endWU = new Date().getTime()
    sessionStorage.setItem('endWU'+n_round , endWU)
    console.log(sessionStorage)
    support = document.getElementById('Small').children[0].childNodes
    img1 = support[1].children[0].children[2].id
    img2 = support[3].children[0].children[2].id
    img3 = support[5].children[0].children[2].id
    img4 = support[7].children[0].children[2].id
    img5 = support[9].children[0].children[2].id

    sessionStorage.setItem('userOrder', [img1, img2, img3, img4, img5])

   console.log(sessionStorage)
   
}

function resetWU(){
    
}
// total rounds, image order by algorithm, image order by user (for each round) time spent per round 

// CHECKED :
// user order,
// AI order 
//