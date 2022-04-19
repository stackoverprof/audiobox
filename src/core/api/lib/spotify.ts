// [README] : Axios instance for Spotify web api integration

import axios from 'axios';

const Spotify = axios.create({
	baseURL: 'https://api.spotify.com/v1',
});

// Request interceptor for API calls
Spotify.interceptors.request.use(
	async (config) => {
		const access_token = localStorage.getItem('access_token');
		return {
			...config,
			headers: {
				...config.headers,
				Authorization: `Bearer ${access_token}`,
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		};
	},
	(error) => {
		Promise.reject(error);
	}
);

export default Spotify;
