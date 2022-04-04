import React from "react";
import AuthButton from "./AuthButton";

const Navbar = ({ token, user }) => {
  return (
    <nav className="navbar">
      <h1>Gigih Homework</h1>
      <div className="nav-buttons">
        {user.display_name && (
          <p className="nav-greeting">Hello, {user.display_name}</p>
        )}
        <button className="btn">Home</button>
        <AuthButton token={token} />
      </div>
    </nav>
  );
};

export default Navbar;
