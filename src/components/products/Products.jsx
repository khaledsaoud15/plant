import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fakeData } from "../../fake";
import { addToCart } from "../../redux/productSlice";
import "./product.css";

const Products = () => {


  return (
    <div className="container-1">
      {fakeData.map((d, index) => {
        return (
          <div className="cart-1" key={index}>
            <div className="card">
              <img src={d.img} />
              <div className="content">
                <h1>
                  product: <span>{d.product}</span>
                </h1>
                <p>/price: {d.price}$</p>
              </div>
              <NavLink to={`/products/${d.id}`}>
                <button>View</button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
