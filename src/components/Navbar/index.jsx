import React from "react";
import AuthButton from "./AuthButton";

const Navbar = ({ token }) => {
  return (
    <nav className="navbar">
      <h1>Gigih Homework</h1>
      <div className="nav-buttons">
        <button className="btn">Home</button>
        <AuthButton token={token} />
      </div>
    </nav>
  );
};

export default Navbar;
