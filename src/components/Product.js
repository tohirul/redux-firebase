import React from "react";

import "./Product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const handleCart = (e) => {
    e.preventDefault();
    const newProduct = {
      id,
      name,
      price,
    };
    dispatch(addToCart(newProduct));
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleCart}>Add to cart</button>
    </div>
  );
};

export default Product;
