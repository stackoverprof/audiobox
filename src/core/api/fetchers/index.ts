import Spotify from '../lib/spotify';
import SpotifyPublic from '../lib/spotifyPublic';

export const getUser = async () => {
	const result = await Spotify.get('/me').then((res) => res.data);
	return result;
};

export const getRecommendations = async () => {
	const result = await SpotifyPublic.get('/playlists/37i9dQZEVXbMDoHDwVN2tF')
		.then((res) => res.data)
		.catch((err) => console.log(err.response.data));

	return result;
};

