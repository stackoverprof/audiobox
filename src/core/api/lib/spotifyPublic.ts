// [README] : THIS INSTANCE can fetch spotify api via server side, without any token needed, (just to public-accessible contents)
// [README] : Necessary for the featured tracks in login page before user login

import axios from 'axios';

const SpotifyPublic = axios.create({
	baseURL: 'https://api.audiobox.errbint.net/api/',
});

// Request interceptor for API calls
SpotifyPublic.interceptors.request.use(
	async (config) => ({
		...config,
		headers: {
			...config.headers,
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	}),
	(error) => {
		Promise.reject(error);
	}
);

export default SpotifyPublic;
