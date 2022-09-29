
        import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
        const supabase3 = createClient('https://cgvvgwcioxjnzpgxisbu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNndnZnd2Npb3hqbnpwZ3hpc2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM3MzM0MzUsImV4cCI6MTk2OTMwOTQzNX0.Ot2PkSTOWzi4RWs_gIsL3g1heXsDYCzflOyBocR-n5U')
      
        console.log(sessionStorage)
        let myId = sessionStorage.getItem('id');
        
        var refimg = sessionStorage.getItem('WUreference');

        console.log(myId)
        const form = document.querySelectorAll('#T-form')
        form[0].addEventListener('submit', async (event) => {

        event.preventDefault()
        console.log('Task storage: ', sessionStorage)
        var myId = sessionStorage.getItem('id');
        var myImgIds = sessionStorage.getItem('myImgIds');
        var myGallery_count = sessionStorage.getItem('myGallery_count');
        var displayedImgs = sessionStorage.getItem('displayedImgs');
        var TimeXquery = sessionStorage.getItem("TimeXquery")
        TimeXquery = JSON.parse(TimeXquery)
        console.log('images',myImgIds,myGallery_count)
        var queries = sessionStorage.getItem('n_queries');
        var toAdd = {};
        for(var i = 1; i <= queries; ++i){
            var query = sessionStorage.getItem('query'+i);
            query = query.split("\\")
            console.log('CHECK'+i, query)
            
            toAdd[i]=JSON.parse(query);
            
        }
        console.log('toAdd', toAdd)
        var queriesIds = toAdd
        var submission = {'user':myId, 'n_queries':queries, 'queries_ids':queriesIds, 'myImgIds':myImgIds, 'myGallery_count':myGallery_count, 'displayedImgs':displayedImgs, 'TimeXquery':TimeXquery}


        const formInputs = form[0].querySelectorAll('input[name = Satisfaction], input[name = Issues]:checked, input[name = Comments]')
            
        // scrivere qui gli altri log 
        formInputs.forEach( element =>{
            const { value, name } = element
            if (value) {

                if (submission[name] != undefined){
                submission[name]=submission[name]+', '+value}else{submission[name]=value}
            
            }
        })

        // console.log('final submission', submission)
        await supabase3.from('Main_task').insert([submission])
        window.location.href = "end.html"

    })