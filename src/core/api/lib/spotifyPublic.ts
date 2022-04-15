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
