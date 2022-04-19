// [README] : mounted to the root App.tsx, this hook will handle all authentication synchronization

import { useEffect } from 'react';
import { syncToken } from '@core/redux/actions/auth';
import { useDispatch } from 'react-redux';

const useSession = () => {
	const dispatch = useDispatch();

	// TRIGGER CALLS REDUX ACTIONS
	useEffect(() => {
		// syncToken login is happening inside the redux action, not here
		dispatch(syncToken());
	}, [dispatch]);
};

export default useSession;
