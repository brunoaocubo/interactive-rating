const buttons = document.querySelectorAll('.rating')
var buttonClicked = 0;
const orange500 = 'var(--Orange500)'

buttons.forEach(element => {
    element.addEventListener('click', function(event) {
        //window.alert(event.target.textContent)
        buttonClicked = event.target.textContent;
        if(element.style.backgroundColor != orange500){
            for(let i = 0; i < buttons.length; i++){
                buttons[i].style.backgroundColor = '';
                buttons[i].style.color = '';
            }
            element.style.backgroundColor = 'var(--Orange500)';  
            element.style.color = 'var(--Grey950)'
        }     
    })
})

function Avaliar(){
    var cardRating= document.querySelector('#card-rating')
    var cardResult = document.querySelector('#card-result-rating')
    var ratingResult = document.querySelector('#rating-result')
    cardRating.style.display = 'none'
    cardResult.style.display = 'flex'
    ratingResult.innerHTML = buttonClicked
}