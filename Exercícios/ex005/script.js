let tabela = document.querySelector('#seltab')
let resp = document.querySelector('#resp')
let numeros = []

function adicionar()
{
    let numInput = document.querySelector('#txt1')
    let num = Number(numInput.value)
    
    let pos = numeros.indexOf(num)
    if(num <= 0 || num > 100){
        alert('Insira um número válido!!')
    }
    
    else if (pos == -1){ // Se o número não estiver na array, adiciona-lo
    let item = document.createElement('option')
    numeros.push(num)
    item.text = `Valor ${num} adicionado.`
    tabela.appendChild(item)
    resp.innerHTML = ''
    }
    else{
        alert(`O número ${num} já está na lista.`)
    }
    numInput.value = ''
    numInput.focus()
}

function finalizar(){
    if (numeros.length != 0){
    resp.innerHTML = ''

    
    //Números
    let array = numeros
    let array_txt = document.createElement('p')
    array_txt.textContent = `Números cadastrados: ${array}.`

    // Adicionando estilo para permitir o scroll horizontal
    array_txt.style.overflowX = 'auto'
    array_txt.style.whiteSpace = 'nowrap'
    array_txt.style.width = '80%'
    resp.appendChild(array_txt)   
    
    //Comprimento da array
    let size = numeros.length
    let size_txt = document.createElement('p')
    size_txt.textContent = `Ao todo, temos ${size} números cadastrados.`
    resp.appendChild(size_txt)
    
    
    //Maior valor
    let maiorValor = Math.max(...numeros)
    let maiorValor_txt = document.createElement('p')
    maiorValor_txt.textContent = `O maior valor informado foi: ${maiorValor}.`
    resp.appendChild(maiorValor_txt)
    
    //Menor valor
    let menorValor = Math.min(...numeros)
    let menorValor_txt = document.createElement('p')
    menorValor_txt.textContent = `O menor valor informado foi: ${menorValor}.`
    resp.appendChild(menorValor_txt)
    
    //Soma dos valores
    let somaTotal = 0
    numeros.forEach(num =>{
        somaTotal += num
    })
    soma_txt = document.createElement('p')
    soma_txt.textContent = `Somando todos os valores, temos: ${somaTotal}.`
    resp.appendChild(soma_txt)
    
    //Média dos valores
    let media = somaTotal / size
    media_txt = document.createElement('p')
    media_txt.textContent = `A média dos valores é: ${media}.`
    resp.appendChild(media_txt)

    // Limpa o array
    numeros = []

    // Limpa a tabela
    tabela.innerHTML = ''}
    else{
        alert('Adicione 2 ou mais valores!!')
    }
}
