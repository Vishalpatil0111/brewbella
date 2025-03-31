import { div } from 'framer-motion/client'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

function Hero() {
  return (
   <div>
    
     <div className="w-full p-5 px-10 flex mt-30 flex-col items-center justify-center ">
      <h2 className='text-2xl font-medium brightness-100 text-[#f2e1c0] tracking-widest'>You're always Welcome</h2>

      <div className='w-full h-fit  mt-5 justify-center items-center flex flex-col'>
        <h1 className='text-[9vw] font-bold text-[#f2e1c0] tracking-wide opacity-90'>Fueling Your Day</h1>
        <h4 className=' text-4xl font-bold text-[#f2e1c0] tracking-wide opacity-90  bg-amber-800'>With BrewBella !!</h4>
      </div>

    </div>
   </div>
  )
}

export default Hero
