import React,{useState} from 'react';

const ItemCount = ({initial,stock,onAdd}) => {

    const [count,setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count+1)
        }
    }

    const decrement = () => {
        if(count > inicial) {
            setCount(count-1)
        }
    }

    return (
        <div>
            <button onClick={increment}>incrementar</button>
            <span>{count}</span>
            <button onClick={decrement}>decrementar</button>
            <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;
