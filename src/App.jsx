import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Home/Hero'

function App() {
  return (
    <div className='w-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Hero />
    </div>
  )
}

export default App
