let memory = 0;

function square(){
    display.value = Math.pow(display.value, 2);
}

function cube(){
    display.value = Math.pow(display.value, 3);
}

function power(){
    display.value += "**";
}

function exp(){
    display.value = Math.exp(display.value);
}

function tenPower(){
    display.value = Math.pow(10, display.value);
}

function ln(){
    display.value = Math.log(display.value);
}

function sin(){
    display.value = Math.sin(display.value);
}

function cos(){
    display.value = Math.cos(display.value);
}

function tan(){
    display.value = Math.tan(display.value);
}

function cuberoot(){
    display.value = Math.cbrt(display.value);
}

function reciprocal(){
    display.value = Math.pow(display.value, -1);
}

function twoPower(){
    display.value = Math.pow(2, display.value);
}

function sinh(){
    display.value = Math.sinh(display.value);
}

function cosh(){
    display.value = Math.cosh(display.value);
}

function tanh(){
    display.value = Math.tanh(display.value);
}

function ceil(){
    display.value = Math.ceil(display.value);
}

function floor(){
    display.value = Math.floor(display.value);
}

function random(){
    display.value = Math.random().toFixed(6);
}

function sign(){
    display.value = Math.sign(display.value);
}

const display=document.getElementById('display');
function appendValue(value){
    display.value += value;
}
function clearDisplay(){
    display.value= "";
}
function deleteLast(){
    display.value= display.value.slice(0,-1)
}
function calculateresult(){
    try{
        display.value=eval(display.value);
    }catch(error){
        display.value='Error';
    }
}



function switchMode(mode){
    const basic = document.querySelector('.basic');
    const scientific = document.querySelector('.scientific');

    if(mode === "scientific"){
  
        scientific.style.display = "grid";
    } else {
        scientific.style.display = "none";
        basic.style.display = "grid";
    }
   
}

/* MEMORY */
function memoryClear(){ memory = 0; }
function memoryAdd(){ memory += Number(display.value); }
function memorySubtract(){ memory -= Number(display.value); }
function memoryRecall(){ display.value = memory; }
