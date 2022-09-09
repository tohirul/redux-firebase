import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemList);
  console.log(cartItems.length);
  return (
    cartItems.length > 0 && (
      <div className="cart-container">
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map((item, idx) => (
            <li key={idx}>
              <CartItem
                id={item.id}
                price={item.price}
                name={item.name}
                total={item.totalPrice}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default CartItems;
