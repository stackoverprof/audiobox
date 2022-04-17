import * as fetchers from '@core/api/fetchers';
import useSWR from 'swr';

export default function useUserPlaylist() {
	const { data, mutate, error } = useSWR('user_playlist', fetchers.getUserPlaylist);
	return {
		loading: !data && !error,
		error: error && error.status === 403,
		data: data ? data : [],
		mutate,
	};
}
