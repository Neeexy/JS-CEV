let num = [5, 8, 2, 9, 3]

num[5]=10
num.push(15)

console.log(`Nosso vetor é o: ${num}`)

console.log(`O comprimento da array 'num' é: ${num.length}.`)

let cb = (a,b) => a-b // Callback

console.log(`A array 'num' ordenada é: ${num.sort(cb)}`)

for(let pos = 0;pos<num.length;pos++){
    console.log(`${num[pos]}`)
}

for (let pos in num){
    console.log(`${num[pos]}`)
}

