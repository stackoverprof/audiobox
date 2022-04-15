import axios from 'axios';

const SpotifyPublic = axios.create();

SpotifyPublic.defaults.baseURL = 'https://api.spotify.com/v1';

const public_token = import.meta.env.VITE_PUBLIC_TOKEN;

// Request interceptor for API calls
SpotifyPublic.interceptors.request.use(
	async (config) => {
		config.headers = {
			Authorization: `Bearer ${public_token}`,
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		};
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

export default SpotifyPublic;
