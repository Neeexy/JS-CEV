var resultado = document.querySelector('#result')
var frase = document.querySelector('#frase')
function contar(){
    var N_inicio = Number(document.querySelector('#Ninicio').value)
    var N_fim = Number(document.querySelector('#Nfim').value)
    var passo = Number(document.querySelector('#passo').value)


    frase.innerHTML = 'Contando...'

    if(passo <=0){
        alert('Passo inválido. Considerando "1" como passo.')
        passo = 1
    }

    for (var c = N_inicio; c <= N_fim; c += passo){
    if(c < N_fim){resultado.innerHTML += `${c} 👉`}
    else{resultado.innerHTML += `${c} 🏁`}
    }
}
