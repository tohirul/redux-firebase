import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { clearNotification, showNotification } from "./features/uiSlice";
let isFirstRender = true;
function App() {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    const clear = () => {
      dispatch(clearNotification());
      console.log("clear");
    };

    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    const sendRequest = async () => {
      const url =
        "https://redux-http-e4fca-default-rtdb.firebaseio.com/cartItems.json";
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      dispatch(
        showNotification({
          open: true,
          message: "sending request",
          type: "warning",
        })
      );
      const data = await response.json();
      const delaySuccess = () => {
        dispatch(
          showNotification({
            open: true,
            message: "sent request to database successfully",
            type: "success",
          })
        );
      };
      setTimeout(delaySuccess, 1000);
      setTimeout(clear, 2000);
    };
    sendRequest().catch((err) => {
      dispatch(
        showNotification({
          open: true,
          message: "sending request to database failed",
          type: "error",
        })
      );
    });
  }, [cart, dispatch]);

  return <div className="App">{!loggedIn ? <Auth /> : <Layout />}</div>;
}

export default App;
