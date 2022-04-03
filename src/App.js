import React, { useState, useEffect } from "react";
import "./styles.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import getParams from "./utils/get-params";
import axiosSpotify from "./utils/axios-spotify";

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const populateUserData = async () => {
    const userData = await axiosSpotify.get("/me").then((res) => res.data);
    setUser(userData);
  };

  useEffect(() => {
    if (window.location.hash) {
      const params = getParams(window.location.hash);
      if (!params.access_token) return;
      localStorage.setItem("access_token", params.access_token);
      setToken(params.access_token);
      populateUserData();
    } else {
      setToken("");
      localStorage.removeItem("access_token");
    }
  }, []);

  return (
    <div className="App">
      <Navbar token={token} />
      <Home token={token} user={user} />
    </div>
  );
};

export default App;
