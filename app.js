let amigos = [];

function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
}

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let amigo = input.value.trim();

    if (!validarEntrada(amigo)) return;
    
    amigos.push(amigo);
    actualizarLista();
    limpiarCaja(input);
    asignarTextoElemento('#mensajeError', '');
    asignarTextoElemento('#resultado', '');
    document.getElementById('sortear').removeAttribute('disabled');


}

function validarEntrada(amigo) {
    if (amigo === "") {
        asignarTextoElemento('#mensajeError', 'Por favor, ingrese un nombre válido.');
        return false;
    }
    if (!isNaN(amigo)) {
        asignarTextoElemento('#mensajeError', 'No se permiten números. Ingrese un nombre válido.');
        return false;
    }
    if (amigos.includes(amigo)) {
        asignarTextoElemento('#mensajeError', 'Este amigo ya ha sido agregado.');
        return false;
    }
    return true;

}

function actualizarLista() {
    asignarTextoElemento('#listaAmigos', amigos.length ? `<ul>${amigos.map(amigo => `<li>${amigo}</li>`).join('')}</ul>` : '');
}

function limpiarCaja(input) {
    input.value = '';
}

function sortearAmigo() {
    if (amigos.length < 2) {
        asignarTextoElemento('#resultado', 'Debe haber al menos 2 amigos para realizar el sorteo.');
        return;
    }
    
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    asignarTextoElemento('#resultado', `El amigo sorteado es: ${amigoSorteado}`);
    document.getElementById('nuevoJuego').removeAttribute('disabled');
    document.querySelector('#sortear').setAttribute('disabled','true');


}

function juegoNuevo() {
    amigos = [];
    actualizarLista();
    asignarTextoElemento('#resultado', '');
    asignarTextoElemento('#mensajeError', '');
    document.querySelector('#sortear').setAttribute('disabled','true');
    document.querySelector('#nuevoJuego').setAttribute('disabled','true');

}
