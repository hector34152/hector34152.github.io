
function changeInfo(a){
    let info = [`<link rel="stylesheet" href="mainZ.css"><header><img src="img/logoGarufa.png" height="100%"></header><main><div class='card' onclick="window.open('vino.html')"><img src='img/TA/01.png' width='40px'><ul><li>Gran Reserva</li><li><img class="icon" src="img/botella-de-vino.png">$3,200.00</li><li><img class="icon" src="img/copa-de-vino.png"></li></ul></div><div class='card'><img src='img/TA/02.png' width='40px'><ul><li>Trivarietal</li><li><img class="icon" src="img/botella-de-vino.png">$1,020.00</li><li><img class="icon" src="img/copa-de-vino.png">$260.00</li></ul></div><div class='card'><img src='img/TA/03.png' width='40px'><ul><li>Syrah</li><li><img class="icon" src="img/botella-de-vino.png">$1,360.00</li><li><img class="icon" src="img/copa-de-vino.png"></li></ul></div><div class='card'><img src='img/TA/04.png' width='40px'><ul><li>Merlot</li><li><img class="icon" src="img/botella-de-vino.png">$1,360.00</li><li><img class="icon" src="img/copa-de-vino.png">$350.00</li></ul></div><div class='card'><img src='img/TA/05.png' width='40px'><ul><li>Malbec</li><li><img class="icon" src="img/botella-de-vino.png">$1,360.00</li><li><img class="icon" src="img/copa-de-vino.png">$350.00</li></ul></div><div class='card'><img src='img/TA/06.png' width='40px'><ul><li>Mezcla Bordelesa</li><li><img class="icon" src="img/botella-de-vino.png">$1,090.00</li><li><img class="icon" src="img/copa-de-vino.png">$275.00</li></ul></div></main><footer>Un momento para compartir</footer>`,
    `0`];
    document.getElementById("body").innerHTML = info[a];
}
function crear(){
    let info = [`<link rel="stylesheet" href="mainM.css"><header><img src="img/logoGarufa.png" height="100%"></header><aside></aside><nav><div onclick="changeInfo(0)">Vinos Zacatecanos</div><div>Vinos Mexicanos</div><div>Vinos Argentinos</div><div>Vinos Chilenos</div><div>Vinos Españoles</div><div>Vinos Franceses</div><div>Vinos Italianos</div><div>Vinos Blancos</div><div>Vinos Rosados</div><div>Vinos Espumosos</div></nav><footer>Un momento para compartir</footer>`,
    `0`];
    document.getElementById("body").innerHTML = info[0];
}
