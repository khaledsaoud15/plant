import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-footer">
        <h1>logo</h1>
      </div>
      <div className="canter-footer">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
        <a href="">items</a>
        <a href="">profile</a>
        <a href="">shop</a>
      </div>
      <div className="right-footer">
        <input type="text" placeholder="Subsecribe..." />
        <button>Join Now</button>
      </div>
    </div>
  );
};

export default Footer;
