import useSWR from "swr";
import axiosSpotify from "src/core/utils/axios-spotify";

const userFetcher = async () => {
  const result = await axiosSpotify.get("/me").then((res) => res.data);
  return result;
};

export default function useUser() {
  const { data, mutate, error } = useSWR("api_user", userFetcher);

  return {
    loading: !data && !error,
    error: error && error.status === 403,
    user: data,
    mutate,
  };
}
