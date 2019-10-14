var a=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
var b=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

function init(){
    //variables:
    var numero= document.getElementById("numero");
    var letra= document.getElementById("letra");
    var boton= document.getElementById("calcular");
    //Eventos:
    boton.onclick=function(e){
        var resultado= parseInt(numero.value)%23;
        for(i=0;i<=a.length;i++){
            if(resultado==a[i]){
                letra.value=b[i];
            }
        }
    }   
}

