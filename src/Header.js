import React from "react";
import "./Header.css";

function Header({ username }) {
  return (
    <div className="header">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt="Facebook Messenger Logo"
      />
      <h2>Welcome {username || "Guest"}</h2>
    </div>
  );
}

export default Header;
