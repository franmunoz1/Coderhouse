// Actividad 1

// function esParOImpar(numero) {
//     if (numero % 2 == 0) {
//         console.log("El numero es par")
//     } else {
//         console.log("El numero es impar")
//     }
// }

// let numero = parseInt(prompt("Ingrese un numero: "));
// console.log(esParOImpar(numero))


// Actividad 2

// function calcularArea(forma, base, altura) {
//     let resultado = 0;
//     if (forma == "triangulo") {
//         resultado = ((base * altura) / 2);
//     } else if (forma == "cuadrado") {
//         resultado = (base * altura)
//     } else {
//         console.log("El resultado no es valido")
//     }

//     return resultado
// }

// let forma = prompt("Ingrese la forma geometrica: ")
// let base = parseInt(prompt("Ingrese la base del " + forma + " : "))
// let altura = parseInt(prompt("Ingrese la altura del " + forma + " : "))

// console.log("El area del " + forma + " es: " + calcularArea(forma, base, altura))


// Actividad 3

// function esContrasenaValida(contrasena) {

//     if ((contrasena.length >= 8) && (contrasena.includes('@'))) {
//         console.log("La contraseña ingresada es valida")
//     } else {
//         console.log("La contraseña ingresada no es valida")
//     }
// }

// let contrasena = prompt("Ingrese la contraseña: ")

// esContrasenaValida(contrasena)


// Actividad 4

function calcularPrecioConDescuento(cantidad, precioUnitario) {

    let resultado = 0;

    if (cantidad >= 10) {
        resultado = ((cantidad * precioUnitario) * 0.9)
    } else {
        resultado = (cantidad * precioUnitario)
    }

    return resultado

}

let precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto: "));
let cantidad = parseInt(prompt("Ingrese la cantidad del producto: "));

console.log("El precio total del producto es: " + calcularPrecioConDescuento(cantidad, precioUnitario))