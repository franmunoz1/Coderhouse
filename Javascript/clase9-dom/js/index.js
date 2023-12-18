// get element by ID
// const TITULO = document.getElementById("tituloPrincipal");

// console.log(TITULO)

// get element by CLASSNAME => nombre de clase
// const NOMBRES = document.getElementsByClassName("nombre")

// console.log(NOMBRES)

// get element by TAGNAME => por nombre de etiqueta
// const PARRAFOS = document.getElementsByTagName("p")

// console.log(PARRAFOS)

//queryselectors

// const QuerySelector = document.querySelector(".nombre")
// console.log(QuerySelector)

// const QuerySelectorAll = document.querySelectorAll(".nombre")
// console.log(QuerySelectorAll)

// modificar texto mediante dom

// const TITULO = document.getElementById("tituloPrincipal");

// TITULO.innerText = "Hola mundo!"

// const SECTION_CONT = document.getElementById("sectionContenedor")

// SECTION_CONT.innerHTML = `
//                             <div class="card">
//                                 <img src="" alt="">
//                                 <div>
//                                     <h3>Titulo de la card</h3>
//                                     <p>Precio del producto</p>
//                                     <button>Comprar</button>
//                                 </div>
//                             </div>`

// agregar nodos

//create element me sirve para crear un elemento desde JS
// const parrafo = document.createElement("p")

// parrafo.innerText = "Este es un parrafo creado desde js"
// parrafo.className = "rojo"

// const contenedor = document.getElementById("contenedor")

// contenedor.appendChild(parrafo)


// CONTENDOR DE PRODUCTOS

// class Producto {
//     constructor(nombre, precio, imagen) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.imagen = imagen;
//     }
// }

// const PROD1 = new Producto("yerba", 4000, "")
// const PROD2 = new Producto("cafe", 4500, "")
// const PROD3 = new Producto("coca", 1100, "")

// const arrayProductos = [PROD1, PROD2, PROD3]

const PRODUCTOS = [

    { nombre: "galleta", precio: 3500 },
    { nombre: "arroz", precio: 700 },
    { nombre: "fideos", precio: 1200 }
]

const contenedorProductos = document.getElementById("contenedorProductos")

PRODUCTOS.forEach(producto => {

    const div = document.createElement("div")

    div.className = "card"

    div.innerHTML = `
                    <div> 
                        <img src="${producto.imagen}" alt="">
                    </div>   

                    <div>
                        <h3>${producto.nombre}</h3>
                        <span>${producto.precio}</span>
                        <button>Comprar</button>
                    </div>
    
    `
    contenedorProductos.appendChild(div)

})