var matriz = [[0,0,0],[0,0,0],[0,0,0]];
var sumas = [0,0,0,0,0,0,0,0];
var ganador = "";

function crear(){
    var div = document.getElementById("div");
    div.innerHTML = "<table id = 'tablero'>";
    limpiar();
    var tablero = document.getElementById("tablero");
    for(let i=1;i<4;i++){
        tablero.innerHTML += "<tr id = '"+i+"'>";
        for(let j=1;j<4;j++){
            document.getElementById(i).innerHTML += "<td><button type = 'button' class = 'tic' onclick = 'marca("+i+","+j+");' id = '"+i+","+j+"'></button>";
        }
    }
}
function marca(a,b){
    let ab = a+","+b;
    let c = document.getElementById(ab);
    c.innerText = "X";
    matriz[a-1][b-1]=1;
    recorrer();
    marcaO();
}
function recorrer(){
    let k = 1;
    sumas = [0,0,0,0,0,0,0,0];

    sumas[0] = matriz[2][0]+matriz[1][1]+matriz[0][2];
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            sumas[k] += matriz[i][j];
        }
        k++;
    }
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            sumas[k] += matriz[j][i];
        }
        k++;
    }
    sumas[7] = matriz[0][0]+matriz[1][1]+matriz[2][2];
    if(verificar()){
        alert("Felicidades a ganado "+ganador);
        crear();
    }
    else{
        console.log(matriz);
        console.log(sumas);

    }
}
function verificar(){
    for(let i=0;i<sumas.length;i++){
        if(sumas[i]==3){
            ganador = "x";
            return true;
        }
        else if(sumas[i]==30){
            ganador = "o";
            return true;
        }
    }
}
function limpiar(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            matriz[i][j]=0;
        }
    }
    for(let i=0;i<sumas.length;i++){
        sumas[i]=0;
    }
}
