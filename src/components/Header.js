import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { useDispatch } from "react-redux";
import { logOut } from "../features/authSlice";
const Header = () => {
  const dispatch = useDispatch();
  const handleLogOut = (e) => {
    e.preventDefault();
    console.log("clicked");
    dispatch(logOut());
  };
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button className="logout-btn" onClick={handleLogOut}>
              Log out
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
