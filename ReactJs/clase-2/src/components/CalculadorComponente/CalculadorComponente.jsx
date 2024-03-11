import { useState } from "react"
import { useCalculos } from "../../hooks/useCalculos"

const CalculadorComponente = () => {

    const [inputValue, setInputValue] = useState(0)

    const { iva, desc, calcularIva, calcularDesc } = useCalculos(inputValue)

    const handleChange = () => {
        setInputValue(event.target.value)
    }

    const handleClickIva = () => {
        calcularIva()
    }

    const handleClickDesc = () => {
        calcularDesc()
    }


    return (
        <>
            <section>
                <h3>Calculador de impuestos y descuentos</h3>
                <label htmlFor="precio">Precio en $:
                    <input type="number" name="precio" value={inputValue} onChange={handleChange} />
                </label>
            </section>

            <section>
                <article>
                    <button onClick={handleClickIva}>Con IVA 21%: </button>
                    <p>{iva}</p>
                </article>
                <article>
                    <button onClick={handleClickDesc}>Con descuento 10%: </button>
                    <p>{desc}</p>
                </article>
            </section>
        </>
    )
}

export default CalculadorComponente