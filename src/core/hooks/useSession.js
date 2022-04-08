import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { syncToken } from 'src/core/redux/actions/auth';

const useSession = () => {
	const dispatch = useDispatch();

	return useEffect(() => {
		dispatch(syncToken());
	}, [dispatch]);
};

export default useSession;
