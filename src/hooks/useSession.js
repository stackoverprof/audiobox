import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useUser from "../swr/user";
import { syncToken } from "../redux/actions/auth";

const useSession = () => {
  const dispatch = useDispatch();
  const { mutate } = useUser();

  return useEffect(() => {
    dispatch(syncToken());
    mutate();
  }, [dispatch, mutate]);
};

export default useSession;
