import React from "react";
import CartWidget from "../CartWidget/CartWidget";


const navbar = () => {
    return(
        <>
        <nav class="nav">
            <h1>MeLo Merezco</h1>
            
            <ul class="nav-list">
                <li><a class="nav-list-link" href="./pages/productos-y-servicios.html">productos y servicios</a></li>
                <li><a class="nav-list-link" href="./pages/categorias.html">categorias</a></li>
                <li><a class="nav-list-link" href="./pages/ofertas.html">ofertas</a></li>
                <li><a class="nav-list-link" href="./pages/destacados.html">destacados</a></li>
            </ul>
        </nav>
        <CartWidget/>
        </>
        
    )
}

export default navbar;