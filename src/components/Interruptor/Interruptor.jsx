import React, {useState} from 'react';
import "./interruptor.css"

const Interruptor = () => {

    const [encendido, setEncendido] = useState (false)

    const alternarinterruptor = () => {
        setEncendido (!encendido)
    }

    return (
        <div className={`caja ${encendido ? "encendido" : "apagado"}`}>
            <div className= 'circulo'>
                <button onClick={alternarinterruptor}>ALTERNAR</button>
            </div>
        </div>
    );
};

export default Interruptor