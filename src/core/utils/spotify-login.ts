// [README] : generate login link to spotify web api

import randomBytesJs from 'random-bytes-js';

const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

const spotifyLogin = () => {
	const options = {
		response_type: 'token',
		client_id: client_id,
		redirect_uri: window.location.origin,
		state: randomBytesJs.randHex(8),
		scope: [
			'playlist-modify-private',
			'playlist-modify-public',
			'user-read-private',
			'playlist-read-private',
			'user-read-email',
			'user-read-recently-played',
		].join(' '),
	};

	const params = new URLSearchParams(options).toString();

	return 'https://accounts.spotify.com/authorize?' + params;
};

export default spotifyLogin;
