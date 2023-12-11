// Ej sin utilizar abstraccion

let ancho = 5
let alto = 10
let area = ancho * alto
console.log("Area del rectangulo" + area)

// Ej utilizando abstraccion para el mismo problema

function calcularArea(ancho, alto) {
    return ancho * alto
}

console.log(calcularArea(5, 10))


// Funciones de orden superior => HOF es una funcion que toma una o mas funciones como argumento y/o devuelve
// una funcion como resultado

// funciones que retornan funciones

// function asingarOperaciones(operacion) {

//     if (operacion === "sumar") {
//         return function (numero1, numero2) { return numero1 + numero2 }
//     } else if (operacion === "restar") {
//         return (numero1, numero2) => numero1 - numero2
//     }

// }

// let sumar = asingarOperaciones("sumar");
// let restar = asingarOperaciones("restar");


// console.log(sumar(4, 6))
// console.log(restar(10, 3))


//funciones por parametro => hace referencia a la capacidad de pasar funciones como argumentos a otras func

// ejemplo

function ejecutarOperacion(operacion, a, b) {

    return operacion(a, b)

}

//funcion que pueda ser pasada como parametro

function sumar(x, y) {
    return x + y;
}

function restar(x, y) {
    return x - y;
}

// utilizando funciones por parametro

let resultadosSuma = ejecutarOperacion(sumar, 3, 5)
console.log("El resultado de la suma es " + resultadosSuma)

// funcion flecha => nacio en ecma6, es una sintaxis mas corta

// function suma(a,b){
//     return a + b
// }

// const suma = (a, b) => a + b
// console.log(suma(2, 2))

// METODOS DE BUSQUEDA Y TRANSFORMACION

// for each

// const NUMEROS = [1, 2, 3, 4, 5, 6]

// NUMEROS.forEach((num) => {
//     resultado = num * 2;
//     console.log(resultado)
// })

const ESTUDIANTES = [
    { nombre: "fran", edad: 25 },
    { nombre: "juan", edad: 21 }
];

// ESTUDIANTES.forEach((est) => {
//     console.log(`Hola soy ${est.nombre}`)
// })

//metodo find

const resultado = ESTUDIANTES.find(function (estudiante) {
    return estudiante.edad > 20
})

console.log(resultado)

// metodo filter

const PRODUCTOS = [
    { nombre: "teclado", precio: 1000 },
    { nombre: "telefono", precio: 2000 },
    { nombre: "tablet", precio: 3000 },
    { nombre: "auriculares", precio: 4000 }
]

const precioMinimoUsuario = parseFloat(prompt("Ingrese el precio minimo que desee: "));

// if (!isNaN(precioMinimoUsuario)) {

//     const productoFiltrado = PRODUCTOS.filter(function (producto) {
//         return producto.precio >= precioMinimoUsuario;
//     });
//     console.log(productoFiltrado)
// } else {
//     console.log("Coloca un numero")
// }

if (!isNaN(precioMinimoUsuario)) {

    const productoFiltrado = PRODUCTOS.filter((producto) =>
        producto.precio >= precioMinimoUsuario
    );
    console.log(productoFiltrado)
} else {
    console.log("Coloca un numero")
}

// METODO SOME

const NUMEROS = [2, 3, 4, 5, 6, 7];

const hayNumeroMayor = NUMEROS.some((num) =>
    num > 6
);

console.log(hayNumeroMayor)

// METODO MAP

// const soloNombres = PRODUCTOS.map((prod) =>
//     prod.nombre
// );

// console.log(soloNombres)

const porcentajeAumento = PRODUCTOS.map((producto) =>

    producto.precio * 1.10
)

console.log("Precios con aumento: " + porcentajeAumento)


