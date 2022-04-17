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

export const getRecentlyPlayed = ({ limit = 6 }: { limit: number }) => {
	return Spotify.get('/me/player/recently-played?', { params: { limit } })
		.then((res) => res.data.items.map((item) => item.track))
		.catch((err) => console.error(err.response.data));
};

export const searchTracks = (query) => {
	if (!query) return [];
	return Spotify.get('/search', {
		params: {
			type: 'track',
			q: query,
			limit: 8,
		},
	})
		.then((res) => res.data.tracks.items)
		.catch((err) => console.error(err.response.data));
};
