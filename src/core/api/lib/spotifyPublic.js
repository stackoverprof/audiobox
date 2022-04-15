import axios from 'axios';

const SpotifyPublic = axios.create();

SpotifyPublic.defaults.baseURL = 'https://api.spotify.com/v1';

const public_token =
	'BQCiptdMB_lovVJeUvYCzs8SvDXhpdYGc_sNUu6b_Lw8KB4_Smsi6nkAdFvLXWs_w8duLQWfoGhQL6mH5KLfcE-QqhCvztlXLCF6RHJFToVIDlJQ8Smm_dPUfcP7lalFKv-iE_66pkGiIcCm7B0YKPOtSgimAEiXLVJcMY0';

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
