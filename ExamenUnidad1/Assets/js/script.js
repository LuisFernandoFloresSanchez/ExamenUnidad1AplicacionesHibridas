var NumeroComentarios = [];
var ContadorBotonesComentarios = 1;
var iAcumComentarios = 0;
var oculto = [];

//***************************Declaracion de componentes ********************************
var inputUsuario = document.getElementById("inputUsuario");
var inputDescripcion = document.getElementById("inputDescripcion");
var inputImagen = document.getElementById("inputImagen");
var div1 = document.getElementById("div1");

function guardar() {
	crearBoton();
	 var newPar2 = document.createElement("br");
    div1.appendChild(newPar2);
    crearImagen(inputImagen.value);
    crearParrafos("Usuario:", inputUsuario.value);
    crearParrafos("Descripcion:", inputDescripcion.value);
    crearParrafos("Fecha:", fecha());
    
    crearComentarios();
    crearLinea();
    inputUsuario.value = "";
    inputDescripcion.value = "";
    inputImagen.value = "";
}

function crearParrafos(cadena, informacion) {
    var newPar = document.createElement("p");
    var node = document.createTextNode(cadena + " " + informacion);
    newPar.appendChild(node);
    newPar.setAttribute("class", "parrafos");
    if(cadena == "Usuario:"){
    	newPar.setAttribute("id","usuario");
    }
    if(cadena == "Descripcion:"){
    	newPar.setAttribute("id","descripcion");
    }
    if(cadena == "Fecha:"){
    	newPar.setAttribute("id","fecha");
    }
    var element = document.getElementById("div1");
    element.appendChild(newPar);
}

function crearImagen(url) {
    var newPar = document.createElement("img");
    newPar.setAttribute("src", url);
    newPar.setAttribute("class", "ClaseImagen");
    div1.appendChild(newPar);
}

function crearBoton() {
    var newBoton = document.createElement("button");
    newBoton.setAttribute("onclick", "clickComentarios(" + iAcumComentarios + ")");
    newBoton.setAttribute("class", "botonComentarios");
    newBoton.setAttribute("id", "botonComentarios" + iAcumComentarios);
    var texto = document.createTextNode("Comentarios: (" + 0 + ")");
    newBoton.appendChild(texto);
    div1.appendChild(newBoton);
}

function crearComentarios() {
    //$$$$$$$$$$$$$$$$$$$$$$$$ Creacion de elementos $$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //Nuevo div donde meteremos un parrafo, un input y un boton
    var newDiv = document.createElement("div");
    var newP = document.createElement("p");
    var newInput = document.createElement("input");
    var newButton = document.createElement("button");
    var newDiv2 = document.createElement("div");
    var node = document.createTextNode("Comentarios:");
    newP.appendChild(node);
    var node2 = document.createTextNode("Comentar");
    newButton.appendChild(node2);
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //$$$$$$$$$$$$$$$$$$$$$$$$ Asignación de atributos $$$$$$$$$$$$$$$$$$$$$$$$$$$$
    newDiv.setAttribute("class", "nuevoDiv");
    newDiv2.setAttribute("class", "nuevoDiv2");
    newDiv.setAttribute("id", "divComentarios" + iAcumComentarios);
    newDiv2.setAttribute("id", "divComentarioIndividual" + iAcumComentarios);
    newButton.setAttribute("onclick", "clickComentar(" + iAcumComentarios + ")");
    newP.setAttribute("class", "parrafos");
    newInput.setAttribute("class", "inputComentario");
    newInput.setAttribute("id", "inputComentario" + iAcumComentarios);
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //$$$$$$$$$$$$$$$$$$$$$$$$ Introducir componentes al HTML $$$$$$$$$$$$$$$$$$$$$$$$$$$$
    div1.appendChild(newDiv);
    newDiv.appendChild(newP);
    newDiv.appendChild(newInput);
    newDiv.appendChild(newButton);
    var newPar2 = document.createElement("br");
    div1.appendChild(newPar2);
    div1.appendChild(newPar2);
    newDiv.appendChild(newDiv2);
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //$$$$$$$$$$$$$$$$$$$$$$$$ Operaciones logicas y trabajo de variables y arreglos $$$$$$$$$$$$$$$$$$$$$$$$$$$$
    var divComentarios = document.getElementById("divComentarios" + iAcumComentarios).style.display = "none";
    iAcumComentarios++; //incrementamos la cantidad de comentarios
    oculto.push(false); //mandamos una variable boleana para identificar si el comentario se debe o no ocultar
    NumeroComentarios.push(0); //mandamos en un arreglo la cantidad de comentario de cada 1, (posicion por cada div creado)
}

function crearLinea() {
    var newPar = document.createElement("hr");
    var newPar2 = document.createElement("br");
    div1.appendChild(newPar2);
    div1.appendChild(newPar2);
    div1.appendChild(newPar);
}

function clickComentarios(iComentarios) {
    var divComentarios = document.getElementById("divComentarios" + iComentarios);
    if (oculto[iComentarios] == true) {
        divComentarios.style.display = "none";
        oculto[iComentarios] = false;
    } else {
        divComentarios.style.display = "initial";
        oculto[iComentarios] = true;
    }
}

function clickComentar(iComentarios) {
    // NumeroComentarios++;
    NumeroComentarios[iComentarios] = parseInt(NumeroComentarios[iComentarios]) + 1;
    var botonComentarios = document.getElementById("botonComentarios" + iComentarios).innerHTML = "Comentarios: (" + NumeroComentarios[iComentarios] + ")";
    var inputComentario = document.getElementById("inputComentario" + iComentarios);
    var newP = document.createElement("p");
    var node = document.createTextNode("Comentario: " + inputComentario.value +" Fecha de publicacion = " +fecha());
    newP.appendChild(node);
    var divComentarioIndividual = document.getElementById("divComentarioIndividual" + iComentarios);
    divComentarioIndividual.appendChild(newP);
    inputComentario.value = "";
}

function fecha() {
    var fecha = new Date();
    var fechita = fecha.getDate() + "-" + parseInt(fecha.getMonth() + 1) + "-" + fecha.getFullYear();
    return fechita;
}