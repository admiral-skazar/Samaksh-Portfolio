import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Models from './components/Models'
import './App.css'
import Navbar from './components/Navbar'


function App() {
  

  return (
    <div className="App">
    <Navbar/>
    <Models/>
    </div>
  )
}

export default App
