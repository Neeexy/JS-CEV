const darkToggle = document.getElementById('darkmode-toggle')
const main = document.querySelector('.main')

darkToggle.addEventListener('change',function(){
    if(darkToggle.checked){
        document.body.classList.add("body-dark-mode")
        main.classList.add('main-dark-mode')
    }else{
        document.body.classList.remove("body-dark-mode")
        main.classList.remove('main-dark-mode')
    }
})