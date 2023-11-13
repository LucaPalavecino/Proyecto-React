import React from 'react';

const ProductList = ({product}) => {
    return (
        <div>
            <h1>{product.name}</h1>
            <p>product description</p>
            <p>stock: {product.stock}</p>
        </div>
    );
};

export default ProductList;