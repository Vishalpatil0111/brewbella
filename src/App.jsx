import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Menu from './pages/Menu'



function App() {
  return (
    <div className='w-full h-full '>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu/>} />
      </Routes>
   
    </div>
  )
}

export default App
