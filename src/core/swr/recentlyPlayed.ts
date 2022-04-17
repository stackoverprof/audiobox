import * as fetchers from '@core/api/fetchers';
import useSWR from 'swr';

export default function useRecentlyPlayed() {
	const { data, mutate, error } = useSWR('recently_played', fetchers.getRecentlyPlayed);
	return {
		loading: !data && !error,
		error: error && error.status === 403,
		data: data ? data : [],
		mutate,
	};
}
