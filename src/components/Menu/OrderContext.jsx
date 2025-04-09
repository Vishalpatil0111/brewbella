import { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState({});

  const toggleOrder = (title) => {
    setOrders((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };


  const isPlaced = (title) => !!orders[title];

  return (
    <OrderContext.Provider value={{ orders, toggleOrder, isPlaced }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
