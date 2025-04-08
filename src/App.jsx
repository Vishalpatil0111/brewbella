import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import TopScroll from './components/TopScroll'
import MenuProduct from './components/Menu/MenuProduct'
import Menu from './pages/Menu';


function App() {
  return (
    <div className='w-full h-full '>
    <TopScroll/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />

  
      </Routes>
   
    </div>
  )
}

export default App
