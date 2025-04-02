import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroAnimation = () => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom+=300%", // Controls how long it stays pinned
        scrub: 1,
        pin: true, // This pins the entire section
        anticipatePin: 1,
      },
    });

    imagesRef.current.forEach((img, index) => {
      tl.fromTo(
        img,
        { y: 150, opacity: 0 },
        { y: -150, opacity: 1, duration: 2 },
        index * 0.5
      ).to(img, { opacity: 0, y: -250, duration: 2 }, `+=1`);
    });

  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen flex items-center justify-center">
      <div className="hidden opacity-90 md:block w-full h-full">
        <img
          ref={(el) => (imagesRef.current[0] = el)}
          className="absolute left-1/5 w-[12rem] top-20 h-[6rem] object-cover"
          src="/images/heroimg4.webp"
          alt=""
        />
        <img
          ref={(el) => (imagesRef.current[1] = el)}
          className="absolute bottom-30 left-15 w-[12rem] h-[10rem] object-cover"
          src="/images/heroimg1.webp"
          alt=""
        />
        <img
          ref={(el) => (imagesRef.current[2] = el)}
          className="absolute right-30 w-[20rem] h-[14rem] object-cover"
          src="/images/heroimg2.webp"
          alt=""
        />
        <img
          ref={(el) => (imagesRef.current[3] = el)}
          className="absolute left-1/3 w-[10rem] bottom-0 h-[10rem] object-cover"
          src="/images/heroimg3.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroAnimation;
