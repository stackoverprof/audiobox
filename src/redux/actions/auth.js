import axiosSpotify from "../../utils/axios-spotify";
import getParams from "../../utils/get-params";
import { removeToken, setToken, setUser } from "../reducer/auth";

export const syncToken = () => async (dispatch) => {
  if (window.location.hash) {
    const params = getParams(window.location.hash);
    if (!params.access_token) return;
    localStorage.setItem("access_token", params.access_token);
    dispatch(setToken(params.access_token));
    dispatch(populateUserData());
  } else {
    dispatch(removeToken());
    localStorage.removeItem("access_token");
  }
};

export const populateUserData = () => async (dispatch) => {
  const userData = await axiosSpotify.get("/me").then((res) => res.data);
  dispatch(setUser(userData));
};
