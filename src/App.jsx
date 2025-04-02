import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'



function App() {
  return (
    <div className='w-full h-full '>
    
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
   
    </div>
  )
}

export default App
