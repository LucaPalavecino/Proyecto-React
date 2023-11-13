import { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import './components/Navbar/navbar.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainter';


import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const greeting = "Todo lo que buscas en un solo Clik";
  

  return (
    <>
      <Navbar />
      <ItemListContainer/>
      
      
    </>
  );
}

export default App;
