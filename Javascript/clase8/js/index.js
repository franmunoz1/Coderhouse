// Reduce

let numeros = [1, 2, 3, 4, 5];

let suma = numeros.reduce((acumulador, valor) =>
    acumulador + valor
)

console.log(suma)


//sort para ordenar el array

let frutas = ["manzana", "banana", "frutilla"];

frutas.sort();

console.log(frutas);

let estudiantes = [
    { nombre: "fran", edad: 23 },
    { nombre: "jose", edad: 20 },
    { nombre: "bautista", edad: 22 }
]

estudiantes.sort((a, b) =>
    a.edad - b.edad
)

console.log(estudiantes)

// OBJETO MATH

let pi = Math.PI
console.log(pi)
let euler = Math.E
console.log(euler)

// min y max

let numero = [3, 4, 1, 6, 7];

let minimo = Math.min(3, 7, 1, 5, 2)
console.log(minimo)

// metodos para redondear: ceil - floor - round

let numeroDecimal = 3.3;

let numeroRedondeado = Math.round(numeroDecimal);
console.log(numeroRedondeado)

// metodo random => numero aleatorio

// let numeroAleatorio = Math.round((Math.random() * 10))
// console.log(numeroAleatorio)

// let eleccionJugador = parseInt(prompt("Elegi un numero del 1 al 10: "));

// if (isNaN(eleccionJugador) || (eleccionJugador < 1) || (eleccionJugador > 10)) {
//     alert("Numero ingresado incorrecto")
// } else {
//     let numeroGanador = Math.round(Math.random * 10 + 1)

//     // comprobamos si el numero ganador coincide con el numero del usuario

//     if (eleccionJugador == numeroGanador) {
//         alert("Adivinaste!")
//     } else {
//         alert("No adivinaste")
//     }
// }

// do {
//     let num = parseInt(prompt("Ingrese un numero: "))
// } while (num != numeroAleatorio)


// Clase date:

let fechaActual = new Date();
console.log(fechaActual.toLocaleString())