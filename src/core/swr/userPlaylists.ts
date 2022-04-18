import * as fetchers from '@core/api/fetchers';
import useSWR, { useSWRConfig } from 'swr';

const useUserPlaylist = () => {
	const { cache } = useSWRConfig();
	const { data, mutate, error } = useSWR('user_playlist', fetchers.getUserPlaylist);

	const preprocess = () => {
		const user = cache.get('api_user');
		const owned_only = user?.id ? data.filter((x) => x.owner.id === user.id) : data;
		return owned_only;
	};

	return {
		loading: !data && !error,
		error: error && error.status === 403,
		data: data ? preprocess() : [],
		mutate,
	};
};

export default useUserPlaylist;
