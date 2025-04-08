import React from 'react';

function ProductCard({ title, description, image }) {
  return (
    <div className="w-full max-w-[320px] mx-auto bg-zinc-800 rounded-lg overflow-hidden shadow-md p-4 hover:p-0 ease-in  transition-all items-start duration-300 flex flex-col">
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg text-[#ddc79f] font-semibold mb-1">{title}</h3>
          <p className="text-zinc-300 text-sm">{description}</p>
        </div>

        <button className="mt-4 bg-[#ddc79f] text-zinc-900 px-4 py-2 rounded hover:bg-[#c7b58c] font-semibold">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
