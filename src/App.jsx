import { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import './components/Navbar/navbar.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainter';





function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer />
    </>
  );
}

export default App;
