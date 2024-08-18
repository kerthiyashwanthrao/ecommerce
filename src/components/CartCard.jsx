import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./CartCard.css";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";

const CartCard = (props) => {
  const value = useContext(ShoppingCartContext);
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    removeItemQuantityFromCart,
  } = value;
  //   console.log(props, "jdjdjd");

  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "space-between",
        alignItems: "center",
      }}
      className="card"
    >
      <div>
        <img
          width={200}
          height={200}
          alt={props.item.title}
          src={props.item.image}
        />
      </div>
      <div style={{ paddingLeft: "20px" }}>
        <h1>{props.item.title}</h1>
        <p>{props.item.description}</p>
        <h3>Price : ₹ {props.item.price}</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            minWidth: "250px",
            maxWidth: "250px",
            backgroundColor: "#11111",
            justifyContent: "space-between",
          }}
        >
          <button onClick={() => removeItemQuantityFromCart(props.item.id)}>
            <RemoveIcon />
          </button>

          <h3>{props.item.quantity}</h3>
          <button onClick={() => addToCart(props.item)}>
            <AddIcon />
          </button>
          <button
            className="add-to-cart-btn"
            onClick={() => removeFromCart(props.item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
