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