import React, { Component } from "react";
import "./styles.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import getParams from "./utils/get-params";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
    };
  }

  componentDidMount() {
    if (window.location.hash) {
      const params = getParams(window.location.hash);
      this.setState({ token: params.access_token });
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Home token={this.state.token} />
      </div>
    );
  }
}

export default App;
