import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const images = [
  { id: 1, img: "/images/heroimg1.webp" },
  { id: 2, img: "/images/heroimg2.webp" },
  { id: 3, img: "/images/heroimg3.webp" },
];

function MouseParallax() {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(0);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;

    const resize = () => {
      const imgBox = inner.querySelector(".image-box");
      if (imgBox) {
        setImageWidth(imgBox.offsetWidth + 40); // 40 = gap
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      const { left, width } = container.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const percent = mouseX / width;

      const centerImageIndex = 1;
      const centerOffset = (imageWidth * centerImageIndex) - (container.offsetWidth / 2) + (imageWidth / 2);

      const maxTranslateX = inner.scrollWidth - container.offsetWidth;
      let translateX = -maxTranslateX * percent + centerOffset;

      // Clamp
      translateX = Math.max(-maxTranslateX, Math.min(0, -translateX));

      gsap.to(inner, {
        x: translateX,
        duration: 1.5,
        ease: "power3.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, [imageWidth]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#D3C5AC] flex items-center justify-center"
    >
      <div ref={innerRef} className="flex w-max gap-10 px-10">
        {images.map((item, index) => (
          <div
            key={item.id}
            className={`image-box flex-shrink-0 overflow-hidden rounded-xl shadow-lg
           ${index === 1 ? "z-10" : "z-0"}
           w-[90vw] h-[90vw] sm:w-[70vw] sm:h-[70vw] md:w-[45vw] md:h-[45vw] lg:w-[40vw] lg:h-[40vw]
         `}
          >

            <img
              className="w-full h-full object-cover"
              src={item.img}
              alt={`img-${item.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MouseParallax;
