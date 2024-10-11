function tabuada(){
    let num = Number(document.querySelector('#num').value)
    let tab = document.querySelector('#seltab')

    if (num == 0){
        alert('Por favor, digite um número!')
    }

    let c = 0
    tab.innerHTML = ''

    while(c <=10){
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        tab.appendChild(item)
        c +=1
    }
}