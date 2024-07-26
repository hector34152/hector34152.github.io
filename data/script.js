let menuC = [
  {name:"Vinos Zacatecanos",label:"vinos_Zacatecanos"},
  {name:"Vinos Mexicanos",label:"vinos_mexicanos"},
  {name:"Vinos Argentinos",label:"vinos_argentinos"},
  {name:"Vinos Chilenos",label:"vinos_chilenos"},
  {name:"Vinos Españoles",label:"vinos_españoles"},
  {name:"Vinos Franceses",label:"vinos_franceses"},
  {name:"Vinos Italianos",label:"vinos_italianos"},
  {name:"Vinos Blancos",label:"vinos_blancos"},
  {name:"Vinos Rosados",label:"vinos_rosados"},
  {name:"Vinos Espumosos",label:"vinos_espumosos"},
]
let zac = [
  {name :"Lopez Rosso",label:"LR"},
  {name :"Tierra Adentro",label:"TA"},
  {name :"Viento Negro",label:"VN"}
]
function crear(){
  console.log(botella);
  console.log(typeof(botella));
    document.getElementById("body").innerHTML = `<link rel="stylesheet" href="./styles/mainCategoria.css"><a id="configuracion" onclick="validar()"><img src="./img/configuraciones.png"></a>
<header><img src="./img/logoGarufa.png"></header><main id="main"></main>`;
    document.getElementById("body").innerHTML += `<div class="side" id="A"></div>`;
    for(let i=0;i<menuC.length;i++){
        document.getElementById("main").innerHTML += `<div onclick="categoria(`+i+`)">`+menuC[i].name+`</div>`;
    }
    document.getElementById("body").innerHTML += `<div class="side" id="B"></div>`;
}
function validar(){
  if(prompt("Ingresa el pin correcto ")==1998){
    window.open('../data/changes.html');
  }
  else{
    alert("incorrecto");
  }
}
function botellas(a,b){
  document.getElementById("body").innerHTML = 
  `<link rel="stylesheet" href="./styles/mainBotellas.css">
  <style> main{grid-template-columns: repeat(`+(a==0 ? botella[a][b].length : botella[a].length)+`,30%)}</style>
  <header><p>< src="./img/logoGarufa.png"><stronge>`+(a==0 ? zac[b].name : menuC[a].name )+`</stronge><a onclick="`+(a==0 ? "categoria(0)" : "crear()")+`">< src="./img/volver.png"></a></p></header>
  <main id ="main">`;
  for(let i=0;i<(a==0 ?botella[a][b].length:botella[a].length);i++){
    if((a==0 ?botella[a][b][i].flag:botella[a][i].flag)==true){
      document.getElementById("main").innerHTML += `
      <div class = "card"><p onclick="info(`+a+`,`+b+`,`+i+`)"><img src='./img/`+menuC[a].label+(a==0 ? "/"+zac[b].label+`/0`+(i+1) : "/0"+(i+1))+`.png'></p>
      <div class = "info">
        <h2 class = "h`+i+` active" onclick="this.classList.add('remove');this.classList.remove('active');document.querySelector('.lista`+i+`').classList.remove('remove')">`+(a==0 ?botella[a][b][i].nombre:botella[a][i].nombre)+`</h2>
      <div class = "lista`+i+` remove" onclick = "this.classList.add('remove');this.classList.remove('active');document.querySelector('.h`+i+`').classList.add('active')">
        <a class = "precio"><img class="icon" src="./img/botella.png"><p>(750ml) <stronge>`+(a==0 ?botella[a][b][i].precioA:botella[a][i].precioA)+`<stronge><br></p></a>
        `+((a==0 ?botella[a][b][i].precioB:botella[a][i].precioB)!="no" ? `<a class = "precio"><img class="icon" src="./img/copa.png"><p>(375ml)  <stronge>`+(a==0 ?botella[a][b][i].precioB:botella[a][i].precioB)+`<stronge></p></a>`: "")+`
      </div>
      </div>`;
    }
  }
}
function categoria(a){
  if(parseInt(a)==0){
    document.getElementById("body").innerHTML = 
    `<link rel="stylesheet" href="./styles/mainZac.css"><header><p><img src="./img/logoGarufa.png"><stronge>`+menuC[a].name+`</stronge><a onclick="crear()"><img src="./img/volver.png"></a></p></header><main id ="main">`;
    for(let i=0;i<zac.length;i++){
      document.getElementById("main").innerHTML += 
      `<div class = "card"><p onclick = "botellas(`+a+`,`+i+`)"><img src='./img/vinos_Zacatecanos/0`+(i+1)+`.png'></p>`;
    }
  }
  else{
    botellas(a,1);
  }  
}
function info(a,b,c){
  document.getElementById("body").innerHTML = `
    <link rel="stylesheet" href="./styles/mainVino.css">
    <header>  
      <p><a onclick=`+(a==0 ? "botellas("+a+","+b+")" : "botellas("+a+",1)")+`><img src="./img/volver.png"></a><img src="./img/logoGarufa.png"><strong>`+(a==0 ? botella[a][b][c].nombre : botella[a][c].nombre)+`</strong></p>
    </header>
    <main>
    <div class="card">
        <ul>
            <li><p><strong>Uva: </strong>`+(a==0 ? botella[a][b][c].uva : botella[a][c].uva)+`</p></li>
            <li><p><strong>Aroma: </strong>`+(a==0 ? botella[a][b][c].aroma : botella[a][c].aroma)+`</p></li>
            <li><p><strong>Maridaje: </strong>`+(a==0 ? botella[a][b][c].maridaje : botella[a][c].maridaje)+`</p></li>
            <li><p><strong>Gusto: </strong>`+(a==0 ? botella[a][b][c].gusto : botella[a][c].gusto)+`</p></li>
            <li><p><strong>Origen: </strong>`+(a==0 ? botella[a][b][c].origen : botella[a][c].origen)+`</p></li>
        </ul>
        <p><img src="./img`+(a==0 ? "/vinos_Zacatecanos/"+zac[b].label+"/" : "/"+menuC[a].label+"/")+`0`+(c+1)+`.png"></p>
    </div>
</main>
  `;
}
var botella = [
  [//Zacatecanos
    [//Lopez Rosso
      {
        nombre: "Merlot",
        precioA: "$1,320.00",
        precioB: "no",
        flag: true,
        uva:"Merlot.",
        aroma:"Mezcla aromatica a roble, cacao, hoja de tababaco, ciruelas, moras, grosella, frutos rojos, menta y pimienta.",
        maridaje:"Disfrutar con platillos italianos como pasta al pomodoro y pizzas ligeras, así como en salsas suaves, hamburguesas y tablas de quesos maduros.",
        gusto:"Dulsor 3/5, Acidez 3/5, Cuerpo 4/5, Alcohol 4/5, Taninos 3/5. ",
        origen:"Valle de las Arsinas, Zacatecas, México."
      },
      {
        nombre: "Cabernet Franc",
        precioA: "$1,450.00",
        precioB: "no",
        flag: true,
        uva:"Cabernet Franc.",
        aroma:"Mezcla aromatica a romero, cuero, anis, cafe, mora azul, zarzamora, frutos rojos y levadura.",
        maridaje:"Disfrutar con platillos especiados como pasta al pesto o sirloin al romero. Asimismo marida con botanas como anchoas, angulas, alubias y pimientos.",
        gusto:"Dulsor 3/5, Acidez 4/5, Cuerpo 3/5, Alcohol 3/5, Taninos 4/5. ",
        origen:"Valle de las Arsinas, Zacatecas, México."
      },
      {
        nombre: "Viognier",
        precioA: "$790.00",
        precioB: "no",
        flag: true,
        uva:"Viognier.",
        aroma:"Mezcla aromatica a gardenia, nectar, manzana verde, toronja, pera y piña.",
        maridaje:"Disfrutar con platillos que armonicen con su acidez como platillos mexicanos de mar con cítricos, tiraditos y ceviches. Apto para degustarse solo.",
        gusto:"Dulsor 3/5, Acidez 4/5, Cuerpo 4/5, Alcohol 3/5.",
        origen:"Valle de las Arsinas, Zacatecas, México."
      },
    ],
    [//Tierra Adentro
      {
        nombre: "Blend Trivarietal",
        precioA: "$1,020.00",
        precioB: "$260.00",
        flag: true,
        uva:"Syrah(50%), Merlot(40%) y Tempranillo(10%).",
        aroma:"Intensidad aromática bien marcada de frutos maduros, cacao, vainilla y toques ahumados.",
        maridaje:"Su sólida estructura, le permite acompañar las carnes rojas, el cabrito, el cordero, las pastas, los quesos y evidentemente a la comida mexicana.",
        gusto:"Se pueden percibir los taninos maduros y bien ensamblados, acidez amalgamada con un final largo y claro. Se identifica su percepción olfativa, reflejando la combinación de los frutos frescos y la solidez de su vivaz estructura, vino capaz de aun evolucionar muy bien durante los próximos 3 a 7 años.",
        origen:"Campo Real, Zacatecas, México."
      },
      {
        nombre: "Blend Trivarietal 1/2",
        precioA: "$520.00",
        precioB: "no",
        flag: true,
        uva:"Syrah(50%), Merlot(40%) y Tempranillo(10%).",
        aroma:"Intensidad aromática bien marcada de frutos maduros, cacao, vainilla y toques ahumados.",
        maridaje:"Su sólida estructura, le permite acompañar las carnes rojas, el cabrito, el cordero, las pastas, los quesos y evidentemente a la comida mexicana.",
        gusto:"Se pueden percibir los taninos maduros y bien ensamblados, acidez amalgamada con un final largo y claro. Se identifica su percepción olfativa, reflejando la combinación de los frutos frescos y la solidez de su vivaz estructura, vino capaz de aun evolucionar muy bien durante los próximos 3 a 7 años.",
        origen:"Campo Real, Zacatecas, México."
      },
      {
        nombre: "Mezcla Bordelesa",
        precioA: "$1,090.00",
        precioB: "$275.00",
        flag: true,
        uva:"Cabernet Sauvignon(65%), Malbec(25%) y Merlot(10%).",
        aroma:"Aromas que van del café a la vainilla, regaliz y canela.",
        maridaje:"Le permite acompañar carnes rojas, cabrito, cordero, pastas, quesos y chiles en nogada.",
        gusto:"Buen cuerpo, acidez balanceada, taninos maduros y aterciopelados. Final largo, tostado, canela y chocolate amargo.",
        origen:"Campo Real, Zacatecas, México."
      },
      {
        nombre: "Mezcla Bordelesa 1/2",
        precioA: "$575.00",
        precioB: "no",
        flag: true,
        uva:"Cabernet Sauvignon(65%), Malbec(25%) y Merlot(10%).",
        aroma:"Aromas que van del café a la vainilla, regaliz y canela.",
        maridaje:"Le permite acompañar carnes rojas, cabrito, cordero, pastas, quesos y chiles en nogada.",
        gusto:"Buen cuerpo, acidez balanceada, taninos maduros y aterciopelados. Final largo, tostado, canela y chocolate amargo.",
        origen:"Campo Real, Zacatecas, México."
      },
      {
        nombre: "Merlot",
        precioA: "$1,360.00",
        precioB: "$350.00",
        flag: true,
        uva:"Merlot.",
        aroma:"Con un aroma franco e intenso, se perciben en el los frutos rojos maduros, coco, vainilla y pimientos verdes.",
        maridaje:"Su sólida estructura, le permite acompañar las carnes rojas, cabrito y cordero, pollo a la ciruela, pastas en base de hongos.",
        gusto:"Ataque suave, acidez balanceada, presencia de frutos rojos maduros, vainilla, notas balsámicas como el mentol.",
        origen:"Campo Real, Zacatecas, México."
      },
      {
        nombre: "Syrah",
        precioA: "$1,360.00",
        precioB: "no",
        flag: true,
        uva:"Syrah.",
        aroma:"Especias, moras negras, violetas, tabaco, cacao, café tostado.",
        maridaje:"Rissotto de hongos, cortes añejados, lomo de cerdo y pork belly.",
        gusto:"Frutos negros, compotas, regaliz, buena acidez, estructurado, taninos pulidos y elegantes, permanencia media.",
        origen:"Campo Real, Zacatecas, México."
      },
      {
        nombre: "Malbec",
        precioA: "$1,360.00",
        precioB: "$350.00",
        flag: true,
        uva:"Malbec.",
        aroma:"Con un aromas a frutos negros,  flores como violetas, de gran intensidad, se perciben la ciruela y la cereza con notas de madera.",
        maridaje:"Lechon, cortes grasos y quesos suaves.",
        gusto:"Tanino pulido, acidez balanceada, notas a frutos negros, flores, café y vainilla. Final largo con notas ligeramente ahumadas.",
        origen:"Campo Real, Zacatecas, México."
      },
      {
        nombre: "Malbec 1/2",
        precioA: "$730.00",
        precioB: "no",
        flag: true,
        uva:"Malbec.",
        aroma:"Con un aromas a frutos negros,  flores como violetas, de gran intensidad, se perciben la ciruela y la cereza con notas de madera.",
        maridaje:"Lechon, cortes grasos y quesos suaves.",
        gusto:"Tanino pulido, acidez balanceada, notas a frutos negros, flores, café y vainilla. Final largo con notas ligeramente ahumadas.",
        origen:"Campo Real, Zacatecas, México."
      },
      {
        nombre: "Gran Reserva",
        precioA: "$3,200.00",
        precioB: "no",
        flag: true,
        uva:"Malbec, Cabernet Suavignon.",
        aroma:"Aroma franco e intenso, se perciben los frutos rojos, grosellas, moras y se aprecian los frutos secos tales como almendras y nueces.Se percibe un fino bouquet con notas de roble, cacao, vainilla, café tostado, caramelo y tabaco.",
        maridaje:"Su sólida estructura, le permite acompañar las carnes rojas, el cabrito y el cordero, las pastas, los quesos y decididamente a la comida mexicana.",
        gusto:"Se consolida la apreciación olfativa y resalta en el paladar, una sensación cálida, acidez suave, con taninos sedosos y aterciopelados. Bien definidos, con una textura noble, tersa y evolucionada se perciben los frutos secos, roble, café tostado, tabaco, cacao, y caramelo que se mesclan de manera sencilla y vigorosa. Es un vino equilibrado, con un retrogusto largo y agradable. Su un potencial de guarda es de un mínimo de 7 años.",
        origen:"Campo Real, Zacatecas, México."
      },
      {
        nombre: "Merlot Rosado",
        precioA: "$600.00",
        precioB: "no",
        flag: true,
        uva:"Merlot.",
        aroma:"Aroma franco e intenso, se perciben los frutos rojos, grosellas, moras y se aprecian los frutos secos tales como almendras y nueces.Se percibe un fino bouquet con notas de roble, cacao, vainilla, café tostado, caramelo y tabaco.",
        maridaje:"Ensalada o entradas de betabel, pescados, mariscos y platillos confitados o caramelizados, platillos mexicanos como chalupas en salsa verde y postres.",
        gusto:"Equilibrado, armonioso, que aporta frescura, llena de fruta la boca con presistencia y volumen, fácil de beber y con un amplio espectro de maridaje.",
        origen:"Campo Real, Zacatecas, México."
      }
    ],
    [//Viento Negro
      {
        nombre: "Viento negro",
        precioA: "$600.00",
        precioB: "no",
        flag: true,
        uva:"Cabernet Sauvinong, Cabernet Franc y Merlot.",
        aroma:"Una mezcla de frutos rojos y negros; cerezas y ciruelas, y ligeros toques de roble tostado, serán base aromática de este ensamble. ",
        maridaje:"Pastas con salsa de tomate, quesos semi-maduros, carnes magras y adobados.",
        gusto:"Textura amable y delicada. Acidez media, una gran nota de mentoles y frescura te harán querer probar más.",
        origen:"Zacatecas, México."
      },
      {
        nombre: "Oak Reserve",
        precioA: "$600.00",
        precioB: "no",
        flag: true,
        uva:"Cabernet Sauvinong, Petit Verdot y Cabernet Franc.",
        aroma:"Una mezcla de frutos rojos y negros; cerezas y ciruelas, y ligeros toques de roble tostado, serán base aromática de este ensamble.",
        maridaje:"Carnes potentes en sabor y estructura, postres a base de chocolate, quesos maduros y moles.",
        gusto:"Textura amable y delicada. Acidez media, una gran nota de mentoles y frescura te harán querer probar más.",
        origen:"Zacatecas, México."
      }
    ]
  ],
  [//Mexicanos
      {
          nombre: "Domecq XA",
          precioA: "$405.00",
          precioB: "$105.00",
          flag: true,
          uva:"Cabernet Sauvignon y Greanache.",
          aroma:"Aroma a frutos rojos como moras, cerezas y ciruelas, mezclados con vainilla y chocolate amargo.",
          maridaje:"Ideal para tomar solo o acompañar con carne asada, quesos suaves, tacos y pizza.",
          gusto:"Fresco y vivaz, reafirmando los frutos rojos en la boca, con final medio, agradable al paladar. ",
          origen:"Valle de Guadalupe, Baja california, México."
        },
        {
          nombre: "Domecq XA 1/2",
          precioA: "$228.00",
          precioB: "no",
          flag: true,
          uva:"Cabernet Sauvignon y Greanache.",
          aroma:"Aroma a frutos rojos como moras, cerezas y ciruelas, mezclados con vainilla y chocolate amargo.",
          maridaje:"Ideal para tomar solo o acompañar con carne asada, quesos suaves, tacos y pizza.",
          gusto:"Fresco y vivaz, reafirmando los frutos rojos en la boca, con final medio, agradable al paladar. ",
          origen:"Valle de Guadalupe, Baja california, México."
        },
        {
          nombre: "La Cetto Cabernet",
          precioA: "$417.00",
          precioB: "no",
          flag: true,
          uva:"Cabernet Sauvignon.",
          aroma:"Aromas florales, frutos rojos maduros y fondo de notas especiadas.",
          maridaje:"Excelente para acompañar carnes rojas al carbón, a la parrilla o al horno con coccion prolongada, algunos quesos maduros y/o ahumados.",
          gusto:"Sus taninos son maduros y le otorgan suavidad que contrasta con su complejidad.",
          origen:"Valle de Guadalupe, Baja california, México."
        },
        {
          nombre: "La Cetto Nebiolo",
          precioA: "$735.00",
          precioB: "no",
          flag: true,
          uva:"Nebiolo.",
          aroma:"Aromas complejos a frutos rojos y negros maduros donde destaca el higo y la cereza negra, se perciben aromas a trufa, especias y notas ahumadas.",
          maridaje:"Gastronomía mexicana e italiana, cortes grasos, pastas con salseo especiado.",
          gusto:" Intenso, complejo, frutal y especiado.",
          origen:"Valle de Guadalupe, Baja california, México."
        },
        {
          nombre: "Casa Madero Merlot",
          precioA: "$1,100.00",
          precioB: "no",
          flag: true,
          uva:"Merlot.",
          aroma:"Fresco y complejo con aromas de frutos rojos, bayas negras y flores. Destacan los aromas de rosas rojas, violetas, ciruelas, fresas, nueces y cacao.",
          maridaje:"Enchiladas queretanas, sopa de tortilla, rajas con queso, torta de roast beef, pizza y tacos de cecina.",
          gusto:"Ataque placentero y sedoso, confirmando los aromas frutales, cacao, madera y rosas.Final agradable, terso y completo.",
          origen:"Valle de Parras, Coahuila, México."
        },
        {
          nombre: "Casa Madero Shiraz",
          precioA: "$1,100.00",
          precioB: "no",
          flag: true,
          uva:"Shiraz.",
          aroma:"Aromas intensos de frutas rojas maduras.Jamaica, violetas, chocolate, maderas finas, nueces tostadas y especias como clavo y vainilla.",
          maridaje:"Enmoladas rellenas de pato, asado de bodas, conejo en adobo y tampiqueña.",
          gusto:"De cuerpo medio y jugoso. Confirma sus aromas frutales, especialmente higos, ciruela, granada, con un toque fresco de eucalipto, así como de bosque y especias con un final persistente.",
          origen:"Valle de Parras, Coahuila, México."
        },
        {
          nombre: "Casa Madero Cabernet Suavignon",
          precioA: "$1,100.00",
          precioB: "no",
          flag: true,
          uva:"Cabernet Sauvinong.",
          aroma:"Muy aromático a frutos negros y flores rojas. Destacando las grosellas negras, ciruela negra, arándanos, menta, especias de romero, canela, nuez moscada, vainilla, rosas y geranios.",
          maridaje:"Tacos de chicharrón a las brasas, bife de chorizo, barbacoa de res y tapas de jamón serrano.",
          gusto:"De cuerpo medio, sedoso y elegante. Dominando los aromas de higos, ciruelas, eucalipto, menta, chocolate, maderas finas, café tostado, especias y cuero.",
          origen:"Valle de Parras, Coahuila, México."
        },
        {
          nombre: "Casa Madero 3V",
          precioA: "$1,025.00",
          precioB: "no",
          flag: true,
          uva:"Cabernet Sauvinong, Merlot y Tempranillo.",
          aroma:"Elegante, a frutos rojos y negros, rosas rojas, lavanda y violeta, acompañados de notas especiadas y bosque. Con un fondo de madera tostada, nueces y cacao.",
          maridaje:"Carpaccio de res, tostadas de atún, carnitas de cerdo, bacalao, arrachera, tacos de fideo seco con chorizo, paella y quesos maduros.",
          gusto:"Con buen cuerpo, balanceado con taninos dulces y redondos, con buena jugosidad. Final largo y placentero. Destacando los aromas de eucalipto y flor de jamaica. Al final se confirma su paso en barrica con los recuerdos de almendra, nuez moscada, chocolate y tostado.",
          origen:"Valle de Parras, Coahuila, México."
        },
        {
          nombre: "Balero",
          precioA: "$1,251.00",
          precioB: "no",
          flag: true,
          uva:"Cabernet Sauvignon, Merlot y Syrah.",
          aroma:"En nariz intensidad media con notas a fruta rojas y negras maduras, caramelo y vainilla de la barrica.",
          maridaje:"Es ideal para acompañar carnes rojas, quesos curados y embutidos.",
          gusto:"En boca es un vino tinto seco de cuerpo medio con ricas sensaciones de compota de frutos rojos y negros, balanceado y final medio, muy amigable.",
          origen:"Valle de Guadalupe, Baja California, México."
        },
        {
          nombre: "Santo Tomás Único",
          precioA: "$4,300.00",
          precioB: "no",
          flag: true,
          uva:"Cabernet Sauvignon y Merlot.",
          aroma:"En nariz es goloso y frutal como ciruela, zarzamora, cereza, acompañado de vainilla, chocolate, cedro y pimienta.",
          maridaje:"Lechon en mole negro, briquet tatemado, pasta trufada.",
          gusto:"En boca es maduro y con carácter frutal, destacado por su estructura cremosa, acompañado de una buena acidez, permitiendonos tener un vino de guarda.",
          origen:"Valle de Santo Tomás, Baja California, México."
        },
        {
          nombre: "Entrelineas",
          precioA: "$885.00",
          precioB: "no",
          flag: true,
          uva:"Malbec, Nebbiolo, Syrah.",
          aroma:"Sumamente aromático, impregna la habitación donde se encuentra al momento de abrir; con notas de frambuesa, mora y cereza frescas, se percibe un poco de nota tostada después de dejarlo un tiempo en la copa.",
          maridaje:" Enchiladas potosinas, pollo asado con guarnición de verduras al vapor, enjitomatadas.",
          gusto:"Sumamente aromático, impregna la habitación donde se encuentra al momento de abrir; con notas de frambuesa, mora y cereza frescas, se percibe un poco de nota tostada después de dejarlo un tiempo en la copa.",
          origen:"Valle de Monte Grande, Aguascalientes, México."
        }
  ],
  [//Argentinos
      {
        nombre: "Norton",
        precioA: "$978.00",
        precioB: "$250.00",
        flag: true,
        uva:"Malbec.",
        aroma:"roma de fruta rojas escarchadas tales como ciruelas y grosellas, con toque de regaliz y pimienta negra. Se hace notar también un recuerdo de violetas y tierra mojada.",
        maridaje:"Armoniza muy bien con platillos de carnes rojas ligeramente condimentadas, a la parrilla o guisadas, cerdo asado, pavo, pollo, nopales a las brasas, comida mexicana como y quesos semicurados.",
        gusto:"Buen balance. Delicadas notas especiadas. Taninos de textura muy fina y de carácter dulce ya maduros. Buena concentración, acidez fresca y densidad general media, con amplio y armonioso final.",
        origen:"Mendoza, Argentina."
      },
      {
          nombre: "Trapiche",
          precioA: "$738.00",
          precioB: "no",
          flag: true,
          uva:"	Pinot Noir.",
          aroma:"Presenta Frutos Rojos Como Fresas, Frambuesas Y Cerezas.",
          maridaje:"Pasta, Pizza, Quesos Suaves, Carnes Ligeras.",
          gusto:"En Boca Es Frutal, Fresco, Facil De Beber.",
          origen:"Mendoza, Argentina."
      },
      {
          nombre: "Catena",
          precioA: "$1,618.00",
          precioB: "no",
          flag: true,
          uva:"Malbec.",
          aroma:"Aromas de flores, violetas, frutas rojas y vainilla.",
          maridaje:"Excelente vino para una provoletta  a la brasa, vacio a la parrilla o empanadas argentinas.",
          gusto:"Acidez equilibrada, mineral y taninos elegantes.",
          origen:"Mendoza, Argentina."
      },
      {
          nombre: "Navarro Correas Malbec",
          precioA: "$1,250.00",
          precioB: "no",
          flag: true,
          uva:"Malbec.",
          aroma:"Notas a moras, membrillo y especias.",
          maridaje:"Cordero, carnes de cerdo con salsas intensas y quesos maduros.",
          gusto:"Cuerpo medio y taninos sedosos. Afrutado y de larga persistencia.",
          origen:"Luján de Cuyo, Mendoza, Argentina."
      },
      {
          nombre: "Navarro Correas Colección Privada",
          precioA: "$1,200.00",
          precioB: "no",
          flag: true,
          uva:".",
          aroma:".",
          maridaje:".",
          gusto:".",
          origen:"."
      },
      {
          nombre: "Terrazas",
          precioA: "$1,308.00",
          precioB: "no",
          flag: true,
          uva:".",
          aroma:".",
          maridaje:".",
          gusto:".",
          origen:"."
      }
  ],
  [//Chilenos
      {
          nombre: "Concha y Toro",
          precioA: "$1,308.00",
          precioB: "$95.00",
          flag: true,
          uva:".",
          aroma:".",
          maridaje:".",
          gusto:".",
          origen:"."
      },
      {
          nombre: "Undurraga",
          precioA: "$555.00",
          precioB: "no",
          flag: true,
          uva:".",
          aroma:".",
          maridaje:".",
          gusto:".",
          origen:"."
      },
      {
          nombre: "Santa Digna",
          precioA: "$681.00",
          precioB: "$175.00",
          flag: true,
          uva:".",
          aroma:".",
          maridaje:".",
          gusto:".",
          origen:"."
      },
      {
          nombre: "Casillero del Diablo",
          precioA: "$589.00",
          precioB: "no",
          flag: true,
          uva:".",
          aroma:".",
          maridaje:".",
          gusto:".",
          origen:"."
      },
      {
          nombre: "Casillero del Diablo 1/2",
          precioA: "$382.00",
          precioB: "no",
          flag: true,
          uva:".",
          aroma:".",
          maridaje:".",
          gusto:".",
          origen:"."
      },
      {
          nombre: "Cousino Macul",
          precioA: "$678.00",
          precioB: "no",
          flag: true,
          uva:".",
          aroma:".",
          maridaje:".",
          gusto:".",
          origen:"."
      }
  ],
  [//Españoles
      {
          nombre: "Cune",
          precioA: "$975.00",
          precioB: "no",
          flag: true,
          uva:".",
          aroma:".",
          maridaje:".",
          gusto:".",
          origen:"."
      },
      {
          nombre: "Gran Sangre de Toro",
          precioA: "$900.00",
          precioB: "$230.00",
          flag: true,
          uva:".",
          aroma:".",
          maridaje:".",
          gusto:".",
          origen:"."
      },    {
          nombre: "Sangre de Toro 1/2",
          precioA: "$363.00",
          precioB: "no",
          flag: true,
          uva:".",
          aroma:".",
          maridaje:".",
          gusto:".",
          origen:"."
      },    {
          nombre: "Atrium",
          precioA: "$1,080.00",
          precioB: "$275.00",
          flag: true,
          uva:".",
          aroma:".",
          maridaje:".",
          gusto:".",
          origen:"."
      },    {
          nombre: "La Planta",
          precioA: "$1,170.00",
          precioB: "$295.00",
          flag: true,
          uva:".",
          aroma:".",
          maridaje:".",
          gusto:".",
          origen:"."
      },    {
          nombre: "Marqués de Cáceres",
          precioA: "$1,010.00",
          precioB: "no",
          flag: true,
          uva:".",
          aroma:".",
          maridaje:".",
          gusto:".",
          origen:"."
      },    {
          nombre: "Matarromera",
          precioA: "$2,460.00",
          precioB: "no",
          flag: true,
          uva:".",
          aroma:".",
          maridaje:".",
          gusto:".",
          origen:"."
      },    {
          nombre: "Mas La Plana",
          precioA: "$4,000.00",
          precioB: "no",
          flag: true,
          uva:".",
          aroma:".",
          maridaje:".",
          gusto:".",
          origen:"."
      },
  ],
  [//Franceses
    {
      nombre: "Moet & Chandon",
      precioA: "$3,100.00",
      precioB: "no",
      flag: true,
      uva:"Chardonnay, Pinot Meunier, Pinot Noir.",
      aroma:"Intensidad vibrante de manzana verde, cítricos y matices minerales y florales. Aromas delicadamente vinosos, con toques de tilo y flor de vid.",
      maridaje:"Este champagne se erige como compañero ideal para aperitivos, ostras, mariscos o quesos de pasta blanda. Su versatilidad en maridajes lo convierte en un invitado bienvenido en cualquier ocasión.",
      gusto:"Generoso, con una combinación única de suntuosidad frutal, burbujas finas y vivacidad cítrica. Se distingue por un sabor dominado por notas de bollería y frutas, con gran amplitud en boca y un final amable e intenso.",
      origen:"Épernay, Francia."
    }
  ],
  [//Italianos
    {
      nombre: "Lambrusco Vibrante",
      precioA: "$567.00",
      precioB: "$145.00",
      flag: true,
      uva:"Lambrusco Grasparossa, Malbo gentile.",
      aroma:"Afrutado, con reminiscencias de semilla de durazno.",
      maridaje:"Ideal con platos picantes o condimentados,excelente con platos a base de carne de cerdo, y exquisita repostería.",
      gusto:"Sabor suave y placentero donde la nota dulce es bien balanceada con la acidez y la ligera efervescencia natural.",
      origen:"Emilia Romagna, Italia."
  }
  ],
  [//Blancos
      {
        nombre: "Viognier",
        precioA: "$790.00",
        precioB: "no",
        flag: true,
        uva:"Viognier.",
        aroma:"Mezcla aromatica a gardenia, nectar, manzana verde, toronja, pera y piña.",
        maridaje:"Disfrutar con platillos que armonicen con su acidez como platillos mexicanos de mar con cítricos, tiraditos y ceviches. Apto para degustarse solo.",
        gusto:"Dulsor 3/5, Acidez 4/5, Cuerpo 4/5, Alcohol 3/5.",
        origen:"Valle de las Arsinas, Zacatecas, México."
      },
      {
        nombre: "XA Blanc de Blancs",
        precioA: "$396.00",
        precioB: "$105.00",
        flag: true,
        uva:"Chardonnay, Suavignon Blanc, Chenin.",
        aroma:"Expresivas notas frutales como pera y manzana amarilla y flores blancas.",
        maridaje:"Perfecto para tomar solo como aperitivo, pero también acompañando pescados y mariscos (ceviches, aguachiles y cócteles), incluso un poco picantes. No dejes de probar un taco al pastor con este XA Blanc de Blancs. La comida asiática va de maravilla, al igual que unos quesos suaves, carnes blancas, pastas, paella y postres a base de cítricos.",
        gusto:"Entrada agradable, con untuosidad y frescura, acidez equilibrada y buena persistencia en boca. Las notas dulces lo hacen del agrado de mucha gente y le otorgan versatilidad.",
        origen:"Valle de Guadalupe, Baja California, México."
      },
      {
        nombre: "Monte Xanic",
        precioA: "$396.00",
        precioB: "$105.00",
        flag: true,
        uva:"Chardonnay.",
        aroma:"En nariz es franco y de intensidad media. Los aromas frutales de ciruela amarilla, manzana, plátano, mandarina, flores de azahar y acacia se acompañan de una nota de hinojo y vainilla, lo que le confiere gran complejidad.",
        maridaje:"Risotto, pollo a la brasa, pastas cremosas, aves con salsa de hongos, mariscos a la brasa o salsa de vino y pescados grasos al horno sobre base de patatas y champiñones.",
        gusto:"El ataque en boca es suave. Se presenta como un vino seco, de acidez fresca, vinosidad ligera, constituyendo así un cuerpo firme y de buena estructura. Por la vía retronasal se perciben los aromas detectados por la nariz, sobre todo las flores, las frutas frescas como plátano y piña, y el anís. El equilibrio es armonioso y la persistencia muy larga.",
        origen:"Valle de Guadalupe, Baja California, México."
        },
      {
        nombre: "Casa Madero Blanco",
        precioA: "$840.00",
        precioB: "no",
        flag: true,
        uva:"Chardonay.",
        aroma:"Carácter frutal que evoca guayaba, mango, carambolo, durazno, manzana, piña y pera. Flores blancas, manzanilla y recuerdos de miel.",
        maridaje:"Se recomienda con platillos de cocina oriental (china , vietnamita, japonesa, etc.) con tendencia agridulce o ligeramente picante, cocteles de Mariscos y postres a base de frutos rojos y tropicales.",
        gusto:"Intenso recuerdo frutal y floral. Refrescante y con buena permanencia.",
        origen:"Valle de Parras, Coahuila, México."
      }
  ],
  [//Rosados
      {
          nombre: "La Cetto Zinfandel",
          precioA: "$414.00",
          precioB: "$105.00",
          flag: true,
          uva:"Zinfandel.",
          aroma:"Aromas frutales cómo durazno, frambuesa, fresa y manzana.",
          maridaje:"Ensalada o entradas de betabel, pescados, mariscos y platillos confitados o caramelizados, platillos mexicanos como chalupas en salsa verde y postres.",
          gusto:"Sabor agradable, ligeramente dulce y frutal.",
          origen:"Valle de Guadalupe, Baja California, México."
      },
      {
        nombre: "Merlot Rosado",
        precioA: "$600.00",
        precioB: "no",
        flag: true,
        uva:"Merlot.",
        aroma:"Aroma franco e intenso, se perciben los frutos rojos, grosellas, moras y se aprecian los frutos secos tales como almendras y nueces.Se percibe un fino bouquet con notas de roble, cacao, vainilla, café tostado, caramelo y tabaco.",
        maridaje:"Ensalada o entradas de betabel, pescados, mariscos y platillos confitados o caramelizados, platillos mexicanos como chalupas en salsa verde y postres.",
        gusto:"Equilibrado, armonioso, que aporta frescura, llena de fruta la boca con presistencia y volumen, fácil de beber y con un amplio espectro de maridaje.",
        origen:"Campo Real, Zacatecas, México."
      }
  ],
  [//Espumosos
      {
          nombre: "Moet & Chandon",
          precioA: "$3,100.00",
          precioB: "no",
          flag: true,
          uva:"Chardonnay, Pinot Meunier, Pinot Noir.",
          aroma:"Intensidad vibrante de manzana verde, cítricos y matices minerales y florales. Aromas delicadamente vinosos, con toques de tilo y flor de vid.",
          maridaje:"Este champagne se erige como compañero ideal para aperitivos, ostras, mariscos o quesos de pasta blanda. Su versatilidad en maridajes lo convierte en un invitado bienvenido en cualquier ocasión.",
          gusto:"Generoso, con una combinación única de suntuosidad frutal, burbujas finas y vivacidad cítrica. Se distingue por un sabor dominado por notas de bollería y frutas, con gran amplitud en boca y un final amable e intenso.",
          origen:"Épernay, Francia."
      },
      {
          nombre: "Lambrusco Vibrante",
          precioA: "$567.00",
          precioB: "$145.00",
          flag: true,
          uva:"Lambrusco Grasparossa, Malbo gentile.",
          aroma:"Afrutado, con reminiscencias de semilla de durazno.",
          maridaje:"Ideal con platos picantes o condimentados,excelente con platos a base de carne de cerdo, y exquisita repostería.",
          gusto:"Sabor suave y placentero donde la nota dulce es bien balanceada con la acidez y la ligera efervescencia natural.",
          origen:"Emilia Romagna, Italia."
      }
  ]
  ]
