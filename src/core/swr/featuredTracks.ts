import * as fetchers from '@core/api/fetchers';
import useSWR from 'swr';

const useFeaturedTracks = () => {
	const { data, mutate, error } = useSWR('featured_tracks', fetchers.getRecommendations);
	return {
		loading: !data && !error,
		error: error && error.status === 403,
		featuredTracks: data ? data.tracks.items.slice(0, 48).map((item) => item.track) : [],
		mutate,
	};
};

export default useFeaturedTracks;
