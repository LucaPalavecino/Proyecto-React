import { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import './components/Navbar/navbar.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainter';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/" element={<ItemListContainer />}/>

          <Route
            path="/productos y servicios" element={<ItemDetailContainer />}/>

          <Route
            path="/categorias" element={<ItemDetailContainer />}/>

          <Route
            path="/ofertas" element={<ItemDetailContainer />}/>

          <Route
            path="/destacados" element={<ItemDetailContainer />}/>
          

          

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
