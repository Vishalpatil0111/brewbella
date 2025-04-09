import React, { useState } from 'react';
import { useHorizontalScrollText } from '../context/useHorizontalScrollText';
import AllMenu from '../components/Menu/AllMenu';
import CartSideBar from '../components/CartSideBar';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const scrollRef = useHorizontalScrollText();
  const items = ['Menu', '*', 'Coffee', '*', 'Dessert', '*', 'Pastries', '*'];
  const navigate = useNavigate()
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <div className="overflow-hidden w-full flex flex-col bg-zinc-900 relative">

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
        <div className="absolute hidden md:block bottom-6 lg:bottom-10 left-1/2 transform -translate-x-1/2 z-30 w-[90%] md:w-[70%] text-center">
          <h1 className="text-[#b8f7f2] text-lg md:text-2xl font-normal leading-relaxed">
            At Brewbella, every sip is a journey — <br className="hidden sm:block" />
            from bold, roasted roots to the delicate aromas of our signature blends.
          </h1>
        </div>
      </div>
      <div className="w-full px-6 mt-6 flex justify-center">
        <button
          onClick={() => navigate('/')}
          className="bg-[#ddc79f] hover:bg-[#c7b48e] text-black px-4 py-2 rounded-full shadow-md transition-all"
        >
          ← Back Home
        </button>
      </div>

      {/* Menu Items */}
      <AllMenu />

      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#7A6A58] hover:bg-[#5d4f44] text-white p-4 rounded-full shadow-lg transition-all"
      >
        <ShoppingCart className="w-6 h-6" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-0.5 rounded-full text-white font-bold">
            {cartCount}
          </span>
        )}
      </button>
      {/* Cart Sidebar */}
      <CartSideBar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default Menu;
