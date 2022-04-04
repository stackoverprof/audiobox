import useSWR from "swr";
import axiosSpotify from "../utils/axios-spotify";

const userFetcher = async () => {
  const result = await axiosSpotify.get("/me").then((res) => res.data);
  return result;
};

export default function useUser() {
  const { data, mutate, error } = useSWR("api_user", userFetcher);

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
}
