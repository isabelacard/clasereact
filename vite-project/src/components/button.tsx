import { useState } from "react";

function Button () {
    // Instrucciones de JS
    const [isUserActive, setisUserActive] = useState(false); //estado inicial es falso por ende el color es rosado y dice que el usuario esta inactivo

    function changeState() {
        console.info ("estoy dandole click");
        setisUserActive(!isUserActive); //false-> true
    }

    return (
        <button 
            style={{
                backgroundColor: isUserActive ? "pink" : "teal"
            }}
            onClick={changeState}
        >
            {isUserActive ? "El usuario está activado" : "El usuario no está activado"}
        </button>
    );
}

export default Button;