import React from "react";
import Home from "./pages/home";
import CreatePlaylist from "./pages/create-playlist";
import { useAuth } from "./redux/reducer/auth";
import useSession from "./hooks/useSession";
import "./style/tailwind.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  // AUTH STATUS
  const { authenticated } = useAuth();

  // CUSTOM HOOK FOR AUTHENTICATION WITH TOKEN
  useSession();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {!authenticated ? <Home /> : <Redirect to="/create-playlist" />}
          </Route>
          <Route path="/create-playlist" exact>
            {authenticated ? <CreatePlaylist /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
