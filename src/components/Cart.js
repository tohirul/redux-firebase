import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../features/cartSlice";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const handleShowCart = (e) => {
    e.preventDefault();
    dispatch(setShowCart());
  };
  return (
    <div className="cartIcon">
      <h3 onClick={handleShowCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
