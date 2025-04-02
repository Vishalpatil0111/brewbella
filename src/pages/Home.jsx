import React from 'react'
import Hero from '../components/Home/Hero'
import Navbar from '../components/Navbar'



function Home() {
  return (
    <div className='w-full flex flex-col '>
     <Navbar/>
     <div className='w-full absolute inset-0 bg-center bg-cover opacity-50 bg-[url("/images/herobg.jpg")] z-1'>  
     </div>
     <Hero/>
      
    </div>
  )
}

export default Home
