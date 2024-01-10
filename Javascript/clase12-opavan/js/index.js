let nombre = "pedro"

//let numero = 10

//numero > 5 ? console.log("El numero es mayor") : console.log("EL numero es menor")

let nombrecliente = "fran"

//nombrecliente === "fran" && numero > 5 ? console.log("bienvenido fran") : console.log("c=hau")

// acceso condicional de un objeto

// const persona = {
//     nombres: "fran",
//     edad: 30,
//     ciudad: "buenos aires"
// };

//const {nombres, edad, ciudad} = persona

// const gato = {

//     duenio: "juan",
//     raza: "persa",
//     edad: 5,
//     direccion: {
//         calle: "valencia",
//         numero: 1234,
//         ciudad: "mar del plata"
//     }
// }

// let { duenio, raza: razaGato, edad, direccion: { calle, numero, ciudad } } = gato

// console.log(razaGato)


// desestructuracion por parametros

const alumno = {
    nombre: "fran",
    edad: 22
}

function mostrarDatos(objeto) {
    console.log(`hola mi nombre es ${objeto.nombre} y tengo ${objeto.edad} años`)
};

mostrarDatos(alumno)

function desestructurar(objeto) {
    const { nombre, edad } = alumno
    console.log(`hola mi nombre es ${nombre} y tengo ${edad} años`)
}

desestructurar(alumno)

const frutas = ["manzana", "pera", "banana"]

const [fruta1, fruta2, fruta3] = frutas

console.log(fruta2)