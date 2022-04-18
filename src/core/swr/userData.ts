import * as fetchers from '@core/api/fetchers';
import useSWR from 'swr';

const useUserData = () => {
	const { data, mutate, error } = useSWR('api_user', fetchers.getUser);

	return {
		loading: !data && !error,
		error: error && error.status === 403,
		user: data ? data : {},
		mutate,
	};
};

export default useUserData;
