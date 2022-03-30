import React, { Component } from "react";
import SearchBox from "./components/SearchBox";
import TrackCard from "./components/TrackCard";
import axios from "axios";
import randomBytesJs from "random-bytes-js";
import "./styles.css";
import tracks_data from "./data/tracks";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      searchResult: [],
      searchQuery: "",
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

  onChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSearch = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        Authorization: "Bearer " + this.state.token,
      },
      params: {
        type: "track",
        q: this.state.searchQuery,
      },
    };

    const result = await axios
      .get("https://api.spotify.com/v1/search", config)
      .then((res) => res.data.tracks.items);

    this.setState({ searchResult: result });
  };

  handleAuth = () => {
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirect_uri = "http://localhost:3000";
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
        <div className="app-control">
          <button className="login-btn" onClick={this.handleAuth}>
            LOGIN
          </button>
          <SearchBox
            value={this.state.searchQuery}
            onChange={this.onChange}
            onSubmit={this.handleSearch}
          />
        </div>
        <div className="table">
          {this.state.searchResult.map((data, i) => (
            <TrackCard
              img={data.album.images[0].url}
              name={data.name}
              artists={data.artists}
              album_name={data.album.name}
              key={i}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
