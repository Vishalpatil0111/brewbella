import React from 'react';
import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';

const CartSideBar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty, cartCount, totalPrice } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 max-w-full bg-zinc-900 text-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-2xl font-semibold text-[#ddc79f]">Your Cart</h2>
        <button onClick={onClose}>
          <X className="text-white hover:scale-110 transition" />
        </button>
      </div>

      {/* Scrollable Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[calc(100%-200px)]">
        {cartItems.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (
          cartItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white p-3 rounded-lg shadow text-black"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-base">{item.title}</h3>
                <p className="text-sm text-gray-600">₹{item.price}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => decreaseQty(item.title)}
                    className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.title)}
                    className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.title)}
                className="text-red-500 hover:text-red-700 text-xl"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer - fixed bottom */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex justify-between text-lg mb-2">
          <span>Total Items:</span>
          <span>{cartCount}</span>
        </div>
        <div className="flex justify-between text-lg mb-4">
          <span>Total Price:</span>
          <span>₹{totalPrice}</span>
        </div>
        <button
          className="w-full bg-[#ddc79f] hover:bg-[#c7b48e] text-black py-2 rounded-lg font-semibold transition"
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSideBar;
