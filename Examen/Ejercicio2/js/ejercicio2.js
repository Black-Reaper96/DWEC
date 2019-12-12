for(var i=0;i<3;i++){
    var element=document.createElement("p");
    element.setAttribute("id","element"+i);
    document.body.appendChild(element);
    element.appendChild(document.createTextNode("Hola mundo, soy el elemento "+i+"."))
}

function eliminarElemento(id){
	imagen = document.getElementById(id);	
	if (!imagen){
		alert("El elemento selecionado no existe");
	} else {
		padre = imagen.parentNode;
		padre.removeChild(imagen);
	}
}

eliminarElemento("element1")