const http = require('http')

// configurar entorno http servidor => hola mundo

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hola mundo")
})

// se escuche en algun puerto el pedido que estamos haciendo

const puerto = 3000
const direccionIP = '127.0.0.1'
server.listen(puerto, direccionIP, () => {
    console.log(`Servidor ip corriendo ${direccionIP} : ${puerto}`)
})