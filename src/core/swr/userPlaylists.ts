import * as fetchers from '@core/api/fetchers';
import useSWR, { useSWRConfig } from 'swr';

const useUserPlaylist = () => {
	const { cache } = useSWRConfig();
	const { data, mutate, error } = useSWR('user_playlist', fetchers.getUserPlaylist);
	const user = cache.get('api_user');

	return {
		loading: !data && !error,
		error: error && error.status === 403,
		data: data ? data.filter((x) => x.owner.id === user.id) : [],
		mutate,
	};
};

export default useUserPlaylist;
