/* eslint-disable react/prop-types */

export default function ButtonComponent({ texto, color, callback }) {

    const misEstilos = {
        backgroundColor: color,
    }

    return (

        <>
            <button style={misEstilos} onClick={callback}>{texto}</button>
        </>
    )
}
