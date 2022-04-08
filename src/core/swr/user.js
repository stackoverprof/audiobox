import useSWR, { useSWRConfig } from 'swr';
import axiosSpotify from 'src/core/utils/axios-spotify';
import { useAuth } from '../redux/reducer/auth';
import { useEffect } from 'react';

const userFetcher = async () => {
	const result = await axiosSpotify.get('/me').then((res) => res.data);
	return result;
};

export default function useUser() {
	const { cache } = useSWRConfig();
	const { data, mutate, error } = useSWR('api_user', userFetcher);
	const { authenticated } = useAuth();

	useEffect(() => {
		if (authenticated) mutate();
		else cache.delete('api_user');
	}, [authenticated]);

	return {
		loading: !data && !error,
		error: error && error.status === 403,
		user: data,
		mutate,
	};
}
