import React, { useEffect, useRef } from 'react';
import CategoryButtons from './CategoryButtons';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';

function MenuProduct() {
  const { category } = useParams();
  const productRef = useRef(null);

  useEffect(() => {
    productRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [category]);

  const allProducts = [
    {
      title: "Espresso",
      type: "coffee",
      description: "Strong and rich espresso shot.",
      image: "/images/menucoffee.jpg",
    },
    {
      title: "Espresso",
      type: "coffee",
      description: "Strong and rich espresso shot.",
      image: "/images/menucoffee.jpg",
    },
    {
      title: "Espresso",
      type: "coffee",
      description: "Strong and rich espresso shot.",
      image: "/images/menucoffee.jpg",
    },

    {
      title: "Cappuccino",
      type: "coffee",
      description: "Frothy milk and espresso blend.",
      image: "/images/menucoffee.jpg",
    },
    {
      title: "Chocolate Cake",
      type: "desserts",
      description: "Deliciously moist chocolate cake.",
      image: "/images/menudessert.jpg",
    },
    {
      title: "Croissant",
      type: "pastries",
      description: "Buttery and flaky French pastry.",
      image: "/images/pastry.jpeg",
    },
  ];

  const filteredProducts = allProducts.filter(
    (product) => product.type === category
  );

  return (
    <div ref={productRef} className="w-full p-6 bg-zinc-900 text-white">
      <h1 className="text-[6vw] text-[#ddc79f] text-center">Menu</h1>
      <CategoryButtons />
      <h2 className="text-2xl mb-4 capitalize">{category}</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>

    </div>
  );
}

export default MenuProduct;
