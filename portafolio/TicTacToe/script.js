let matriz = [[0,0,0],[0,0,0],[0,0,0]];
let sumas = [0,0,0,0,0,0,0,0];

function crear(){
    var div = document.getElementById("div");
    div.innerHTML = "<table id = 'tablero'>";
    limpiar();
    var tablero = document.getElementById("tablero");
    for(let i=1;i<4;i++){
        tablero.innerHTML += "<tr id = '"+i+"'>";
        for(let j=1;j<4;j++){
            document.getElementById(i).innerHTML += "<td><button type = 'button' class = 'tic' onclick = 'turno("+i+","+j+");' id = '"+i+","+j+"'></button>";
        }
    }
}
function turno(a,b){
    if(matriz[a-1][b-1]==0){
        matriz[a-1][b-1] = 1;
        verificar();
        bot();
        marca();
    }
}
function bot(){
    let flag = 0;
    let i,j;
    for(i=0;i<sumas.length;i++){
        if(sumas[i]==2 & i<3 & flag==0){
            for(j=0;j<3;j++){
                if(matriz[j][i]==0){
                    matriz[j][i] = 10;
                    flag = 1;
                }
            }
            break;
        }
        else if(sumas[i]==2 & i>3 & i<7 & flag==0){
            for(j=0;j<3;j++){
                if(matriz[(i-6)*-1][j]==0){
                    matriz[(i-6)*-1][j] = 10;
                    flag = 1;
                }
            }
            break;
        }
        else if (sumas[3]==2 & flag == 0){
            for(i=0;i<3;i++){
                for(j=0;j<3;j++){
                    if(matriz[i][i]==0 & flag==0){
                        matriz[i][i]=10;
                        flag = 1;
                    }
                }
            }
        }
        else if(sumas[7]==2 & flag == 0){
            j = 2 
            for(i=0;i<3;i++){
                if(matriz[i][j]==0 & flag==0){
                    matriz[i][j]=10;
                    flag = 1;
                }
                j--
            }
        }
        else if(flag == 0){
            i=Math.floor(Math.random() * 3);
            j=Math.floor(Math.random() * 3);
            if(matriz[i][j]==0 & flag==0){
                matriz[i][j]=10;
                flag = 1;
            }
            break;
        }
    }
}
function marca(){
    for(let i=1;i<4;i++){
        for(let j=1;j<4;j++){
            if(matriz[i-1][j-1]==1){
                let ab = i+","+j;
                let c = document.getElementById(ab);
                c.innerText = "X";
            }
            if(matriz[i-1][j-1]==10){
                let ab = i+","+j;
                let c = document.getElementById(ab);
                c.innerText = "O";
            }
        }
    }
    console.log(matriz);
}
function verificar(){
    let k = 0, l=0;
    sumas = [0,0,0,0,0,0,0,0];
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            sumas[k] += matriz[j][i];
            if(matriz[j][i]==0){
                l++;
            }
        }
        k++;
    }
    k=6;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            sumas[k] += matriz[i][j];
        }
        k--;
    }
    sumas[3] = matriz[0][0]+matriz[1][1]+matriz[2][2];
    sumas[7] = matriz[0][2]+matriz[1][1]+matriz[2][0];
    if(final()){
        alert("Felicidades has ganado ");
        crear();
    }
    else if(l==0){
        alert("Empate");
        crear();
    }
}
function final(){
    for(let i=0;i<sumas.length;i++){
        if(sumas[i]==3){
            ganador = "x";
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
