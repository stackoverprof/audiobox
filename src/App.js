import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { syncToken } from "./redux/actions/auth";
import Home from "./pages/home";
import CreatePlaylist from "./pages/create-playlist";
import { useAuth } from "./redux/reducer/auth";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./style/tailwind.css";

const App = () => {
  const dispatch = useDispatch();
  const { authenticated } = useAuth();

  useEffect(() => {
    dispatch(syncToken());
  }, [dispatch]);

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
