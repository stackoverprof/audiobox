import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  authenticated: "",
  token: "",
  user: {},
};

const ReduxSlice = createSlice({
  name: "AUTH",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.authenticated = true;
    },
    removeToken: (state) => {
      state.token = "";
      state.authenticated = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, removeToken, setUser } = ReduxSlice.actions;
export const useAuth = () => useSelector((RootState) => RootState.auth);
export default ReduxSlice.reducer;
