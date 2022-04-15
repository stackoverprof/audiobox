import Spotify from '../lib/spotify';
import SpotifyPublic from '../lib/spotifyPublic';

export const getUser = async () => {
	const result = await Spotify.get('/me').then((res) => res.data);
	return result;
};

export const getRecommendations = async () => {
	const params = new URLSearchParams();
	params.append('limit', '6');
	params.append('country', 'ID');
	const result = await SpotifyPublic.get('/browse/new-releases?' + params.toString()).then(
		(res) => res.data.albums.items
	);
	console.log(result);

	return result;
};

