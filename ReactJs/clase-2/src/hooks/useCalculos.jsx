import { useState } from "react";

export function useCalculos(precio) {

    const [iva, setIva] = useState(0);

    const [desc, setDesc] = useState(0);

    const calcularIva = () => {
        setIva(precio * 1.21);
    }

    const calcularDesc = () => {
        setDesc(precio * 0.9);
    }

    return { iva, desc, calcularIva, calcularDesc }
}