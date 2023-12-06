// Actividad 1

const PERSONAS = [

    { nombre: "Juan", edad: 30 },
    { nombre: "Maria", edad: 25 },
    { nombre: "Luis", edad: 35 }

];

let sumatoria = 0;

for (const personaRecorrido of PERSONAS) {
    sumatoria += personaRecorrido.edad
}

let resultado = (sumatoria) / (PERSONAS.length)
console.log("La edad promedio es: " + resultado)

// Actividad 2

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = []
let numerosImpares = []

for (const recorridoNumeros of numeros) {
    if (recorridoNumeros % 2 == 0) {
        numerosPares.push(recorridoNumeros)
    } else {
        numerosImpares.push(recorridoNumeros)
    }
}

console.log("Los numeros pares son: " + numerosPares)
console.log("Los numeros impares son: " + numerosImpares)

// Actividad 3

let estudiantesAprobados = []

const ESTUDIANTES = [

    { nombre: "Francisco", nota: 80 },
    { nombre: "Pedro", nota: 30 },
    { nombre: "Carlos", nota: 55 },
    { nombre: "Juan", nota: 76 },
    { nombre: "Esteban", nota: 23 },
    { nombre: "Alexandro", nota: 90 },

];

for (const recorridoEstudiantes of ESTUDIANTES) {
    if (recorridoEstudiantes.nota > 60) {
        estudiantesAprobados.push(recorridoEstudiantes)
    }
}

console.log(estudiantesAprobados)

// Actividad 4

const PALABRAS = ["hola", "como", "estas", "hola"]
let repeticion

for (let i = 0; i < PALABRAS.length; i++) {
    repeticion = PALABRAS.indexOf("hola")
}

console.log(repeticion)