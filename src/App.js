import React, { Component } from "react";
import randomBytesJs from "random-bytes-js";
import "./styles.css";
import Home from "./pages/Home";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
    };
  }

  getParams = (url) => {
    const queries = url.substring(1).split("&");
    const params = {};
    queries.forEach((query) => {
      const data = query.split("=");
      if (data.length > 1) params[data[0]] = data[1];
    });
    return params;
  };

  componentDidMount() {
    if (window.location.hash) {
      const params = this.getParams(window.location.hash);
      this.setState({ token: params.access_token });
    }
  }

  handleAuth = () => {
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

  render() {
    return (
      <div className="App">
        <div className="login-area">
          <button className="login-btn" onClick={this.handleAuth}>
            LOGIN
          </button>
        </div>
        <Home token={this.state.token} />
      </div>
    );
  }
}

export default App;
