import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useOrder } from '../components/Menu/OrderContext';
import { useCart } from '../context/CartContext';

const dummyProducts = {
  coffees: [
    { title: 'Espresso', image: '/images/menucoffee.jpg', price: 120 },
    { title: 'Latte', image: '/images/menucoffee.jpg', price: 150 }
  ],
  dessert: [
    { title: 'Chocolate Cake', image: '/images/menudessert.jpg', price: 200 },
    { title: 'Tiramisu', image: '/images/menudessert.jpg', price: 220 }
  ],
  pastry: [
    { title: 'Croissant', image: '/images/pastry.jpeg', price: 100 },
    { title: 'Danish', image: '/images/pastry.jpeg', price: 110 }
  ]
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { addToCart, removeFromCart, cartItems } = useCart()

  const products = dummyProducts[categoryName] || [];

  const handleClose = () => {
    navigate('/menu', { state: { fromCategory: true } });
  };

  const isPlaced = (title) => {
    return cartItems.some(item => item.title === title);
  };


  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full h-full bg-zinc-900 text-white px-6 py-8 overflow-y-auto z-50"
    >
      <button
        onClick={handleClose}
        className="absolute top-4 right-6 text-4xl text-[#ddc79f] hover:scale-125 transition"
      >
        ✕
      </button>

      <h1 className="text-4xl mb-8 font-semibold text-[#ddc79f] capitalize">{categoryName}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => {
          const placed = isPlaced(product.title);
          return (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden text-black shadow-md"
            >
              <img src={product.image} alt={product.title} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-md text-zinc-700 mb-4">₹{product.price}</p>
                <button
                  onClick={() => {
                    if (isPlaced(product.title)) {
                      removeFromCart(product.title);
                    } else {
                      addToCart(product);
                    }
                  }}
                  className={`w-full py-2 rounded-lg text-white font-semibold transition duration-300 ${isPlaced(product.title)
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-[#ddc79f] hover:bg-[#c7b48e]'
                    }`}
                >
                  {isPlaced(product.title) ? 'Placed' : 'Place Order'}
                </button>

              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CategoryPage;
