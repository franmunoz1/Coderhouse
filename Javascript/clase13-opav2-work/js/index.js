// // spread operator con arrays

// const ORIGINAL_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8];

// const NEW_ARRAY = [...ORIGINAL_ARRAY]

// console.log(NEW_ARRAY)

// // concatenacion

// let hombres = ["juan", "pedro"]

// let mujeres = ["renata", "carla"]

// let concatenacion = [...hombres, ...mujeres]

// console.log(concatenacion)

// // anadir al array

// let arrayNuevo = [...ORIGINAL_ARRAY, 9, 10, 12]

// console.log(arrayNuevo)


// spread de objetos

const objetoActual = {
    a: 1,
    b: 2,
    c: 3
};

const nuevoObjeto = { ...objetoActual }

console.log(nuevoObjeto)

// usuarios

const user = [
    { id: 1, nombre: "fran" },
    { id: 2, nombre: "juan" },
    { id: 3, nombre: "peter" }
];

// clonar y actualizar los usuarios

const actualizarUser = user.map(user => user.id === 2 ? { ...user, nombre: "juancito" } : user)

console.log(actualizarUser)


// rest parameters con una funcion de suma

function sumar(...numbers) {
    let resultado = 0;

    for (let numero of numbers) {
        resultado += numero
    }

    return resultado;
}

console.log(sumar(1, 2, 3, 4, 5))