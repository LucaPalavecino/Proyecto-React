import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = ({ productId }) => {

    const [product, setProduct] = useState([null]);

    useEffect(() => {
        const fetchData = () => {
            return fetch("/data/productos.json")
                .then((response) => response.json())
                .then((data) => {
                    const foundProduct = data.find((item) => item.id == productId)
                })
                .catch((error) => console.log(error));
        }

        fetchData();

    }, [productId]);

    return (
        <div>{
            product ? <ItemDetail product={product} /> : <p>CARGANDO...</p>
        }
        </div>
    );
};

export default ItemDetailContainer;