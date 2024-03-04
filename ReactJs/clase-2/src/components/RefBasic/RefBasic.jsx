import { useEffect, useState } from "react"
import { useRef } from "react"

const RefBasic = () => {

    const [cont, setCont] = useState(1);

    const clicksRef = useRef(0)

    useEffect(() => {
        console.log("Numero de contador: " + cont);
    }, [cont])

    const styles = {
        margin: '10px',
        gap: '50px',
        display: 'flex',
        justifyContent: 'center'
    }


    const handleInc = () => {
        setCont(cont + 1);
        clicksRef.current++;
        console.log(`Contador de clicks ${clicksRef.current}`)
    }

    const handleDec = () => {
        if (cont < 2) {
            alert("El numero no puede ser negativo y/o cero")
        } else {
            setCont(cont - 1);
            clicksRef.current++;
            console.log(`Contador de clicks ${clicksRef.current}`)
        }
    }

    return (
        <>
            <section style={styles}>
                <button onClick={handleInc}>Incrementar</button>
                {cont} <button>Agregar al carrito</button>
                <button onClick={handleDec}>Decrementar</button>
            </section>

        </>
    )
}

export default RefBasic