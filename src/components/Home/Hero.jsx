import React from "react";
import Navbar from "../Navbar";


function Hero() {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center">
      
      <div className="absolute inset-0 bg-center bg-cover bg-[url('/images/herobg.jpg')]"></div>
      
    
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute top-0 left-0 w-full z-20">
      <Navbar/>
      </div>

   
      <div className="relative z-10 text-center w-full px-4 md:px-10 lg:px-20">
        <h1 className="text-lg sm:text-xl md:text-2xl font-light tracking-widest text-[#E5DBC9]">
          You are always welcome!
        </h1>
        <div className="w-[90%] flex flex-col py-6 md:py-10 px-6 md:px-10 lg:px-15">
          <h1 className="text-[10vw] md:text-[6vw] lg:text-[8vw] self-start font-bold tracking-wide text-[#ada69b]">
            Fueling Your Day,
          </h1>
          <h1 className="text-[10vw] md:text-[6vw] lg:text-[7vw] self-end font-light tracking-normal leading-tight text-[#E5DBC9]">
            Choco Brew Way!!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
