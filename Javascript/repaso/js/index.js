const usuarios = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618',
            },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
        },
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653',
            },
        },
        phone: '1-463-123-4447',
        website: 'ramiro.org',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications',
        },
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990',
            },
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services',
        },
    },
];

// EJ 1: recorrer el array y mostrar por consola los siguientes atributos de cada objeto: id, name - DEBES USAR PLANTILLAS LITERALES (template strings)

console.log("Ejercicio 1");
usuarios.forEach(usuario => {
    console.log(`ID: ${usuario.id} - Nombre: ${usuario.name}`)
})

//EJ 2: crear un nuevo array y mostrar por consola en una tabla aquellos usuarios cuyo website incluye '.org'

console.log("Ejecicio 2");
let ejercicio2 = usuarios.filter((usuario) =>
    usuario.website.includes(".org")
)
console.table(ejercicio2)


//EJ 3: crear un nuevo array de objetos que contengan el id y el name de cada usuario.

const ejercicio3 = usuarios.map((usuario) => ({
    id: usuario.id,
    name: usuario.name
}))
console.table(ejercicio3)

//EJ 4: desestructurar el primer y el tercer elemento del array y mostrarlos.

const [a, , c] = usuarios
console.log(a, c)

//EJ 5: desparrama el array en un nuevo array

const ejercicio5 = [...usuarios]
console.log(ejercicio5)

//EJ 6: desparrama el primer objeto y reemplaza el nombre del usuario por 'pepe'

const ejercicio6 = { ...usuarios[0], name: "Pepe" }
console.log(ejercicio6)

//EJ 7: Crear un nuevo array que contenga solo los usuarios que viven en una ciudad que comienza con la letra 'M'. Mostrar el resultado por consola.

const ejercicio7 = usuarios.filter((usuario) => usuario.address.city.startsWith('M'))
console.table(ejercicio7)

//EJ 8: Crear un nuevo array que contenga solo los usuarios cuyo nombre tenga más de 10 caracteres. Mostrar el resultado por consola.

const ejercicio8 = [];

for (recorrido of usuarios) {
    if (recorrido.username.length > 10) {
        ejercicio8.push(recorrido)
    }
}

console.log(ejercicio8)

// Otra forma de hacerlo

const ejercicio81 = usuarios.filter((usuario) => usuario.username.length > 10)
console.log(ejercicio81)

//EJ 9: Crear un nuevo array que contenga solo los usuarios cuyo correo electrónico incluya la palabra 'net'. Mostrar el resultado por consola.

const ejercicio9 = usuarios.filter((usuario) => usuario.email.includes('.net'))
console.log(ejercicio9)

// EJ10: Crear un nuevo array de objetos que contenga solo el id, el nombre y la ciudad de cada usuario. Mostrar el resultado por consola.

const ejercicio10 = usuarios.map((usuario) => ({
    id: usuario.id,
    name: usuario.name,
    city: usuario.address.city
}))

console.table(ejercicio10)

// EJ11: Crear un array de objetos que contenga el email, nombre de usuario y la calle donde vive

const ejercicio11 = usuarios.map((usuario) => ({
    email: usuario.email,
    name: usuario.name,
    street: usuario.address.street
}))

console.table(ejercicio11)


