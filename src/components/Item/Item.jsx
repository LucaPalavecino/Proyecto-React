import React from 'react';


const Item = ({ product }) => {

    

    return (
        <>
            <div className='contenedor'>
                <img src={product.img} alt={product.nombre} />
                <h1>{product.nombre}</h1>
                <p>{product.precio}</p>
                <h2>{product.stock}</h2>
                <p>{product.description}</p>
            </div>
            
        </>
    );
};

export default Item;
