import { Close, Menu } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../images/1.png";
import leaf from "../../images/leaf.svg";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const cart = useSelector((state) => state.product.products);
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className={click ? "active" : "nav-links"}>
        <div className="links">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
        </div>
      </div>
      <div className="sign">
        {user ? (
          <div className="cart">
            <NavLink to="/cart">
              <span className="count">{cart.length}</span>
              <img src={leaf} alt="" />
            </NavLink>
          </div>
        ) : (
          <>
            <NavLink to="/login">
              <button className="login">Login</button>
            </NavLink>
            <NavLink to="/register">
              <button className="register">Register</button>
            </NavLink>
          </>
        )}
      </div>
      <div className="ham">
        {click ? (
          <Close
            onClick={() => {
              setClick(!click);
            }}
          />
        ) : (
          <Menu
            onClick={() => {
              setClick(!click);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
