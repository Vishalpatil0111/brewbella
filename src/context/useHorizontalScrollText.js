import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useHorizontalScrollText = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    gsap.to(el, {
      x: "-50%",           
      duration: 20,       
      ease: "linear",      
      repeat: -1,         
      yoyo: true,          
    });
  }, []);

  return scrollRef;
};
