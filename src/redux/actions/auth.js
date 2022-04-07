import useUser from "../../swr/user";
import getParams from "../../utils/get-params";
import { removeToken, setToken } from "../reducer/auth";

export const syncToken = () => async (dispatch) => {
  const { mutate } = useUser();
  if (window.location.hash) {
    const params = getParams(window.location.hash);
    if (!params.access_token) return;
    localStorage.setItem("access_token", params.access_token);
    dispatch(setToken(params.access_token));
  } else {
    dispatch(removeToken());
    localStorage.removeItem("access_token");
  }
  mutate();
};
