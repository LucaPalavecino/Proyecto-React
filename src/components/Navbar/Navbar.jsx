import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


const navbar = () => {

    const enlaces = [
        "productos y servicios",
        "categorias",
        "ofertas",
        "destacados"
    ]

    

    return(
        <>
        <nav class="nav">
            <h1>MeLo Merezco</h1>
            
            <ul class="nav-list">
                {enlaces.map((e,id) =>
                    <li key={id}>
                        
                        <Link to={`${e}`}>
                        {e}
                        </Link>

                        

                    </li>
                    


                )};
            </ul>
        </nav>
        <CartWidget/>
        </>
        
    )
};

export default navbar;