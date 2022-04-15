import randomBytesJs from 'random-bytes-js';

const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

const spotifyLogin = () => {
	const targetURL = new URL('https://accounts.spotify.com/authorize');

	targetURL.searchParams.set('response_type', 'token');
	targetURL.searchParams.set('client_id', client_id);
	targetURL.searchParams.set('redirect_uri', window.location.origin);
	targetURL.searchParams.set('state', randomBytesJs.randHex(8));
	targetURL.searchParams.set('scope', 'playlist-modify-private');

	return targetURL.href;
};

export default spotifyLogin;
