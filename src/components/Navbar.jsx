import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";

const Navbar = () => {
  const value = useContext(ShoppingCartContext);
  const { cart } = value;
  return (
    <ul className="navbar">
      <li>
        <Link className="navbar" to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link className="navbar" to={"/cart"}>
          <Badge
            badgeContent={cart.length === 0 ? "0" : cart.length}
            color="primary"
          >
            <ShoppingCartIcon color="#ffffff" />
          </Badge>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
