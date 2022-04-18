import { useEffect } from 'react';
import { syncToken } from '@core/redux/actions/auth';
import { useDispatch } from 'react-redux';

const useSession = () => {
	const dispatch = useDispatch();

	// TRIGGER CALLING SYNC TOKEN FUNCTION
	useEffect(() => {
		dispatch(syncToken());
	}, [dispatch]);
};

export default useSession;
