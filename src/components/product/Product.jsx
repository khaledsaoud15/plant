import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fakeData } from "../../fake";
import { addToCart } from "../../redux/productSlice";
import "./single.css";

const Product = () => {
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.product.products);
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const item = fakeData.find((item) => item.id == id);
    setProduct(item);
  }, []);

  const incrementDecrement = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const addToCartItem = (id) => {
    if (!user) {
      navigate("/register");
      // cart = cart;
    }
    const find = fakeData.find((f) => f.id === id);
    const index = cart.find((c) => c.id === find.id);
    if (!index) {
      dispatch(addToCart({ ...find, quantity }));
    }
  };

  return (
    <div className="item">
      <img src={product.img} alt="" />
      <div className="content-product">
        <h1>{product.product}</h1>
        <p>{product.desc}</p>
        <div className="count">
          <button onClick={() => incrementDecrement("dec")}>-</button>
          <h3>{quantity}</h3>
          <button onClick={() => incrementDecrement("inc")}>+</button>
        </div>
        <button className="Add" onClick={() => addToCartItem(product.id)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
