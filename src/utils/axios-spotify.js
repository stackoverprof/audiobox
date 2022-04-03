import axios from "axios";

const axiosSpotify = axios.create();

axiosSpotify.defaults.baseURL = "https://api.spotify.com/v1";

// Request interceptor for API calls
axiosSpotify.interceptors.request.use(
  async (config) => {
    const access_token = localStorage.getItem("access_token");
    config.headers = {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosSpotify;
