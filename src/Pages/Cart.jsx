import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import CartCard from "../components/CartCard";
import "./Cart.css";

const Cart = () => {
  const value = useContext(ShoppingCartContext);
  const { cart, getTotal } = value;
  console.log(cart, "ho");

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {cart.map((item) => (
          <CartCard key={item.id} item={item} />
        ))}
      </div>
      <div
        className="card"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "whitesmoke",
        }}
      >
        <h1>Order Total :</h1>
        <h2>₹ {getTotal()} /-</h2>
      </div>
    </>
  );
};

export default Cart;
