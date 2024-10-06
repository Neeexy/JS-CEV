const seasonbutton = document.querySelectorAll('.temporada-selector button');
const seasons = document.querySelectorAll('.temporada')

seasonbutton.forEach(button =>{
    button.addEventListener('click',()=>{
        const seasonId = `temporada-${button.dataset.temporada}`
        
        seasons.forEach(temp => {
            temp.style.display ='none';
        });
        document.getElementById(seasonId).style.display = 'block'
    })
    
})
