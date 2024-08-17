import { createContext, useState } from "react";

export const ShoppingCartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(['hi']);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isProductExist = prevCart.find((item) => item.id === product.id);
      if (isProductExist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, getTotal,setCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
