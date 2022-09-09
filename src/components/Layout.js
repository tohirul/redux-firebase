import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import Notifications from "./Notifications";
const Layout = () => {
  let total = 0;
  const showCart = useSelector((state) => state.cart.showCart);
  const cartItems = useSelector((state) => state.cart.itemList);
  const notification = useSelector((state) => state.ui.notification);
  cartItems.forEach((item) => {
    total += item.totalPrice;
  });
  return (
    <React.Fragment>
      <div className="layout">
        {notification !== null && (
          <Notifications
            type={notification.type}
            message={notification.message}
          ></Notifications>
        )}
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
