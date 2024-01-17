// sincronismo

// console.log("Inicio de programa")
// function operacionSincronica() {
//     console.log("Inicio de operacion sincronica")

//     for (let i = 0; i < 3; i++) {
//         console.log(`Paso ${i}`)
//     }
// }

// operacionSincronica()
// console.log("Fin de programa")


// asicrnonismo

// console.log("Iniciar programa asincrono")

// setTimeout(function () {
//     console.log("La operacion asincrona se ha ejecutado")
// }, 4000)

// console.log("Fin del programa asincrono")

// callback

// function operacionAsincronica(callback) {
//     console.log("Inicio de operacion sincronica")

//     // uso de callback

//     setTimeout(() => {
//         console.log("Operacion asincrona ejecutada");

//         callback();
//     }, 2000)
// }

// operacionAsincronica(function () {
//     console.log("Este, callback de la operacion finalizada")
// })
// console.log("Fin del programa")

// prueba con dom de asincronia

const mensaje = "Francisco"

const elemento = document.getElementById("miElemento")

let indice = 0

// esta funcion se encarga de anadir la letra actual al contenido de elementos y aumentar el indice

function mostrarLetra() {
    elemento.textContent += mensaje[indice]
    indice++;

    // verifico si quedan letras por mostrar
    if (indice < mensaje.length) {

        setTimeout(mostrarLetra, 200)
    }
}

console.log("Inicio de programa")
setTimeout(mostrarLetra, 2000)


function cambiarContenido() {
    document.getElementById("ejemplo2").innerHTML = "asincronismo"
    // si pongo += al inner se va agregando abajo de ese elemento del id
}

setTimeout(cambiarContenido, 2000)

function cambiarContenido2() {
    document.getElementById("ejemplo2").innerHTML = "con coderhouse"
}

setTimeout(cambiarContenido2, 4000)

// set interval

// setInterval(() => {
//     console.log("Hola")
// }, 1000)

let tiempoRestante = 10

function actualizarTemporizador() {
    const temporizadorElemento = document.getElementById("temporizador");

    temporizadorElemento.textContent = `Tiempo restante: ${tiempoRestante}`;
    tiempoRestante--

    if (tiempoRestante < 0) {
        clearInterval(IntervaloID)
        temporizadorElemento.textContent = "Tiempo agotado"
    }
}

const IntervaloID = setInterval(actualizarTemporizador, 1000)


let segundos = 0;
let minutos = 0;
let intervaloId

function actualizarCronometro() {
    segundos++;

    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }

    const cronometroElemento = document.getElementById("cronometro")
    cronometroElemento.textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`
}

function iniciarCronometro() {
    intervaloId = setInterval(actualizarCronometro, 1000)
}

function detenerCronometro() {
    clearInterval(intervaloId)
}

function reiniciarCronometro() {
    segundos = 0;
    minutos = 0;

    const cronometroElemento = document.getElementById("cronometro")
    cronometroElemento.textContent = `0:00`
}

// promesas

const falsaPromesa = () => {
    return new Promise((resolve, reject) => {
        // resolve se va a ejecutar cuando la promesa se cumple
        // reject se va a ejecutar cuando la promesa no se cumple


    })
}

console.log(falsaPromesa())

const miPrimeraPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        const exito = true

        if (exito) {
            resolve("La operacion se completo")
        } else {
            reject("La operacion no se completo")
        }
    }, 2000)

})

// forma de manejar la promesa

miPrimeraPromesa
    .then((resultado) => {
        console.log("exito", resultado)
    })
    .catch((error) => {
        console.error("Error", error.message)
    })