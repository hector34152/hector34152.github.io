window.addEventListener('load', init, false);
function init() {
    let menu = document.querySelector('#menu');
    let boton = document.querySelector('#boton');
    let bLat = document.querySelector('#barraLateral');
    let info = document.querySelector("#informacion");
    let span = document.querySelector("#span");
    let name = document.querySelector("#name");
    let rever = document.querySelectorAll(".reverso");
    boton.addEventListener('click', function (e) {
        if(menu.style.visibility === 'visible'){
            menu.style.visibility = 'hidden';
            bLat.style.width = '32px';
            name.style.position = 'relative';
            span.style.visibility = 'visible';
            rever.forEach(element => {element.style.visibility = 'visible';});
        }
        else{
            menu.style.visibility = 'visible';
            bLat.style.width = '235px';
            name.style.position = 'static';
            span.style.visibility = 'hidden';
            span.style.width = '235px';
            rever.forEach(element => {element.style.visibility = 'hidden';});
        }
    }, false);
}
