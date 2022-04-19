// [README] : DATA FETCHING manager for the latest played tracks in spotify app

import * as fetchers from '@core/api/fetchers';
import useSWR from 'swr';

const useRecentlyPlayed = () => {
	const { data, mutate, error } = useSWR('recently_played', fetchers.getRecentlyPlayed);
	return {
		loading: !data && !error,
		error: error && error.status === 403,
		data: data ? data : [],
		mutate,
	};
};

export default useRecentlyPlayed;
