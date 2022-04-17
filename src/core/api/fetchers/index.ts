import Spotify from '../lib/spotify';
import SpotifyPublic from '../lib/spotifyPublic';

export const getUser = () => {
	return Spotify.get('/me')
		.then((res) => res.data)
		.catch((err) => console.error(err.response.data));
};

export const getRecommendations = () => {
	return SpotifyPublic.get('/playlists/37i9dQZEVXbMDoHDwVN2tF')
		.then((res) => res.data)
		.catch((err) => console.error(err.response.data));
};

export const getRecentlyPlayed = ({ limit = '12' }: { limit: string }) => {
	const params = new URLSearchParams({ limit }).toString();

	return Spotify.get('/me/player/recently-played?' + params)
		.then((res) => res.data.items.map((item) => item.track))
		.catch((err) => console.error(err.response.data));
};

export const searchTracks = (query) => {
	const config = {
		params: {
			type: 'track',
			q: query,
		},
	};

	return Spotify.get('/search', config)
		.then((res) => res.data.tracks.items)
		.catch((err) => console.error(err.response.data));
};
