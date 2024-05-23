import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import React from 'react';
import Itemlistcontainer from './assets/conteiners/itemlistconteiner/itemlistconteiner'

function App() {
  

  return (
  <div>
    <Navbar />
    <Itemlistcontainer greetin={'soy un grow'} />
    
    
    </div>

  )
}

export default App






