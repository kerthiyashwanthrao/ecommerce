import { createContext, useState } from "react";

export const ShoppingCartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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

  const removeItemQuantityFromCart = (productId) => {
    setCart((prevCart) => {
      const product = prevCart.find((item) => item.id === productId);
      if (product) {
        if (product.quantity > 1) {
          return prevCart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          return prevCart.filter((item) => item.id !== productId);
        }
      } else {
        return prevCart;
      }
    });
  };


  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };


  // const updateQuantity = (id, quantity) => {
  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
  //     )
  //   );
  // };

  const getTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity, 10);

      // console.log(`Item: ${item.name}, Price: ${price}, Quantity: ${quantity}`);

      return total + price * quantity;
    }, 0);
  };


  return (
    <ShoppingCartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotal, setCart, removeItemQuantityFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
