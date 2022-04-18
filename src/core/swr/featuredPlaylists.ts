import * as fetchers from '@core/api/fetchers';
import useSWR from 'swr';

const useFeaturedPlaylist = () => {
	const { data, mutate, error } = useSWR('featured_playlist', fetchers.getFeaturedPlaylists);
	console.log('featrued pla', data, error);

	const preprocess = () => {
		return data;
	};

	return {
		loading: !data && !error,
		error: error && error.status === 403,
		data: data ? preprocess() : [],
		mutate,
	};
};

export default useFeaturedPlaylist;
