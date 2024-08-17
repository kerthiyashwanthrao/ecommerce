import React, { useEffect, useState, useContext } from "react";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const Home = () => {
  const products = useContext(ShoppingCartContext);
  const { cart, addToCart, removeFromCart, updateQuantity, getTotal, setCart } =
    products;

  console.log(products);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setCart([...data]);
    console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cart.map((item) => (
        <ProductCard key={item.id} itemData={item} />
      ))}
    </div>
  );
};

export default Home;
