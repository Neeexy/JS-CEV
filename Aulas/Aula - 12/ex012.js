var now = new Date()
var h = now.getHours()
        var u = document.getElementById('verify')
        
        function calc(){
        // var h = Number(ho.value)
        if (5 < h && h < 12){
            u = 'Bom Bia'
        } else if(12 <= h && h <= 18){
            u = 'Boa Tarde'
        } else if(18 <= h && h <=24){
            u = 'Boa Noite'
        } else{
            u = 'Boa Madrudaga'
        }
        res.innerHTML = `<p>Agora são exatamente <strong>${h}</strong> horas. <br> <strong>${u}</strong>!</p>`
        }
        
        u.addEventListener('click',calc)
