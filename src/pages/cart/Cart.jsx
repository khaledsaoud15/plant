import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/productSlice";
import "./cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.product.products);
  const total = useSelector((state) => state.product.total);
  const dispatch = useDispatch();

  const deleteFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart">
      <div className="cart-container">
        {cart.length == 0 ? (
          <h1>Cart is empty</h1>
        ) : (
          cart.map((c) => {
            return (
              <div className="singleCard">
                <img src={c.img} alt="" />
                <div className="p-t-q">
                  <h1>
                    Title: <span>{c.product}</span>
                  </h1>
                  <h1>quantity: {c.quantity}</h1>
                </div>
                <div className="p-t-q-p">
                  <h1>price: {c.price * c.quantity}</h1>
                  <button
                    onClick={() => {
                      deleteFromCart(c.id);
                    }}
                    className="btn"
                  >
                    Delete from cart
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="right-cart">
        <h1>Total price:{total}</h1>
        <p>shipping info:2514aldk5f2cdi</p>
        <p>address: 251street LA</p>
        <button>Submit payment</button>
      </div>
    </div>
  );
};

export default Cart;
