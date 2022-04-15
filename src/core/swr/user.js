import useSWR, { useSWRConfig } from 'swr';
import { useAuth } from '../redux/reducer/auth';
import { useEffect } from 'react';
import { getUser } from '../api/fetchers';

export default function useUser() {
	const { cache } = useSWRConfig();
	const { data, mutate, error } = useSWR('api_user', getUser);
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
