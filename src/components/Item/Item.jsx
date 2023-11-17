import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ product }) => {

    const onAdd = (quantity) => {
        console.log(quantity);
    };

    return (
        <>
            <div className='contenedor'>
                <img src="" alt="" />
                <h1>{product.nombre}</h1>
                <p>{product.precio}</p>
                <h2>{product.stock}</h2>
                <p>{product.description}</p>
            </div>
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
        </>
    );
};

export default Item;
