
function misEnlaces(numEnlaces){
    var enlaces=document.getElementsByTagName("a");
    var numEnlaces=enlaces.length;B
    document.write("hay "+numEnlaces+" enlaces en esta pagina");
}


function misEnlacesAPrueba(numEnlaces){
    //alert("hola");
    var enlaces=document.getElementsByTagName("a");
    var numEnlaces=enlaces.length;
    var contador=0;
    for(i=0;i<=numEnlaces;i++){
        if(enlaces[i].href=="http://prueba/"){
            contador++;
        }
    }
    document.write("hay "+contador+" enlaces en esta pagina");
}

function hola(){
    alert("Hola");
}