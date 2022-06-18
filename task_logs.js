var currentDate = new Date()
sessionStorage.setItem('access-surv1', currentDate);

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabase = createClient('https://cgvvgwcioxjnzpgxisbu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNndnZnd2Npb3hqbnpwZ3hpc2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM3MzM0MzUsImV4cCI6MTk2OTMwOTQzNX0.Ot2PkSTOWzi4RWs_gIsL3g1heXsDYCzflOyBocR-n5U')
console.log('S Instance: ', supabase)

let myId = sessionStorage.getItem('id');
var submission = {'id':parseInt(myId)}
console.log('my id= ',myId)
const queries = sessionStorage.getItem('n_queries');
submission['n_queries'] = n_queries
console.log('sub= ',submission)

document.getElementById("submit").addEventListener("click", function(){ alert("Hello World!");  supabase.from('Main_task').insert([submission])});
// console.log(form[0])
// form[0].addEventListener('submit', async (event) => {

//     event.preventDefault()
//     console.log('event =', event)
    

//     console.log(submission)
    
//     await supabase.from('Main_task').insert([submission])
//     // window.location.href = "warmUp.html"

// })
// document.getElementById('submit').addEventListener('click', function(){
//     console.log('clicked')
//     let myId = sessionStorage.getItem('id');

//     const queries = sessionStorage.getItem('n_queries');
//     console.log(myId, queries)
//     awaitsupabase.from('Main_task').insert([
//         { id: myId, n_queries: queries }
//     ])


//    });



  // function endTask(){
        //     let myId = sessionStorage.getItem('id');
        //     console.log('User ID: ', myId)
        //     var submission = {'id':myId}
        //     console.log(myId)
        //     console.log("Initial submission: ",submission)
        //     event.preventDefault()
        //     // add queries count
        //     const n_queries = sessionStorage.getItem('n_queries');
        //     submission['n_queries'] = n_queries
            
        //     await supabase.from('Main_task').insert([submission])
        //     consol.log('sent')
        // }
        

            // formInputs.forEach( element =>{
            //     const { value, name } = element
            //     if (value) {

            //         if (submission[name] != undefined){
            //         submission[name]=submission[name]+', '+value}else{submission[name]=value}
                
            //     }
            // })

            // console.log(submission)
            // await supabase.from('First_survey').insert([submission])
            // window.location.href = "PostSurvey.html"


            
         
