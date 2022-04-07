import React from "react";
import { Link } from "react-router-dom";
import useUser from "../../swr/user";
import AuthButton from "./AuthButton";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="navbar">
      <h1>Gigih Homework</h1>
      <div className="nav-buttons">
        {user && <p className="nav-greeting">Hello, {user.display_name}</p>}
        <Link to="/" className="btn">
          Home
        </Link>
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;
