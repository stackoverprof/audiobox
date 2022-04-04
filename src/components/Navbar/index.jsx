import React from "react";
import useUser from "../../swr/user";
import AuthButton from "./AuthButton";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="navbar">
      <h1>Gigih Homework</h1>
      <div className="nav-buttons">
        {user && <p className="nav-greeting">Hello, {user.display_name}</p>}
        <button className="btn">Home</button>
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;
