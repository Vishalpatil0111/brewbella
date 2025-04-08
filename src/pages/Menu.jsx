import React from 'react';
import { useHorizontalScrollText } from '../context/useHorizontalScrollText';
import AllMenu from '../components/Menu/AllMenu';

function Menu() {
  const scrollRef = useHorizontalScrollText();
  const items = ['Menu', '*', 'Coffee', '*', 'Dessert', '*', 'Pastries', '*'];

  return (
    <div className="overflow-hidden w-full flex flex-col  bg-zinc-900">
      
      <div
        className="w-full h-[30vw] relative bg-center bg-cover bg-fixed"
        style={{ backgroundImage: "url('images/heroimg2.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
        <div
          className="absolute top-1/3 -translate-y-1/2 whitespace-nowrap flex text-[15vw] tracking-wide uppercase font-light text-[#ddc79f] opacity-35 z-20 px-4"
          ref={scrollRef}
        >
          {items.concat(items).map((item, index) => (
            <span key={index} className="mx-4">
              {item}
            </span>
          ))}
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 w-[90%] md:w-[70%] text-center">
          <h1 className="text-[#b8f7f2] text-lg md:text-2xl font-normal leading-relaxed">
            At Brewbella, every sip is a journey — <br className="hidden sm:block" />
            from bold, roasted roots to the delicate aromas of our signature blends.
          </h1>
        </div>
      </div>

      <AllMenu />
    </div>
  );
}

export default Menu;
