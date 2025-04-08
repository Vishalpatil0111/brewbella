import React from 'react';
import MenuCard from './MenuCard';
import { useHorizontalScrollText } from '../../context/useHorizontalScrollText';

const menuItems = [
    {
        title: 'Coffees',
        description: 'Rich Aromatic Brews',
        image: '/images/menucoffee.jpg',
    },
    {
        title: 'Dessert',
        description: 'Nutrient-Packed Blends',
        image: '/images/menudessert.jpg',
    },
    {
        title: 'Pastry',
        description: 'Refreshing Liquid Delights',
        image: '/images/pastry.jpeg',
    },
];
const items = ["-","*","Menu","*","-","*","Menu","*"];

const AllMenu = () => {
    const scrollRef = useHorizontalScrollText();
    return (
        <div className='w-full h-screen flex flex-col'>
            <div
                className=" whitespace-nowrap  flex text-[6vw] tracking-wide uppercase font-light text-[#ddc79f] opacity-85 z-20 px-4"
                ref={scrollRef}
            >
                {items.concat(items).map((item, index) => (
                    <span key={index} className="mx-4">
                        {item}
                    </span>
                ))}
            </div>
            <div className="w-full h-full py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems.map((item, index) => (
                    <MenuCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllMenu;
