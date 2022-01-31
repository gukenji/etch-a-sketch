//  Criando Canvas   
const canvasSize = document.getElementById('pixels-range');
const canvasSpace = document.querySelector('div.canvas');
const eraserFalse = document.querySelector('.check-eraser');
// window.addEventListener('DOMContentLoaded', ()=>{eraserFalse.checked = false;})

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

//Alterando para modo borracha
const switchStatus = document.querySelector('.check-eraser');
switchStatus.addEventListener("click",function(){
    if(switchStatus.checked==true){
    console.log(this.checked);
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
