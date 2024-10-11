var cont = 0
function tudobem(){
    while(cont <= 7){
        console.log(`${cont}º Tudo bem?`)
        cont += 1
    }
}
tudobem()
cont = 0
function tudobem2(){
    
    do{
        console.log(`${cont}º Tudo bem?`)
        cont += 1
    }while(cont <= 7)
}
console.log('------')
tudobem2()