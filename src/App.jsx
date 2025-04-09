import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import TopScroll from './components/TopScroll'
import Menu from './pages/Menu';
import CategoryPage from './pages/CategoryPage';
import CheckOut from './pages/CheckOut';


function App() {
  return (
    <div className='w-full h-full '>
    <TopScroll/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/menu/:categoryName' element={<CategoryPage/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
  
      </Routes>
   
    </div>
  )
}

export default App
