import { useEffect, useState } from "react";

const ApiMeli = () => {
    const [prod, setProd] = useState([]);

    useEffect(() => {
        // Realiza la llamada a la API dentro de useEffect para manejar el ciclo de vida del componente
        fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055&limit=10")
            .then((response) => response.json())
            .then((json) => setProd(json.results)); // Almacena los resultados en el estado
    }, []);

    return (
        <>
            <ul>
                {prod.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    );
};

export default ApiMeli;
