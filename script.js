window.addEventListener('load', init, false);
let i=0;
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
function changeInfo(a){
    let personal =[
        "<ul id='personal'><h2>Hector Guadalupe Flores Picazo</h2><div><h2 id='name'>WEB DEVELOPER IN PROCESS....<span id='span'>&#160;</span></h2></div><div><h3>Bienvendo a mi portafolio como desarrollador web.</h3></li><div><p>Para ponerte en contacto conmigo tienes mis redes sociales aqui abajo.</p></div><div id='social'><div><a href='https://www.instagram.com/florespicazohector?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><img src='img/instagram.png' width='30%'></a></div><div><a href='https://wa.me/524921924116'><img src='img/whatsap.png' width='30%'></a></div></div></ul>",
        "<ul id='sobreMi'><h2>Sobre mi...</h2><li><p> Inicie en el mundo digital desde pequeño ya que desde siempre me ah llamado mucho la atencion los equipos tecnologicos, pero considero que mi gusto por la programacion inicia cuando comienzo una ingenieria en la Universidad Automoma de Zacatecas. Por motivos personales y de la pandemia tuve que dejar mis estudios inconclusos, sin embargo ahora estoy por concluir una ingenieria en sistemas computacionales en la Universidad UCAD.</p></li></ul>",
        "<div class='cardP'><div class='imgContent'><img src='img/calculadora.png'></div><div class='contenido'><h1>Calculadora</h1><p>Es un pequeño programa, pero no deja de ser un clasico.</p><a href='/portafolio/Calculadora/index.html'>probar</a></div></div><div class='cardP'><div class='imgContent'><img src='img/tictactoe.png'></div><div class='contenido'><h1>Tic Tac Toe</h1><p>Este es un juego clasico.</p><a href='/portafolio/TicTacToe/index.html'>probar</a></div></div>",
        "<div class='certificados'><div class='card' style='--i:url(img/sololearn.jpg)'><div class='reverso'><h3>SoloLearn</h3><a href='https://www.sololearn.com/certificates/CT-BOAFOG99'>Java</a><a href='https://www.sololearn.com/certificates/CT-NEZKJA8H'>C</a><a href='https://www.sololearn.com/certificates/CT-IUJFCXHP'>HTML</a></div></div><div class='card' style='--i:url(img/ucad.jpg)'><div class='reverso'><h3>UCAD</h3><a href='doc/UCAD/DiplomadoJava.pdf'>Java</a></div></div><div class='card' style='--i:url(img/bancoppel.jpg)'><div class='reverso'><h3>BanCoppel</h3><a href='doc/BANCOPPEL/Certificado_de_PLD_.pdf'>Prevención de lavado de dinero</a><a href='doc/BANCOPPEL/Certificado_de_PLD_Remesas.pdf'>Prevención de lavado de dinero en remesas</a><a href='doc/BANCOPPEL/Certificado_de_Biometra_Facial.pdf'>Biometria facial</a><a href='doc/BANCOPPEL/Certificado_de_Cmo_actuar_en_caso_de_asalto_o_intimidacin.pdf'>Como actuar en caso de asalto o intimidacion</a><a href='doc/BANCOPPEL/Certificado_de_Cdigo_de_tica_.pdf'>Codigo de etica</a><a href='doc/BANCOPPEL/Certificado_de_Cheques.pdf'>Cheques</a><a href='doc/BANCOPPEL/Certificado_de_Manejo_de_Efectivo.pdf'>Manejo de efectivo</a><a href='doc/BANCOPPEL/Certificado_de_Reestructuras_de_Crdito.pdf'>Reestructura de creditos</a><a href='doc/BANCOPPEL/Certificado_Prevencin_de_Fraudes.pdf'>Prevencios de fraudes</a><a href='doc/BANCOPPEL/Reporte_de_Operacin_Inusual_ROI.pdf'>Operaciones inucuales</a></div></div></div>",
    ];
    document.getElementById("informacion").innerHTML = personal[a];
}
function openM(){
    let ite = document.querySelectorAll(".ite");
    let flag = document.getElementById("flag");
    let bLat = document.querySelector('#barraLateral');
    if(flag.style.visibility === 'hidden'){
        ite.forEach(element => {element.style.visibility = 'visible';});
        flag.style.visibility = 'visible';
        bLat.style.width = '20%';
    }
    else{
        ite.forEach(element => {element.style.visibility = 'hidden';});
        flag.style.visibility = 'hidden';
        bLat.style.width = '10%';
    }
    
}
function changeColor(){
    let bLat = document.querySelector('#barraLateral');
    let colors = [
        "rgb( 21,67,96)","rgb(176,58,46)","rgb(156,100,12)","rgb(33,47,60)","rgb(0,0,0)"];
    if(i==colors.length)
        i=0;
    bLat.style.backgroundColor = colors[i];
    i++;
}
