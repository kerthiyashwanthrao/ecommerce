import { createContext, useState } from "react";

export const ShoppingCartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState();

  const setCartProducts = () => {
    setProducts();
  };

  return (
    <ShoppingCartContext.Provider value={{ products, setCartProducts }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
