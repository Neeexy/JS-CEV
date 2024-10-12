function tabuada(){
    let numero = Number(document.querySelector('#num').value)
    let tabela = document.querySelector('#seltab')

    if(numero == 0){
        alert('Por favor, insira um número!!')
        location.reload()
    }
    

    let contador = 0
    tabela.innerHTML = ''

    while (contador <= 10){
        let item = document.createElement('option')
        item.text = `${numero} x ${contador} = ${numero*contador}`
        tabela.appendChild(item)
        contador++
    }
}