import './Card.css';
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export const Card = ({ children, title }) => {

    const [stock, setStock] = useState(1);

    const [cantidadCarrito, setCantidadCarrito] = useState(0)

    const incStock = () => {
        setStock(stock + 1)
    }

    const decStock = () => {
        stock > 0 ? setStock(stock - 1) : alert("No contamos con mas stock")
    }

    const addCart = () => {
        setCantidadCarrito(stock)
    }

    return (
        <section style={{ border: '1px solid black', padding: '10px' }} className="card">
            {children}
            <h1>{title}</h1>
            <p>Esto es la descripcion</p>
            <hr />
            <button onClick={incStock}>+</button>
            {stock}
            <button onClick={decStock}>-</button>
            <button onClick={addCart}>Añadir al carrito</button>
            {cantidadCarrito > 0 && <p>Añadido al carrito {stock}</p>}
        </section>
    )
}