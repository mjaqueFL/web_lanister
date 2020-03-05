function aceptar() {
    var opcion = document.contactar.condiciones; //acceso al botón
    if (opcion.checked == true) { //botón seleccionado

    }
    else {  //botón no seleccionado
        alert("Debe aceptar las condiciones");
        return false; //el formulario no se envia
    }
}
