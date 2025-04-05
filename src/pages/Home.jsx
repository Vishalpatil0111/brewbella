import React from 'react'
import Hero from '../components/Home/Hero'
import InfoProd from '../components/InfoProd';
import MouseParallax from '../components/Home/MouseParallax';
import HomeMenu from '../components/Home/HomeMenu';





function Home() {
  return (
    <div className='w-full '> 
      <Hero/>
      <InfoProd/>
      <MouseParallax/>
      <HomeMenu/>
    </div>




  );
}

export default Home;
