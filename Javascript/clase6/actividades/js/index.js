// Actividad 1

// const PERSONAS = [

//     { nombre: "Juan", edad: 30 },
//     { nombre: "Maria", edad: 25 },
//     { nombre: "Luis", edad: 35 }

// ];

// let sumatoria = 0;
// let resultado = 0;

// function calcularPromedio(personaRecorrido) {
//     for (const personaRecorrido of PERSONAS) {
//         sumatoria += personaRecorrido.edad
//     }

//     let resultado = (sumatoria) / (PERSONAS.length)

//     return resultado
// }

// console.log("La edad promedio es: " + calcularPromedio(PERSONAS))

// for (const personaRecorrido of PERSONAS) {
//     sumatoria += personaRecorrido.edad
// }

// let resultado = (sumatoria) / (PERSONAS.length)
// console.log("La edad promedio es: " + calcularPromedio(PERSONAS))

// como hacerlo con una funcion

// Actividad 2

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let numerosPares = []
// let numerosImpares = []


// function calcularParidad(recorridoNumeros) {
//     for (const recorridoNumeros of numeros) {
//         if (recorridoNumeros % 2 == 0) {
//             numerosPares.push(recorridoNumeros)
//         } else {
//             numerosImpares.push(recorridoNumeros)
//         }
//     }

//     return numerosPares
// }


// console.log("Los numeros pares son: " + calcularParidad(numeros))


// Actividad 3

let estudiantesAprobados = []

const ESTUDIANTES = [

    { nombre: "Francisco", calificacion: 80 },
    { nombre: "Pedro", calificacion: 30 },
    { nombre: "Carlos", calificacion: 55 },
    { nombre: "Juan", calificacion: 76 },
    { nombre: "Esteban", calificacion: 23 },
    { nombre: "Alexandro", calificacion: 90 },

];


let alumnosAprobados = (recorridoEstudiantes) => {
    for (const recorridoEstudiantes of ESTUDIANTES) {
        if (recorridoEstudiantes.calificacion >= 60) {
            estudiantesAprobados.push(recorridoEstudiantes)
        }
    }
    return estudiantesAprobados
}

console.log(alumnosAprobados(ESTUDIANTES))

//como hacer para poder ver el nombre solo de los estudiantes aprobados pero almacenando el vector completo

// Actividad 4

// const palabras = ["manzana", "banana", "manzana", "naranja", "banana", "frutilla"];
// let conteo = [];

// function contadorDePalabras(arrayPalabras) {

//     for (let i = 0; i < arrayPalabras; i++) {

//         const palabra = arrayPalabras[i]

//         if (conteo[palabra]) {
//             // si se repite incrementa en uno
//             conteo[palabra]++;

//         } else {
//             // si no se repite se toma como uno
//             conteo[palabra] = 1;
//         }
//     }

//     return conteo;
// }

// const cuantasVeces = contadorDePalabras(palabras)

// console.log(contadorDePalabras(palabras))

// Ejemplo compañero

// const palabrasIngresadas = []

// for (i = 0; i < 5; i++) {
//     let palabra = prompt("ingrese su palabra");
//     palabrasIngresadas.push(palabra)
// }


// function contarPalabras(arrays) {
//     const conteoPalabras = {};
//     arrays.forEach(palabra => {
//         if (conteoPalabras[palabra]) {
//             conteoPalabras[palabra]++
//         } else {
//             conteoPalabras[palabra] = 1
//         }
//     });
//     return conteoPalabras
// }

// const conteo = contarPalabras(palabrasIngresadas);
// console.log(conteo)