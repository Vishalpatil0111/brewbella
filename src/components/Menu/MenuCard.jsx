import React from 'react';

const MenuCard = ({ title, description, image }) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#ddc79f] bg-transparent">
      
      <div className="relative z-10 flex flex-col items-center text-center py-6">
        <h1 className="text-2xl md:text-3xl text-white md:text-[#ddc79f]  font-semibold group-hover:text-white transition duration-300">
          {title}
        </h1>
        <p className="text-white md:text-[#ddc79f] mt-2 text-sm group-hover:text-white transition duration-300">
          {description}
        </p>
      </div>

     
      <div className="absolute top-0  w-full h-full transition-all duration-500 ease-in-out z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
       
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-300"></div>
      </div>
    </div>
  );
};

export default MenuCard;
