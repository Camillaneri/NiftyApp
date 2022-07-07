
function endTask(){
    const supabase = createClient('https://cgvvgwcioxjnzpgxisbu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNndnZnd2Npb3hqbnpwZ3hpc2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM3MzM0MzUsImV4cCI6MTk2OTMwOTQzNX0.Ot2PkSTOWzi4RWs_gIsL3g1heXsDYCzflOyBocR-n5U')

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

// total rounds, image order by algorithm, image order by user (for each round) time spent per round 
