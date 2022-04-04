import React from "react";
import { useAuth } from "../../redux/reducer/auth";
import AuthButton from "./AuthButton";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <nav className="navbar">
      <h1>Gigih Homework</h1>
      <div className="nav-buttons">
        {user.display_name && (
          <p className="nav-greeting">Hello, {user.display_name}</p>
        )}
        <button className="btn">Home</button>
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;
