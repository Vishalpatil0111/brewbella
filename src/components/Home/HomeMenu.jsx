
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';


function HomeMenu() {


  const Navigate = useNavigate()
  const handleMenu = (category) => {
    Navigate(`/menu/${category}`);
  }
  const menuItems = [
    {
      title: "Coffees",
      subtitle: "Rich Aromatic Brews",
      image: "/images/menucoffee.jpg", 
    },
    {
      title: "Dessert",
      subtitle: "Sweet Indulgent Treats",
      image: "/images/menudessert.jpg",
    },
    {
      title: "Pastry",
      subtitle: "Freshly Baked Goodness",
      image: "/images/pastry.jpeg",
    },
  ];
  return (
    <div className='w-full h-fit bg-zinc-900 md:py-20 md:px-20'>
      <div className='w-full  p-5 md:mt-5 hover:translate-y-2 transition-all ease-in-out duration-500  flex flex-col gap-10 ' >
        {menuItems.map((item, index) => (
          <div key={index} className='group w-full px-3  md:p-7 rounded-md flex flex-col gap-5 md:flex-row justify-between items-center hover:translate-y-4 transition-all ease-in-out duration-500 delay-75 hover:border  hover:border-[#ddc79f] hover:bg-zinc-800'>
            <div className='md:w-55 md:h-35 w-full h-60 rounded-md overflow-hidden '>
              <img className='w-full h-full object-cover' src={item.image} alt="" />
            </div>
            <div className=' md:mt-0 h-full  flex items-center  flex-col  text-[#ddc79f]'>
              <h1 className='text-[7vw] md:text-[4.5vw] font-medium'>{item.title}</h1>
              <h5 className=' text-lg md:text-md leading-0'>{item.subtitle}</h5>
            </div>
            <button
              onClick={() => handleMenu(item.title.toLowerCase())}
              className='px-10 text-zinc-950 rounded-sm py-2 font-semibold bg-[#ddc79f] flex flex-row'>
              Menu
            </button>
          </div>
        ))}


      </div>
    </div>
  )
}

export default HomeMenu
