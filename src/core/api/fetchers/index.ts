// [README] : This file is a gateway for all api calls

import Spotify from '../lib/spotify';
import SpotifyPublic from '../lib/spotifyPublic';
import { toast } from 'react-toastify';

export const getUser = () => {
	return Spotify.get('/me')
		.then((res) => res.data)
		.catch((err) => {
			if (err.response.status === 401) window.location.reload();
			else if (err.response.status === 403) {
				toast.error('You are not whitelisted yet. Please contact the administrator');
				setTimeout(() => {
					toast('mail to : r.bintangbagus@gmail.com');
				}, 3000);
			} else {
				console.error(err.response.data);
				throw err.response.data.error;
			}
		});
};

export const getUserPlaylist = () => {
	return Spotify.get('/me/playlists?limit=50')
		.then((res) => res.data.items)
		.catch((err) => {
			console.error(err.response.data);
			throw err.response.data.error;
		});
};

export const getPlaylist = (playlist_id: string) => {
	return Spotify.get(`/playlists/${playlist_id}`)
		.then((res) => res.data)
		.catch((err) => {
			console.error(err.response.data);
			throw err.response.data.error;
		});
};

export const getRecommendations = () => {
	return SpotifyPublic.get('/playlists/37i9dQZEVXbMDoHDwVN2tF')
		.then((res) => res.data)
		.catch((err) => {
			console.error(err.response.data);
			throw err.response.data.error;
		});
};

export const getFeaturedPlaylists = ({ limit = 12 }: { limit: number }) => {
	return Spotify.get('/browse/featured-playlists', {
		params: { limit },
	})
		.then((res) => res.data.playlists.items)
		.catch((err) => {
			console.error(err.response.data);
			throw err.response.data.error;
		});
};

export const getRecentlyPlayed = ({ limit = 6 }: { limit: number }) => {
	return Spotify.get('/me/player/recently-played', { params: { limit } })
		.then((res) => res.data.items.map((item) => item.track))
		.catch((err) => {
			console.error(err.response.data);
			throw err.response.data.error;
		});
};

export const followPlaylist = ({ playlist_id }: { playlist_id: string }) => {
	return Spotify.put(`/playlists/${playlist_id}/followers`)
		.then((res) => res.data)
		.catch((err) => {
			console.error(err.response.data);
			throw err.response.data.error;
		});
};

export const unfollowPlaylist = ({ playlist_id }: { playlist_id: string }) => {
	return Spotify.delete(`/playlists/${playlist_id}/followers`)
		.then((res) => res.data)
		.catch((err) => {
			console.error(err.response.data);
			throw err.response.data.error;
		});
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
		.catch((err) => {
			console.error(err.response.data);
			throw err.response.data.error;
		});
};

interface CreatePlaylistParams {
	user_id: string;
	title: string;
	description: string;
	uris: string[];
}

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
	if (!playlist_id) return { success: false };

	// add the selected tracks to the playlist
	const result = await Spotify.post(`/playlists/${playlist_id}/tracks`, {
		uris,
	})
		.then((res) => res.data)
		.catch((err) => {
			console.error(err.response.data);
			throw err.response.data.error;
		});
	if (!result) return { success: false };

	return { success: true, playlist_id };
};

interface EditPlaylistParams {
	playlist_id: string;
	title: string;
	description: string;
	uris: string[];
}

export const editPlaylist = async ({
	playlist_id,
	title,
	description,
	uris,
}: EditPlaylistParams) => {
	// update title desc
	const { success } = await Spotify.put(`/playlists/${playlist_id}`, {
		name: title,
		description,
	})
		.then(() => ({ success: true }))
		.catch((err) => {
			console.error(err.response.data);
			return { success: false };
		});
	if (!success) return { success: false };

	// update the selected tracks to the playlist
	const result2 = await Spotify.put(`/playlists/${playlist_id}/tracks`, {
		uris,
	})
		.then((res) => res.data)
		.catch((err) => {
			console.error(err.response.data);
			throw err.response.data.error;
		});
	if (!result2) return { success: false };

	return { success: true, playlist_id };
};
