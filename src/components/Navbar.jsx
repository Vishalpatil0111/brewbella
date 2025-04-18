
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search, Store, Coffee } from "lucide-react";
import gsap from 'gsap';


function Navbar() {
 
  const navref = useRef(null)
  useEffect(() => {

    gsap.from(navref.current, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power2.out",
    });
  }, [])

  return (
    <>
      <nav ref={navref} className="flex top-0 left-0 flex-row w-full  bg-transparent z-50  shadow-lg h-16 md:h-23 ">
        <div className="hidden ml-15 lg:flex tracking-wider w-auto h-full justify-center items-center space-x-5 gap-8 text-[#ddc79f] text-lg font-extralight">
          <Link className="hover:text-zinc-200" to="/">Home</Link>
          <Link className="hover:text-zinc-200" to="/Explore">Explore</Link>
          <Link className="hover:text-zinc-200" to="/About">About</Link>
          <Link className="hover:text-zinc-200" to="/Contact">Contact</Link>
        </div>
        <div className="h-full lg:ml-10 uppercase lg:w-full px-3 tracking-wide lg:tracking-wider leading-5 lg:leading-9 font-extrabold text-2xl md:text-3xl lg:text-4xl flex flex-col lg:justify-center lg:items-center py-3">
          <h1 className="text-[#bca072] h-full">Brew</h1>
          <h1 className="text-[#88B3B6] h-full">&Bella</h1>
        </div>

        <div className="flex items-center w-full lg:w-auto justify-end lg:gap-10 lg:space-x-6">
          <div className="flex space-x-2 md:space-x-4 p-3 lg:mr-10 items-center">
            <button className="md:w-12 md:h-12 w-7 h-7 flex items-center justify-center rounded-full bg-transparent border border-[#7A6A58] hover:bg-[#806d5d] transition-all">
              <Coffee className="md:w-5 md:h-5 w-4 h-4 text-[#d5c5b3]" />
            </button>

            <button className="md:w-12 md:h-12 w-6 h-6 flex items-center justify-center rounded-full bg-transparent border border-[#7A6A58] hover:bg-[#806d5d] transition-all">
              <Search className="md:w-5 md:h-5 w-4 h-4 text-[#d5c5b3]" />
            </button>

            <Link to="/menu" className="flex items-center px-1.5 py-1.5 gap-2 md:px-5 md:py-3 rounded-full border border-[#7A6A58] bg-transparent hover:bg-[#806d5d] transition-all">
              <Store className="md:w-5 md:h-5 w-3 h-3 text-[#d5c5b3]" />
              <span className="text-[#d5c5b3] hidden md:block tracking-wider font-medium text-lg">Store</span>
            </Link>

          
          </div>

          <div onClick={() => setIsOpen(true)} className="flex  bg-zinc-800/50 backdrop-blur-lg lg:gap-4 h-full p-2 sm:p-5 items-center cursor-pointer">
            <Menu className="md:w-8 md:h-8 w-5 h-5 md:ml-5 lg:ml-0 text-[#ddc79f]" />
            <h1 className="lg:block hidden text-[#ddc79f] text-xl">Menu</h1>
          </div>
        </div>
      </nav>


    </>
  );
}


export default Navbar
