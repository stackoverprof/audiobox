import React, { useEffect } from "react";
import "./styles.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import store from "./redux/store";
import { Provider, useDispatch } from "react-redux";
import { syncToken } from "./redux/actions/auth";
import useUser from "./swr/user";

const App = () => {
  const dispatch = useDispatch();
  const { mutate } = useUser();

  useEffect(() => {
    dispatch(syncToken());
    mutate();
  }, [dispatch, mutate]);

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
};

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ReduxApp;
