
        //  insert form in supabase
        import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
       // createClient contain the project's url and public anon key
        const supabase2 = createClient('https://cgvvgwcioxjnzpgxisbu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNndnZnd2Npb3hqbnpwZ3hpc2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM3MzM0MzUsImV4cCI6MTk2OTMwOTQzNX0.Ot2PkSTOWzi4RWs_gIsL3g1heXsDYCzflOyBocR-n5U')
      
        console.log('Supabase Instance: ', supabase2)
        let myId = sessionStorage.getItem('id');
        
        console.log(myId)

        const form = document.querySelectorAll('#WU-form')
        form[0].addEventListener('submit', async (event) => {

            event.preventDefault()

        var AIorder = sessionStorage.getItem('AIorder');
        AIorder = JSON.parse(AIorder)
        var Uorder = sessionStorage.getItem('userOrder');
        Uorder = JSON.parse(Uorder)
                var time = sessionStorage.getItem('TimeXround');
        time = JSON.parse(time)

        var refimg = sessionStorage.getItem('WUreference');
        refimg = JSON.parse(refimg)


        var submission = {'Id':myId, 'refID':refimg, 'AIorder ':AIorder, 'UserOrder':Uorder, 'TimeXround':time}
            const formInputs = form[0].querySelectorAll('input[name = Satisfaction], input[name = Issues]:checked, input[name = Comments]')
            
            formInputs.forEach( element =>{
                const { value, name } = element
                if (value) {

                    if (submission[name] != undefined){
                    submission[name]=submission[name]+', '+value}else{submission[name]=value}
                
                }
            })

            // link to table named Warm_up
            await supabase2.from('Warm_up').insert([submission])
            window.location.href = "Task.html"

        })