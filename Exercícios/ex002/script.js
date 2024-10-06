var time = new Date()
var year = time.getFullYear()
function verify() {
    var fano = Number(document.getElementById("birth").value);
    var age = (year - fano)
    var sex = document.getElementById('sex').value
    var phrase = document.getElementById('phrase')
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    
    
    //Tratamento de Erros
    if (fano == 0 || fano > year || fano <1900){
        alert('[ERRO] Verifique as informações e tente novamente!')
        location.reload()
    }
    // Homens:
    if(sex == 'masc' && age <= 10){
        phrase.innerHTML = `Detectamos um <strong>Homem</strong> com ${age} anos.`
        img.setAttribute('src','style/components/h/garoto10-homem.png')
    } else if (sex == 'masc' && age <= 21){
        phrase.innerHTML = `Detectamos um <strong>Homem</strong> com ${age} anos.`
        img.setAttribute('src','style/components/h/jovem18-homem.png')
    } else if (sex == 'masc' && age <= 45){
        phrase.innerHTML = `Detectamos um <strong>Homem</strong> com ${age} anos.`
        img.setAttribute('src','style/components/h/adulto30-homem.png')
    }
    else if (sex == 'masc' && age > 45 ){
        phrase.innerHTML = `Detectamos um <strong>Homem</strong> com ${age} anos.`
        img.setAttribute('src','style/components/h/idoso70-homem.png')
    }

    // Mulheres
    else if(sex == 'fem' && age <= 10){
        phrase.innerHTML = `Detectamos uma <strong>Mulher</strong> com ${age} anos.`
        img.setAttribute('src','style/components/m/garota10-mulher.png')
    } else if (sex == 'fem' && age <= 21){
        phrase.innerHTML = `Detectamos uma <strong>Mulher</strong> com ${age} anos.`
        img.setAttribute('src','style/components/m/jovem18-mulher.png')
    } else if (sex == 'fem' && age <= 45){
        phrase.innerHTML = `Detectamos uma <strong>Mulher</strong> com ${age} anos.`
        img.setAttribute('src','style/components/m/adulta30-mulher.png')
    }
    else if (sex == 'fem' && age > 45){
        phrase.innerHTML = `Detectamos uma <strong>Mulher</strong> com ${age} anos.`
        img.setAttribute('src','style/components/m/idosa70-mulher.png')
    }
    // Estilizando
    phrase.style.textAlign = 'center'
    phrase.appendChild(img)
}