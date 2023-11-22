// condicional es una estructura de flujo que permite tomar decisiones
// se expresan con verdadero o falso => booleanos

// let numero;

// numero = parseInt(prompt("Ingrese un numero: "))

// if (numero > 5) {
//     console.log("Se muestra el mensaje")

// } else if (numero < 5) {
//     console.log("No se muestra este mensaje")
// }

// else {
//     console.log("El numero es igual a cinco")
// }

// COLOCANDO UNA VARIABLE CON UNA CONDICION

// let numero = 8
// let valido = (numero < 10)

// if (valido) {
//     console.log("El numero es menor que 10")
// } else {
//     console.log("El numero es mayor que 10")
// }

// let number = "10"

// if (number === 10) {
//     alert("Es el mismo tipo de dato")
// } else {
//     alert("No es el mismo tipo de dato")
// }

// let numero = 10

// if (numero > 5) {
//     console.log("El numero " + numero + " es mas grande que 5")
// }

// let nombre = prompt("Ingresa tu nombre: ")

// if ((nombre == "fran") || (nombre == "FRAN")) {
//     alert("Tu nombre es " + nombre)
// } else {
//     alert("Ingresaste mal tu nombre")
// }


//verificar edad para conducir

// const EDAD = parseInt(prompt("Ingrese su edad: "))

// if (isNaN(EDAD)) {
//     alert("No ingreso un numero")
// } else if (EDAD >= 17) {
//     alert("Tenes edad para conducir")
// } else {
//     alert("No tenes edad para conducir")
// }

const EDAD = parseInt(prompt("Ingrese su edad: "))
let licencia = prompt("Posee licencia? si o no")
let tieneLicencia

if (licencia == "si") {
    tieneLicencia = true
} else if (licencia == "no") {
    tieneLicencia = false
}

if ((EDAD >= 17) && (tieneLicencia == true)) {
    alert("Puede manejar")
} else {
    alert("No puede manejar")
}
