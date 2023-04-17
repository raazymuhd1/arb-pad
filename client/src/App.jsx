import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Home'
import Header from './Components/Header'

function App() {

  return (
    <div className="App">
       <Header />
       <Routes>
          <Route path="/" element={ <Homepage /> } />
       </Routes>
    </div>
  )
}

export default App
