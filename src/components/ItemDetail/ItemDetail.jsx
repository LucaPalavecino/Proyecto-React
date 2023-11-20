import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {

    const onAdd = (quantity) => {
        alert(quantity);
    };
    
    return (
        <div>
            <img src={product.img} alt={product.nombre} />
                <h2>{product.nombre}</h2>
                <p>Precio{product.precio}</p>
                <p>Stock{product.stock}</p>
                <p>Descripcion{product.description}</p>
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
        </div>
    );
};

export default ItemDetail;