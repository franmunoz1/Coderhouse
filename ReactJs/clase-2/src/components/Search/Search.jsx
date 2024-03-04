import { useEffect, useRef } from "react"

function Search() {

    const refCampo = useRef(null)

    useEffect(() => {
        console.log("Efecto en accion")
        refCampo.current.focus();
    }, [])

    return (
        <>
            <section>
                <input placeholder="Que buscas?" type="text" ref={refCampo} />
                <button>🔍</button>
            </section>
        </>
    )
}

export default Search