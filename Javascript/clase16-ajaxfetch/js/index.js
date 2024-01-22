// consumo de api

const url = "https://jsonplaceholder.typicode.com/users";

// objeto de tipo XMLhttpRequest -> obj que nos permite hacer solicitudes HTTP

const xhr = new XMLHttpRequest()

function manejador() {
    if (this.readyState === 4 && this.status === 200) {

        const datos = JSON.parse(this.response);
        console.log(datos);

        mostrarUsuarios(datos)

    }
}

xhr.addEventListener("load", manejador);

xhr.open('get', url);

xhr.send()

// crear una funcion para mostrar usuarios

const app = document.getElementById("app")

function mostrarUsuarios(datos) {
    datos.forEach(usuario => {
        const li = document.createElement("li")
        li.textContent = `${usuario.id} - ${usuario.name}`
        app.appendChild(li)
    })
}

// UTILIZANDO FETCH

// const API_PHOTOS = "https://jsonplaceholder.typicode.com/photos";

// const fotos = document.getElementById("fotos");

// // fetch funciona con promesas donde tenemos que respetar 2 métodos
// // then: maneja los casos en caso de que se resuelva, puede encadenar más then. toma uno o más argumentos
// // catch: maneja los casos que son rechazados, al contrario de then. toma una función como argumento 

// fetch(API_PHOTOS)
//     .then(respuesta => respuesta.json()) //recibe la respuesta de la conexión
//     .then((datos) => {      // toma los datos frente a la respuesta en caso de ser correcto
//         console.log(datos);
//         mostrarFotos(datos);
//     })
//     .catch(error => console.log(error)) // en caso de que tire error
//     .finally(() => console.log("El proceso finalizó")); // toma una función como argumento que se ejecuta si se cumple la promesa

// function mostrarFotos(datos) {
//     datos.forEach(foto => {
//         const img = document.createElement("img");
//         img.src = foto.url;
//         fotos.appendChild(img); // Utiliza 'fotos' en lugar de 'contenedorFotos'
//     });
// }


// cotizador de dolares

const dolarApi = "https://criptoya.com/api/dolar"

const divDolar = document.getElementById("dolar")

setInterval(() => {
    fetch(dolarApi)
        .then(response => response.json())
        .then(({ blue, ccl, mep, oficial }) => {
            divDolar.innerHTML = `
            <h2>Tipo de dolar: </h2>
            <p>Dolar blue: ${blue.bid}</p>
            <p>Dolar ccl: ${ccl.price}</p>
            <p>Dolar mep: ${mep.price}</p>
            <p>Dolar oficial: ${oficial.price}</p>
            `
        })
        .catch(error => console.log(error))
}, 3000)