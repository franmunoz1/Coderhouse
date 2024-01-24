const API_URL = "https://criptoya.com/api/dolar"

const divDolar = document.getElementById("dolarBlue")

setInterval(() => {
    fetch(API_URL)
        .then(response => response.json())
        .then(({ blue }) => {
            divDolar.innerHTML = `<h2>El precio del dolar blue es: </h2>
                                <span>${blue.bid}</span>`
        })
        .catch(error => console.log(error))
}, 3000)


const API_USERS = "https://jsonplaceholder.typicode.com/users"

const divUsers = document.getElementById("users")

fetch(API_USERS)
    .then(response => response.json())
    .then(user => {
        mostrarUsuarios(user)
    })



function mostrarUsuarios(datos) {
    datos.forEach(user => {
        const li = document.createElement("li")
        li.textContent = `${user.name}`
        divUsers.appendChild(li)
    }
    )
}