import { createContext, useContext, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

// Create Context
const AnimationContext = createContext();

// Animation Provider
export const AnimationProvider = ({ children }) => {
  useEffect(() => {
    gsap.defaults({ ease: "power2.out", duration: 0.5 }); // Set global GSAP defaults
  }, []);

  return (
    <AnimationContext.Provider value={{ gsap, motion }}>
      {children}
    </AnimationContext.Provider>
  );
};


export const useAnimations = () => useContext(AnimationContext);
