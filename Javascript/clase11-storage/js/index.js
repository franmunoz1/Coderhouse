// local storage => setitem

// localStorage.setItem("saludo", "hola chicos")
// localStorage.setItem("booleano", true)
// localStorage.setItem("numero", 1234)

// let saludo = localStorage.getItem("saludo")

// console.log(saludo)

// Ejemplo practico

// function cargarTareas() {
//     let tareas = localStorage.getItem("tareas")

//     if (tareas) {
//         let listaTareas = document.getElementById("listaTareas")
//         listaTareas.innerHTML = tareas;
//     }
// }

// function agregarTarea() {
//     let tareaInput = document.getElementById("tareasInput")
//     let nuevaTarea = tareaInput.value.trim()

//     if (nuevaTarea !== "") {
//         let tareas = localStorage.getItem("tareas") || ""

//         //concatenar nuevas tareas

//         tareas += "<li>" + nuevaTarea + "</li>"

//         //guardar el contenido de nuevas tareas
//         localStorage.setItem("tareas", tareas)

//         //limpiar
//         tareaInput.value = ""
//         cargarTareas()

//     }
// }

// cargarTareas()


// JSON

// stringify

// let persona = {
//     nombre: "fran",
//     edad: 23,
//     ciudad: "cordoba"
// }

// let jsonPersonas = JSON.stringify(persona)

// console.log(jsonPersonas)

// // parse

// let personaParse = JSON.parse(jsonPersonas)
// console.log(personaParse)


// modo oscuro y modo claro

// const BOTON_MODO = document.getElementById("botonModo")

// BOTON_MODO.addEventListener("click", () => {
//     document.body.classList.toggle("dark")

//     if (document.body.classList.contains("dark")) {
//         localStorage.setItem("modo", "dark")
//     } else {
//         localStorage.setItem("modo", "claro")
//     }
// })

// // recuperamos el modo del local storage

// const modo = localStorage.getItem("modo")

// if (modo === "dark") {
//     document.body.classList.add("dark");
// } else {
//     document.body.classList.remove("dark")
// }


// carrito de compras

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
}

const producto1 = new Producto("camisa", 1000)
const producto2 = new Producto("pantalon", 2000)

const carrito = []

carrito.push(producto1)
carrito.push(producto2)

console.log(carrito)

// convertimos a json el objeto para almacenarlo

const carritoJSON = JSON.stringify(carrito)

console.log(carritoJSON)

// almacenar carrito en local storage

localStorage.setItem("carrito", carritoJSON)

const carritoRecuperado = localStorage.getItem("carrito")

// convertimos json a un objeto

const carritoObj = JSON.parse(carritoJSON)

//imprimimos en dom

const contenedorCarrito = document.getElementById("contenedorCarrito")

carritoObj.forEach(producto => {
    contenedorCarrito.innerHTML += `<p>${producto.nombre} - ${producto.precio}</p>`
})