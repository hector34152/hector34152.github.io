var valor;
var signo = "";

function crear(){
    let etiquetas = ["7","8","9","/","4","5","6","x","1","2","3","-","0","=","CE","+",];
    var calculadora = document.getElementById("calculadora"); 
    valor = 0.0;
    signo = "";
    calculadora.innerHTML = "<input type='text' class = 'pantalla' id='pantallaDos'><br>";
    calculadora.innerHTML += "<input type='text' class = 'pantalla'id='pantalla'><br>";

    for(let i=0;i<etiquetas.length;i++){
        if(etiquetas[i]=="+"){
            calculadora.innerHTML += "<button type = 'button' class = 'opera' onclick = 'almacena(1);' id = '"+etiquetas[i]+"'>"+etiquetas[i]+"</button>";
        }
        else if(etiquetas[i]=="-"){
            calculadora.innerHTML += "<button type = 'button' class = 'opera' onclick = 'almacena(2);' id = '"+etiquetas[i]+"'>"+etiquetas[i]+"</button>";
        }
        else if(etiquetas[i]=="/"){
            calculadora.innerHTML += "<button type = 'button' class = 'opera' onclick = 'almacena(3);' id = '"+etiquetas[i]+"'>"+etiquetas[i]+"</button>";
        }
        else if(etiquetas[i]=="x"){
            calculadora.innerHTML += "<button type = 'button' class = 'opera' onclick = 'almacena(4);' id = '"+etiquetas[i]+"'>"+etiquetas[i]+"</button>";
        }
        else if(etiquetas[i]=='CE'){
            calculadora.innerHTML += "<button type = 'button' onclick = 'borrar();' id = '"+etiquetas[i]+"'>"+etiquetas[i]+"</button>";
        }
        else if(etiquetas[i]=='='){
            calculadora.innerHTML += "<button type = 'button' onclick = 'resultado();' id = 'res'>"+etiquetas[i]+"</button>";
        }
        else{
            calculadora.innerHTML += "<button type = 'button' onclick = 'mostrar("+etiquetas[i]+");' id = '"+etiquetas[i]+"'>"+etiquetas[i]+"</button>";

        }
    }
}
function mostrar(a){
    var pantalla = document.getElementById("pantalla");
    var pantallaDos = document.getElementById("pantalla");
    pantalla.value += a;
}
function borrar(){
    signo = "";
    valor = 0;
    pantalla.value = "";
    pantallaDos.value = "";
}
function resultado(){
    
    pantallaDos.value = valor;
    switch(signo){
        case "+": pantalla.value = valor + parseFloat(pantalla.value);signo = ""; break;
        case "-": pantalla.value = valor - parseFloat(pantalla.value);signo = ""; break;
        case "/": pantalla.value = valor / parseFloat(pantalla.value);signo = ""; break;
        case "x": pantalla.value = valor * parseFloat(pantalla.value);signo = ""; break;
    }
    valor = parseFloat(pantalla.value);
}
function almacena(a){
    if(valor==0){
        valor = parseFloat(pantalla.value);
        switch(a){
            case 1: signo = "+"; break;
            case 2: signo = "-"; break;
            case 3: signo = "/"; break;
            case 4: signo = "x"; break;
        }
        pantalla.value = "";    
    }
    else{
        resultado();
        valor = parseFloat(pantalla.value);
        pantalla.value = "";
        switch(a){
            case 1: signo = "+"; break;
            case 2: signo = "-"; break;
            case 3: signo = "/"; break;
            case 4: signo = "x"; break;
        }
    }
    pantallaDos.value = valor;
}