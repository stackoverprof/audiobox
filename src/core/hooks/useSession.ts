import { useEffect } from 'react';
import useUserData from '@core/swr/userData';
import { syncToken } from '@core/redux/actions/auth';
import { useDispatch } from 'react-redux';

const useSession = () => {
	const dispatch = useDispatch();

	// LOAD USER DATA (SWR)
	useUserData();

	// TRIGGER CALLING SYNC TOKEN FUNCTION
	useEffect(() => {
		dispatch(syncToken());
	}, [dispatch]);
};

export default useSession;
