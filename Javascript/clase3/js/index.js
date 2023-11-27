// let i = 1

// for (i; i < 10; i++) {
//     console.log("El valor del indice es: " + i)
//     if (i == 5) {
//         break
//     }
// }

//operadores de pre incremento
// let x = 5
// let y = ++x
// console.log("El valor de y es: " + y)

//operadores de post incremento
// let x = 5
// let y = x++;
// console.log("El valor de y es: " + y)

//ciclo for
// for (let i = 0; i < 5; i++) {
//     console.log("Uso del ciclo, numero: ", i)
// }

// const NUMERO = parseInt(prompt("Ingrese un numero: "))
// let resultado

// for (let i = 1; i < 11; i++) {
//     resultado = NUMERO * i;
//     if (i == 3) {
//         continue
//     }
//     console.log(NUMERO + " * " + i + " = " + resultado)

// }

//ciclo while

// let contador = 1

// while (contador <= 10) {
//     console.log("El numero es: " + contador)
//     contador++
// }

// cuenta regresiva
// let segundo = 10;

// while (segundo >= 0) {
//     console.log("Tiempo restante " + segundo + " segundos")
//     segundo--
// }
// console.log("Cuenta regresiva terminada")


//sumar numeros por usuario
// let suma = 0
// let continuar

// do {
//     const NUMERO = parseFloat(prompt("Ingrese el numero: "))
//     if (!isNaN(NUMERO)) {
//         suma += NUMERO
//         continuar = prompt("Quiere ingresar otro numero? si o no").toLowerCase()
//     } else {
//         alert("Ingresa un numero valido")
//         continuar = "si"
//     }

// } while (continuar === "si")

// console.log("La suma total es: " + suma)

// let expresion = prompt("Ingrese un numero")

// switch (expresion) {

//     case "hola":
//         console.log("ingreso el numero 1")
// }

//calculadora

const num1 = parseInt(prompt("Ingresa el primer numero: "))
let operacion = (prompt("Ingrese la operacion: "))
const num2 = parseInt(prompt("Ingresa el segundo numero: "))
let resultado


switch (operacion) {
    case "+":
        resultado = num1 + num2
        console.log("El resultado de sumar " + num1 + " + " + num2 + " = " + resultado)
        break
    case "-":
        resultado = num1 - num2
        console.log("El resultado de restar " + num1 + " - " + num2 + " = " + resultado)
        break
    case "*":
        resultado = num1 * num2
        console.log("El resultado de multiplicar " + num1 + " * " + num2 + " = " + resultado)
        break
    case "/":
        resultado = num1 / num2
        console.log("El resultado de dividir " + num1 + " / " + num2 + " = " + resultado)
        break
    default:
        alert("Operacio no valida")
}