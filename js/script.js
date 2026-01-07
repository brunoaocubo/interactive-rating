

function Avaliar(){
    var teste = document.getElementsByClassName('rating')
    let buttons = []

    for(let button = 0; button < teste.length; button++){
        window.alert(teste[button].value)
    }
}