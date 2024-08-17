import React, { useEffect, useState, useContext } from "react";
import ProductCard from "./components/ProductCard";
import { CartProvider } from "./Context/ShoppingCartContext";
import { ShoppingCartContext } from "./Context/ShoppingCartContext";

const App = () => {
  const [productsList, setProductsList] = useState([]);
  const products = useContext(ShoppingCartContext);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProductsList([...data]);
    console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <CartProvider>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {productsList.map((item) => (
          <ProductCard key={item.id} itemData={item} />
        ))}
      </div>
    </CartProvider>
  );
};

export default App;
