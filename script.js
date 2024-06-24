window.addEventListener('load', init, false);
let i=0;

function changeInfo(a){
    let personal =[
        "<ul id='personal'><h2>Hector Guadalupe Flores Picazo</h2><div><h1 id='name'>WEB DEVELOPER IN PROCESS....<span id='span'>&#160;</span></h1></div><div><h3>Bienvendo a mi portafolio como desarrollador web.</h3></li><div><p>Para ponerte en contacto conmigo tienes mis redes sociales aqui abajo.</p></div><div id='social'><div><a href='https://www.instagram.com/florespicazohector?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><img src='img/instagram.png' width='30%'></a></div><div><a href='https://wa.me/524921924116'><img src='img/whatsap.png' width='30%'></a></div></div></ul>",
        "<ul id='sobreMi'><h2>Sobre mi...</h2><li><p> Inicie en el mundo digital desde pequeño ya que desde siempre me ah llamado mucho la atencion los equipos tecnologicos, pero considero que mi gusto por la programacion inicia cuando comienzo una ingenieria en la Universidad Automoma de Zacatecas. Por motivos personales y de la pandemia tuve que dejar mis estudios inconclusos, sin embargo ahora estoy por concluir una ingenieria en sistemas computacionales en la Universidad UCAD.</p></li></ul>",
        "<div class='cardP'><div class='imgContent'><img src='img/calculadora.png'></div><div class='contenido'><h1>Calculadora</h1><p>Es un pequeño programa, pero no deja de ser un clasico.</p><a href='/portafolio/Calculadora/index.html'>probar</a></div></div><div class='cardP'><div class='imgContent'><img src='img/tictactoe.png'></div><div class='contenido'><h1>Tic Tac Toe</h1><p>Este es un juego clasico.</p><a href='/portafolio/TicTacToe/index.html'>probar</a></div></div>",
        "<div class='certificados'><div class='card' style='--i:url(img/sololearnL.jpg)'><div class='reverso'><h3>SoloLearn</h3><p><a href='https://www.sololearn.com/certificates/CT-BOAFOG99'>Java</a></p><p><a href='https://www.sololearn.com/certificates/CT-NEZKJA8H'>C</a></p><p><a href='https://www.sololearn.com/certificates/CT-IUJFCXHP'>HTML</a></p></div></div><div class='card' style='--i:url(img/ucadL.jpg)'><div class='reverso'><h3>UCAD</h3><p><a href='doc/UCAD/DiplomadoJava.pdf'>Java</a></p></div></div><div class='card' style='--i:url(img/bancoppelL.jpg)'><div class='reverso'><h3>BanCoppel</h3><p><a href='doc/BANCOPPEL/Certificado_de_PLD_.pdf'>Prevención de lavado de dinero</a></p><p><a href='doc/BANCOPPEL/Certificado_de_PLD_Remesas.pdf'>Prevención de lavado de dinero en remesas</a></p><p><a href='doc/BANCOPPEL/Certificado_de_Biometra_Facial.pdf'>Biometria facial</a></p><p><a href='doc/BANCOPPEL/Certificado_de_Cmo_actuar_en_caso_de_asalto_o_intimidacin.pdf'>Como actuar en caso de asalto o intimidacion</a></p><p><a href='doc/BANCOPPEL/Certificado_de_Cdigo_de_tica_.pdf'>Codigo de etica</a></p><p><a href='doc/BANCOPPEL/Certificado_de_Cheques.pdf'>Cheques</a></p><p><a href='doc/BANCOPPEL/Certificado_de_Manejo_de_Efectivo.pdf'>Manejo de efectivo</a></p><p><a href='doc/BANCOPPEL/Certificado_de_Reestructuras_de_Crdito.pdf'>Reestructura de creditos</a></p><p><a href='doc/BANCOPPEL/Certificado_Prevencin_de_Fraudes.pdf'>Prevencios de fraudes</a></p><p><a href='doc/BANCOPPEL/Reporte_de_Operacin_Inusual_ROI.pdf'>Operaciones inucuales</a></p></div></div></div>",
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
