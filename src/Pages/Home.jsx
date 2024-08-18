import React, { useEffect, useState, useContext } from "react";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const Home = () => {
  const [items, setItems] = useState([]);
  const products = useContext(ShoppingCartContext);
  const { cart, addToCart, removeFromCart, updateQuantity, getTotal, setCart } =
    products;

  // console.log(products);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setItems([...data]);
    // console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {items.map((item) => (
          <ProductCard key={item.id} itemData={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
