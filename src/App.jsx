import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/Navbar/navbar'
import Header from './components/Header/header'
import './components/Navbar/navbar.css'
import './components/Header/header.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'



function App() {
  

  const greeting = "Todo lo que buscas en un solo Clik"

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={"Todo lo que buscas en un solo Clik"}/>
    
    </>
  )
}

export default App

