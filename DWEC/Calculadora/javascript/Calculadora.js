var operandoa=0;
var operandob=0;
var operacion;
var contador=0;

function init(){
    //Variables:
    var resultado= document.getElementById("resultado");
    var uno= document.getElementById("uno");
    var dos= document.getElementById("dos");
    var tres= document.getElementById("tres");
    var cuatro= document.getElementById("cuatro");
    var cinco= document.getElementById("cinco");
    var seis= document.getElementById("seis");
    var siete= document.getElementById("siete");
    var ocho= document.getElementById("ocho");
    var nueve= document.getElementById("nueve");
    var cero= document.getElementById("cero");
    var suma= document.getElementById("suma");
    var resta= document.getElementById("resta");
    var multiplicacion= document.getElementById("multiplicacion");
    var dvision= document.getElementById("division");
    var reset= document.getElementById("reset");
    var igual= document.getElementById("igual");

    //Eventos:
    uno.onclick=function(e){
        resultado.textContent = resultado.textContent + "1";
        resultado2.textContent = resultado2.textContent + "1";
    }
    dos.onclick=function(e){
        resultado.textContent = resultado.textContent + "2";
        resultado2.textContent = resultado2.textContent + "2";
    }
    tres.onclick=function(e){
        resultado.textContent = resultado.textContent + "3";
        resultado2.textContent = resultado2.textContent + "3";
    }
    cuatro.onclick=function(e){
        resultado.textContent = resultado.textContent + "4";
        resultado2.textContent = resultado2.textContent + "4";
    }
    cinco.onclick=function(e){
        resultado.textContent = resultado.textContent + "5";
        resultado2.textContent = resultado2.textContent + "5";
    }
    seis.onclick=function(e){
        resultado.textContent = resultado.textContent + "6";
        resultado2.textContent = resultado2.textContent + "6";
    }
    siete.onclick=function(e){
        resultado.textContent = resultado.textContent + "7";
        resultado2.textContent = resultado2.textContent + "7";
    }
    ocho.onclick=function(e){
        resultado.textContent = resultado.textContent + "8";
        resultado2.textContent = resultado2.textContent + "8";
    }
    nueve.onclick=function(e){
        resultado.textContent = resultado.textContent + "9";
        resultado2.textContent = resultado2.textContent + "9";
    }
    cero.onclick=function(e){
        resultado.textContent = resultado.textContent + "0";
        resultado2.textContent = resultado2.textContent + "0";
    }
    reset.onclick=function(e){
        resetear();
    }
    suma.onclick=function(e){
        if(contador>=1){
            switch(operacion){
                case "+":
                    operandoa = operandoa + parseFloat(resultado.textContent);
                    limpiar();
                    break;
                case "-":
                    operandoa = operandoa - parseFloat(resultado.textContent);
                    limpiar();
                    break;
                case "*":
                    operandoa = operandoa * parseFloat(resultado.textContent);
                    limpiar();
                    break;
                case "/":
                    operandoa = operandoa / parseFloat(resultado.textContent);
                    limpiar();
                    break;
            }
            operacion="+";
            resultado2.textContent = resultado2.textContent + "+";
        }else{
            resultado2.textContent = resultado2.textContent + "+";
            operandoa = parseFloat(resultado.textContent);
            contador=contador+1;
            operacion = "+";
            limpiar();
        }
    }
    resta.onclick=function(e){
        if(contador>=1){
            switch(operacion){
                case "+":
                    operandoa = operandoa + parseFloat(resultado.textContent);
                    limpiar();
                    break;
                case "-":
                    operandoa = operandoa - parseFloat(resultado.textContent);
                    limpiar();
                    break;
                case "*":
                    operandoa = operandoa * parseFloat(resultado.textContent);
                    limpiar();
                    break;
                case "/":
                    operandoa = operandoa / parseFloat(resultado.textContent);
                    limpiar();
                    break;
            }
            operacion="-";
            resultado2.textContent = resultado2.textContent + "-";
        }else{
            resultado2.textContent = resultado2.textContent + "-";
            operandoa = parseFloat(resultado.textContent);
            contador=contador+1;
            operacion = "-";
            limpiar();
        }
    }
    multiplicacion.onclick=function(e){
        if(contador>=1){
            switch(operacion){
                case "+":
                    operandoa = operandoa + parseFloat(resultado.textContent);
                    limpiar();
                    break;
                case "-":
                    operandoa = operandoa - parseFloat(resultado.textContent);
                    limpiar();
                    break;
                case "*":
                    operandoa = operandoa * parseFloat(resultado.textContent);
                    limpiar();
                    break;
                case "/":
                    operandoa = operandoa / parseFloat(resultado.textContent);
                    limpiar();
                    break;
            }
            operacion="*";
            resultado2.textContent = resultado2.textContent + "x";
        }else{
            resultado2.textContent = resultado2.textContent + "x";
            operandoa = parseFloat(resultado.textContent);
            contador=contador+1;
            operacion = "*";
            limpiar();
        }
    }
    division.onclick=function(e){
        if(contador>=1){
            switch(operacion){
                case "+":
                    operandoa = operandoa + parseFloat(resultado.textContent);
                    limpiar();
                    break;
                case "-":
                    operandoa = operandoa - parseFloat(resultado.textContent);
                    limpiar();
                    break;
                case "*":
                    operandoa = operandoa * parseFloat(resultado.textContent);
                    limpiar();
                    break;
                case "/":
                    operandoa = operandoa / parseFloat(resultado.textContent);
                    limpiar();
                    break;
            }
            operacion="/";
            resultado2.textContent = resultado2.textContent + "/";
        }else{
            resultado2.textContent = resultado2.textContent + "/";
            operandoa = parseFloat(resultado.textContent);
            contador=contador+1;
            operacion = "/";
            limpiar();
        }
    }
    igual.onclick=function(e){
        operandob= parseFloat(resultado.textContent);
        resolver();
    }
}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    resultado2.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
    contador=0;
}

function resolver(){
    var res=0;
    switch(operacion){
        case "+":
            res = operandoa + operandob;
            break;
        case "-":
            res = operandoa - operandob;
            break;
        case "*":
            res = operandoa * operandob;
            break;
        case "/":
            res = operandoa / operandob;
            break;
    }
    resetear();
    resultado.textContent = res;
}