import React from 'react'
import { useCart } from '../context/CartContext';
import PaymentCheckout from '../components/PaymentCheckout';
function CheckOut() {
  
    const { totalPrice } = useCart(); // 🔥 Real dynamic total

    return (
      <div className="min-h-screen bg-[#fefcf7] p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
  
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
         
          <div className="bg-white p-6 rounded-xl shadow-md flex-1">
            <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Shipping Address"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </form>
          </div>
  
          {/* Payment Section */}
          <div className="flex-1">
            <PaymentCheckout total={totalPrice} />
          </div>
        </div>
      </div>
  )
}

export default CheckOut
