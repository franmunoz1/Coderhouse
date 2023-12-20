// maneras de generar eventos

// 1- addEventListener

const button = document.getElementById("btn")

button.addEventListener("click", saludar)

function saludar() {
    alert("Mensaje de hacer click en el boton")
}

//2- onclick

const button2 = document.getElementById("btn2")

button2.onclick = () => {
    alert("Segundo metodo")
}

//3- codigo en html


// Tipos de eventos

const caja = document.getElementById("caja")

// mouseover y mouseout
caja.onmouseover = () => {
    console.log("Mouse sobre el elemento")
}

caja.onmouseout = () => {
    console.log("Mouse fuera del elemento")
}

caja.onmousemove = () => {
    console.log("Movimiento del mouse sobre la caja")
}

caja.onmousedown = () => {
    console.log("Estas clickeando")
}

caja.onmouseup = () => {
    console.log("No estas clickeando")
}


// Eventos de teclado

const campoTexto = document.getElementById("campoTexto")

campoTexto.onkeydown = () => {
    console.log("Presionaste una tecla")
}


campoTexto.onkeyup = () => {
    console.log("Soltaste una tecla")
}

// Evento change

const change = document.getElementById("change")

change.onchange = () => {
    console.log("Se cambio el elemento a: " + change.value)
}

// Evento texto

const texto = document.getElementById("texto")

texto.oninput = () => {
    console.log(texto.value)
}

// Evento submit

class Cliente {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const arrayClientes = []

const formulario = document.getElementById("formulario")

formulario.onsubmit = (e) => {

    e.preventDefault()

    const nombre = document.getElementById("nombre")
    const apellido = document.getElementById("apellido")

    // verificamos por consola que todo este ok

    console.log("El nombre ingresado es: " + nombre.value)
    console.log("El apellido ingresado es: " + apellido.value)

    // verificamos el array

    const cliente = new Cliente(nombre.value, apellido.value)
    arrayClientes.push(cliente)
    console.log(arrayClientes)

    //reseteo de formulario
    formulario.reset()
}

const mostrarCliente = document.getElementById("mostrarCliente")

arrayClientes.forEach(Cliente => {

    const div = document.createElement("div")

    div.innerHTML = `
                    <p>El usuario es: ${Cliente.nombre}</p>
                    <p>El apellido es: ${Cliente.apellido}</p>
                    <hr>
    
    
    `
    mostrarCliente.appendChild(div)

})






