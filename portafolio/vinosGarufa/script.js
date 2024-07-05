let fs = require('fs');
let buffer = fs.readFile("/datos.txt");
let texto = buffer.toString();


function changeInfo(a){
    let personal =[
        "<div class='card'><h1>Lopez Rosso Cavas</h1><img src='img/01.png' width='40px'><ul><li>Trancoso, Zacatecas.</li><li>Viognier.</li><br><li>$790.00</li></ul></div>",
        "<div class='card'><h1>Lopez Rosso Cavas</h1><img src='img/01.png' width='40px'><ul><li>Trancoso, Zacatecas.</li><li>Viognier.</li><br><li>$790.00</li></ul></div><div class='card'><h1>Lopez Rosso Cavas</h1><img src='img/01.png' width='40px'><ul><li>Trancoso, Zacatecas.</li><li>Viognier.</li><br><li>$790.00</li></ul></div>",
        
    ];
    document.getElementById("informacion").innerHTML = personal[a];
}
function crear(){
    let etiquetas = ["7","8","9","/","4","5","6","x","1","2","3","-","0","=","CE","+"];
    var calculadora = document.getElementById("calculadora"); 
    valor = 0.0;
    signo = "";
    calculadora.innerHTML = "<input type='text' class = 'pantalla' id='pantallaDos'><br>";
    calculadora.innerHTML += "<input type='text' class = 'pantalla'id='pantalla'><br>";
    calculadora.innerHTML += "<div id='botones'></div>";
    var botones = document.getElementById("botones");

    for(let i=0;i<etiquetas.length;i++){
        if(etiquetas[i]=="+"){
            botones.innerHTML += "<button type = 'button' class = 'opera' onclick = 'almacena(1);' id = '"+etiquetas[i]+"'>"+etiquetas[i]+"</button>";
        }
        else if(etiquetas[i]=="-"){
            botones.innerHTML += "<button type = 'button' class = 'opera' onclick = 'almacena(2);' id = '"+etiquetas[i]+"'>"+etiquetas[i]+"</button>";
        }
        else if(etiquetas[i]=="/"){
            botones.innerHTML += "<button type = 'button' class = 'opera' onclick = 'almacena(3);' id = '"+etiquetas[i]+"'>"+etiquetas[i]+"</button>";
        }
        else if(etiquetas[i]=="x"){
            botones.innerHTML += "<button type = 'button' class = 'opera' onclick = 'almacena(4);' id = '"+etiquetas[i]+"'>"+etiquetas[i]+"</button>";
        }
        else if(etiquetas[i]=='CE'){
            botones.innerHTML += "<button type = 'button' onclick = 'borrar();' id = '"+etiquetas[i]+"'>"+etiquetas[i]+"</button>";
        }
        else if(etiquetas[i]=='='){
            botones.innerHTML += "<button type = 'button' onclick = 'resultado();' id = 'res'>"+etiquetas[i]+"</button>";
        }
        else{
            botones.innerHTML += "<button type = 'button' onclick = 'mostrar("+etiquetas[i]+");' id = '"+etiquetas[i]+"'>"+etiquetas[i]+"</button>";

        }
    }
}