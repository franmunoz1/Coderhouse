// objetos

// let nombre = "Fran"
// let edad = 22
// let booleano = true

// OBJETO
// let persona = {
//     nombre: "Francisco",
//     edad: 22,
//     booleano: true
// };

// console.log(persona)
// console.log(persona.nombre)

//objeto pero que se rellene con datos
// let persona = {
//     nombre: "",
//     edad: "",
//     booleano: ""
// };

// persona.edad = 23
// console.log(persona.edad)

// Ejemplo de login de sesion

// let persona = {
//     nombre: "",
//     apellido: ""
// };

// persona.nombre = prompt("Ingresa tu nombre: ")
// console.log(persona.nombre)


// OBJETOS CONTRUCTORES

// function Persona(nombre, edad, booleano) {
//     this.nombre = nombre
//     this.edad = edad
//     this.booleano = booleano
// }

// const PERSONA_1 = new Persona("Francisco", 22, true)
// const PERSONA_2 = new Persona("Peter", 26, false)

// console.log(PERSONA_1, PERSONA_2)

// METODOS Y OPERACIONES CON OBJETOS

// let Coche = {
//     marca: "toyota",
//     modelo: "corolla",
//     arrancar: function () {
//         console.log("El coche arranca")
//     }
// }

// Coche.arrancar()

// const IVA = 1.21;

// function Producto(nombre, precio, stock) {
//     this.nombre = nombre
//     this.precio = precio
//     this.stock = stock
//     this.precioConIva = function () {
//         let precioFinal = this.precio * IVA;

//         return "El precio final es: $" + precioFinal
//     }
// }

// const PRODUCTO_1 = new Producto("Arroz", 1000, 30)

// PRODUCTO_1.precioConIva()

// Trabajar con strings

// let cadena = "sDADmdaaADADdaADa"
// console.log(cadena.length)
// console.log(cadena.toLowerCase())
// console.log(cadena.toUpperCase())


// CLASES

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Bienvenido ${this.nombre} con edad de ${this.edad}`);
    }
}

const PERSONA_1 = new Persona("juan", 33)
console.log(PERSONA_1)
PERSONA_1.saludar()


