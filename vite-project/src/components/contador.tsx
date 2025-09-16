import { useState } from "react";

function Contador () {
    const [counter, setCounter] = useState(0); 

    return (
        <>
            <p>Contador es: {counter}</p> 
            <button onClick={() => setCounter (prev => prev + 1)}> 
                Presioname
            </button> 
        </> 
    );
}

export default Contador;