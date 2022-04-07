import randomBytesJs from "random-bytes-js";
import React from "react";
import { useAuth } from "src/core/redux/reducer/auth";

const AuthButton = () => {
  const { authenticated } = useAuth();
  const handleAuth = () => {
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirect_uri = window.location.origin;
    const state = randomBytesJs.randHex(8);

    localStorage.setItem("spotify-client", state);
    const scope = "playlist-modify-private";

    const targetURL = new URL("https://accounts.spotify.com/authorize");
    targetURL.searchParams.set("response_type", "token");
    targetURL.searchParams.set("client_id", client_id);
    targetURL.searchParams.set("scope", scope);
    targetURL.searchParams.set("redirect_uri", redirect_uri);
    targetURL.searchParams.set("state", state);

    window.location = targetURL.href;
  };

  const handleLogout = () => {
    window.location = "/";
  };

  if (!authenticated)
    return (
      <button className="login-btn" onClick={handleAuth}>
        Login
      </button>
    );
  else
    return (
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    );
};

export default AuthButton;
