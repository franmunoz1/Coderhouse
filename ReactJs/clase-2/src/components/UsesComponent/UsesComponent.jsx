import { useState, useEffect } from 'react'

const UsesComponent = () => {

    const [count, setCount] = useState(0);

    const plusNumber = () => {
        setCount(count + 1);
    }

    const restNumber = () => {
        setCount(count - 1);
    }

    const [show, setShow] = useState(true)

    const showText = () => {
        setShow(!show)

    }

    const [text, setText] = useState("")

    const handleText = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        console.log("Componente montado")
    }, []);


    return (
        <>
            <button onClick={plusNumber}>Sumar numero</button> {count}
            <button onClick={restNumber}>Restar numero</button>
            <hr />
            {show == true ? <h2>Hola mundo!</h2> : <h2></h2>}
            <button onClick={showText}>{show === true ? 'Ocultar' : 'Mostrar'}</button>
            <hr />
            <input style={{ border: '1px solid black' }} type="text" onChange={handleText} />
            <h2>{text}</h2>
        </>
    )
}

export default UsesComponent