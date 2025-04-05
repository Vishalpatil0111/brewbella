import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "../Navbar";

const Hero = () => {
  const heroRef = useRef(null);
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);
  const subtextRef = useRef(null);


  useEffect(() => {


    // Headings Animation
    gsap.from(headingRef1.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.from(headingRef2.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.7,
    });

    // Subtext Animation
    gsap.from(subtextRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.out",
      delay: 1,
    });
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full h-screen relative flex flex-col justify-center items-center bg-center bg-cover bg-fixed"
      style={{
        backgroundImage: "url('https://png.pngtree.com/background/20220714/original/pngtree-coffee-tile-brown-background-picture-image_1621578.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Navbar */}
      <div  className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center w-full px-4 sm:px-8 md:px-12 lg:px-16">
        <h1
          ref={subtextRef}
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wider text-[#E5DBC9]"
        >
          You are always welcome!
        </h1>

        <div className="w-full flex flex-col py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12">
          <h1
            ref={headingRef1}
            className="text-[12vw] sm:text-[10vw] md:text-[7vw] lg:text-[6vw] font-bold tracking-wide text-[#ada69b] leading-tight"
          >
            Fueling Your Day,
          </h1>
          <h1
            ref={headingRef2}
            className="text-[12vw] sm:text-[10vw] md:text-[7vw] lg:text-[6vw] font-light tracking-wide text-[#E5DBC9] leading-tight text-center"
          >
            Choco Brew Way!!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
