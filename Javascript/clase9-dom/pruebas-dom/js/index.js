const PRODUCTOS = [

    { nombre: "nox", precio: 350 },
    { nombre: "head", precio: 200 },
    { nombre: "bull", precio: 280 }
]

PRODUCTOS.push({ nombre: "hola", precio: 300 })


const contenedorProductos = document.getElementById("contenedorProductos")

PRODUCTOS.forEach(producto => {

    const div = document.createElement("div")

    div.className = "card"

    div.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.precio}</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
    
    `
    contenedorProductos.appendChild(div)

})
