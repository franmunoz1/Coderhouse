//Comentario de una linea
/*Comentario de muchas lineas
*/


// console.log("Hola francisco")

//variables
//var es la manera de como se declabaran antes de ecmascript 6, no se usa hoy en dia

//las que se usan a partir de ecs6 se usan let y const

// let primerNombre = "Francisco";

// let segundoNombre = "Agustin";

// console.log(primerNombre + " " + segundoNombre);

// segundoNombre = "Munoz";

// console.log(segundoNombre);

// //variable const que es la variable que no se puede modificar
// const num = 1;

// console.log(num);

// definicion de variables sin su dato

// let numero;

// numero = 3;

// console.log(numero);

//tipos de dato

// let numero = 1; //acepta tambien numeros flotantes

// let palabra = "Tipo de dato string"

// let booleano = true;

//operadores aritmeticos

//suma: +
//resta -
//multiplicacion *
//division /
//resto o modulo %
//incremento ++
//decremento --

//sumar 2 numeros dentro de otra variable

// let numero1 = 1
// let numero2 = 5

// let resultado = numero1 + numero2

// console.log(resultado)

//concatenar strings

// let nombre = "CODER"
// let nombre2 = "HOUSE"
// let espacio = " "

// let resultado = nombre + espacio + nombre2

// console.log(resultado)
// console.log(nombre + espacio + nombre2)

//prompt para pedir datos al usuario 

// let nombre = prompt("Ingresa tu nombre:")

// //alert para reflejar datos en forma de alerta arriba

// alert("Tu nombre es: " + nombre)

// Mi primer programa en js

//todo lo que se pase por prompt se ingresa como tipo de dato string

// let numero1 = parseInt(prompt("Ingrese el primer numero: "))
// let numero2 = parseInt(prompt("Ingrese el segundo numero: "))


// let resultado = numero1 + numero2

// alert(resultado)

// pidele al usuario ingrese 3 numero.
// Luego realiza La siguiente operacion!
// primero que el numero 1 se sume con numero2
// que el resultado se multiple por 3
//que luego numero2 se divida por numero1

let numero1 = parseInt(prompt("Ingrese el primer numero: "))
let numero2 = parseInt(prompt("Ingrese el segundo numero: "))
let numero3 = parseInt(prompt("Ingrese el tercer numero: "))

resultado = (((numero1 + numero2) / 3) + (numero2 / numero1))

alert("El resultado es: " + resultado)