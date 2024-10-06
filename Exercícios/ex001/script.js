var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

var hora_pag = document.getElementById('hora')
var min_pag = document.getElementById('min')

hora_pag.innerText = (hora)
min_pag.innerText = (min)
var imagem = document.getElementById('image')

if(5 < hora && hora <= 17 ){imagem.src = 'https://www.shutterstock.com/image-photo/green-grass-field-lawn-tree-600nw-2492822361.jpg'}
else{
    imagem.src = 'https://media.istockphoto.com/id/1357852110/es/foto/cosecha-de-ma%C3%ADz-por-la-noche.jpg?s=612x612&w=0&k=20&c=bkEYngP1GWG3Q8p6vftySH0sX8WtISYeEZbZ3yxizIY='
    document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(75, 79, 82)'
}