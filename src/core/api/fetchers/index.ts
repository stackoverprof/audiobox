import Spotify from '../lib/spotify';
import SpotifyPublic from '../lib/spotifyPublic';

export const getUser = () => {
	return Spotify.get('/me')
		.then((res) => res.data)
		.catch((err) => console.error(err.response.data));
};

export const getUserPlaylist = () => {
	return Spotify.get('/me/playlists')
		.then((res) => res.data.items)
		.catch((err) => console.error(err.response.data));
};

export const getPlaylist = (playlist_id: string) => {
	return SpotifyPublic.get(`/playlists/${playlist_id}`)
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

export const createPlaylist = async ({
	user_id,
	title,
	description,
	uris,
}: CreatePlaylistParams) => {
	// create a new playlist
	const playlist_id = await Spotify.post(`/users/${user_id}/playlists`, {
		name: title,
		description: description,
		public: false,
		collaborative: false,
	})
		.then((res) => res.data.id)
		.catch((err) => err.response.data);

	// add the selected tracks to the playlist
	const result = await Spotify.post(`/playlists/${playlist_id}/tracks`, {
		uris,
	})
		.then((res) => res.data)
		.catch((err) => console.error(err.response.data));

	return result;
};

interface CreatePlaylistParams {
	user_id: string;
	title: string;
	description: string;
	uris: string[];
}
