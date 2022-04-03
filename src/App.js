import React, { useState, useEffect } from "react";
import "./styles.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import getParams from "./utils/get-params";

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (window.location.hash) {
      const params = getParams(window.location.hash);
      if (params.access_token) setToken(params.access_token);
    } else {
      setToken("");
    }
  }, []);

  return (
    <div className="App">
      <Navbar token={token} />
      <Home token={token} />
    </div>
  );
};

export default App;
