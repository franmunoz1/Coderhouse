// ARRRAYS

let array = ["a", "b", "c", "d"]

let arrayNumeros = [1, 2, 3, 4, 5, 6]


// Mostrar los arrays algun elemento en particular
console.log(array[3] + " " + array[1])

console.log(arrayNumeros[3] + arrayNumeros[5])

let personas = ["fran", "fabri", "hernan"]
console.log("Tu nombre es: " + personas[0])

// METODOS

//metodo lenght

console.log(personas[0].length)

for (let i = 0; i < personas.length; i++) {
    console.log("En la instancia " + i + " tenemos el nombre: " + personas[i])
}

//metodo push

personas.push('ricardo')
console.log("Array luego de agregar un elemento:")
for (let i = 0; i < personas.length; i++) {
    console.log("En la instancia " + i + " tenemos el nombre: " + personas[i])
}

//metodo pop: sirve para eliminar el ultimo elemento
// personas.pop();
// console.log(personas)

//metodo shift: sirve para eliminar el primer elemento del array
// personas.shift()
// console.log(personas)

//meetodo splice
// personas.splice(1, 2)
// console.log(personas)

// metodo join:
// console.log(personas.join(" "))

//metodo includes
// let personaIncludes = personas.includes("fran")
// console.log(personaIncludes)

//metodo reverse


// ARRAY DE OBJETOS 
const PERSONAS = [

    { nombre: "fran", edad: 30 },
    { nombre: "pedro", edad: 22 },
    { nombre: "jose", edad: 25 }

]
PERSONAS.push({ nombre: "juancito", edad: 23 })
console.log(PERSONAS)

const productos = [{ id: 1, precio: 33 },
{ id: 2, precio: 33 },
{ id: 3, precio: 33 }];

let sumatoria = 0

for (const recorridoProducto of productos) {

    sumatoria += recorridoProducto.precio;
}

console.log(sumatoria)
