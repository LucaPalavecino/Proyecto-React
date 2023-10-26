import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div>
            <FaShoppingCart/>
            <p>0</p>
        </div>
    );
};

export default CartWidget;