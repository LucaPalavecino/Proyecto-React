import React from 'react';
import Count from '../count/Count';

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <h1>{greeting}</h1>
            <Count inicial={1} stock={100}/>
        </>
    );
};

export default ItemListContainer;