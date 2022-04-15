import useSWR from 'swr';
import { getRecommendations } from '../api/fetchers';

export default function useFeaturedTracks() {
	const { data, mutate, error } = useSWR('featured_tracks', getRecommendations);
	return {
		loading: !data && !error,
		error: error && error.status === 403,
		featuredTracks: data ? data.tracks.items.slice(0, 48).map((item) => item.track) : [],
		mutate,
	};
}
