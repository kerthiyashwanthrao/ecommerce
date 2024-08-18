import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import "./ProductCard.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const ProductCard = (props) => {
  const itemData = props.itemData;
  const { cart, addToCart } = useContext(ShoppingCartContext);
  const [open, setOpen] = useState(false);

  const findQuantity = cart.find((item) => item.id === itemData.id);
  console.log(findQuantity, "quant");

  const addToCartBtn = () => {
    setOpen(true);
    addToCart(itemData);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className="card"
      style={{
        maxHeight: "800px",
        margin: "20px",
        padding: "10px",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <img
          width={200}
          height={200}
          alt={itemData.title}
          src={itemData.image}
        />
        <h1 style={{ width: "250px", fontSize: "22px", overflow: "none" }}>
          {itemData.title}
        </h1>
        <h2 style={{ fontFamily: "monospace" }}>
          Price : ₹ {itemData.price} /-
        </h2>
      </div>

      <button className="add-to-cart-btn" onClick={() => addToCartBtn()}>
        {itemData.quantity >= 1 ? "Added" : "Add to cart"}
      </button>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        // message="Item added to cart"
      >
        <Alert variant="filled" severity="success">
          Item added to cart.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ProductCard;
