//  insert form in supabase
var currentDate = new Date()
sessionStorage.setItem('access-warmup', currentDate);
// createClient contain the project's url and public anon key
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabase = createClient('https://cgvvgwcioxjnzpgxisbu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNndnZnd2Npb3hqbnpwZ3hpc2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM3MzM0MzUsImV4cCI6MTk2OTMwOTQzNX0.Ot2PkSTOWzi4RWs_gIsL3g1heXsDYCzflOyBocR-n5U')

console.log('Supabase Instance: ', supabase)
let myId = sessionStorage.getItem('id');

console.log(myId)
const form = document.querySelectorAll('#pre-form')
form[0].addEventListener('submit', async (event) => {

    event.preventDefault()
    const formInputs = form[0].querySelectorAll('input[name = ArtExp]:checked, input[name = NftExp]:checked, input[name = FinBcExp]:checked, input[name = useMM]:checked, input[name = Decision], input[name = Bore], input[name = Curios]')
    let submission = {'id':myId}
    formInputs.forEach( element =>{
        const { value, name } = element
        if (value) {

            if (submission[name] != undefined){
            submission[name]=submission[name]+', '+value}else{submission[name]=value}
        
        }
    })

    console.log(submission)
    // link to table named First_Survey
    await supabase.from('First_survey').insert([submission])
    window.location.href = "warmUp.html"

})