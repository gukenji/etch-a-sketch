//  Criando Canvas   
const canvasSize = document.getElementById('pixels-range');
const canvasSpace = document.querySelector('div.canvas');


function createCanvas (size){
document.querySelector('.canvas').innerHTML = ''
for (i = 0; i< size; i++){
    const column = document.createElement("div");
    column.className = "canvas-column";
    for (j=0; j < size; j++){
        const cell = document.createElement("div");
        cell.className = "canvas-cell";
        column.appendChild(cell);
        cell.onmouseover = function(){
            this.style.background = "black"; 
    }
    canvasSpace.appendChild(column);
    }
}
}

// Pegar status do toggle
const statusEraser = document.querySelector('.check-eraser');
const statusRGB = document.querySelector('.check-rgb');


//Alterando para modo borracha
statusEraser.addEventListener("click",function(){
    if(statusEraser.checked==true){
    console.log(this.checked);
    statusRGB.checked=false;
    var eraser = document.querySelectorAll('.canvas-cell');
    for(i=0; i<eraser.length;i++){
        (function(i) {
            eraser[i].onmouseover = function() {
            this.style.background='white';
        }
    }(i));
    }
}else{
    console.log(this.checked);
    var cell = document.querySelectorAll('.canvas-cell');
    for (i=0 ; i <cell.length;i++){
        (function(i) {
            cell[i].onmouseover = function() {
            this.style.background='black';
        }
    }(i)); 
    }
}}
);


// Alterando para modo RGB
statusRGB.addEventListener("click",function(){
    console.log(this.checked);
    statusEraser.checked=false;
    var cell = document.querySelectorAll('.canvas-cell');
    if(statusRGB.checked==true){
    for(i=0; i<cell.length;i++){
        if (i%10==0){
            (function(i) {
                cell[i].onmouseover = function() {
                this.style.background='black';
            }
        }(i));
        }else {
        (function(i) {
            cell[i].onmouseover = function() {
            this.style.background= (function(){
                return '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
            }());
        }
    }(i));
    }}
} else if (statusRGB.checked==false && statusEraser.checked == false){
    for(i=0; i<cell.length;i++){
        (function(i) {
            cell[i].onmouseover = function() {
            this.style.background='black';
        }
    }(i));
    }
}
})


//Limpar Canvas
    function clearCanvas (){
        var pixels = document.querySelector('input.pixels-range').value;
        createCanvas(pixels);
        var cell = document.querySelectorAll('.canvas-cell');
        if(statusRGB.checked==true){
            for(i=0; i<cell.length;i++){
                if (i%10==0){
                    (function(i) {
                        cell[i].onmouseover = function() {
                        this.style.background='black';
                    }
                }(i));
                }else {
                (function(i) {
                    cell[i].onmouseover = function() {
                    this.style.background= (function(){
                        return '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
                    }());
                }
            }(i));
            }}
        } else if (statusRGB.checked==false && statusEraser.checked == false){
            for(i=0; i<cell.length;i++){
                (function(i) {
                    cell[i].onmouseover = function() {
                    this.style.background='black';
                }
            }(i));
            }
        } else{
            statusEraser.checked=false;
        }
    }

