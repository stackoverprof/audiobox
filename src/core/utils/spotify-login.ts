import randomBytesJs from 'random-bytes-js';

const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

const spotifyLogin = () => {
	const redirect_uri = window.location.origin;
	const state = randomBytesJs.randHex(8);

	localStorage.setItem('spotify-client', state);
	const scope = 'playlist-modify-private';

	const targetURL = new URL('https://accounts.spotify.com/authorize');
	targetURL.searchParams.set('response_type', 'token');
	targetURL.searchParams.set('client_id', client_id);
	targetURL.searchParams.set('redirect_uri', redirect_uri);
	targetURL.searchParams.set('state', state);
	targetURL.searchParams.set('scope', scope);

	return targetURL.href;
};

export default spotifyLogin;
