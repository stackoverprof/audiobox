// [README] : redux actions dispatcher for auth related tasks

import * as authRedux from '../reducer/auth';
import getParams from '@core/utils/get-params';
import { removeToken, setToken } from '../reducer/auth';
import { toast } from 'react-toastify';

export const syncToken = () => async (dispatch) => {
	const savedToken = localStorage.getItem('access_token') || '';
	const savedExpiry = localStorage.getItem('token_expiration') || '0';

	if (savedToken) {
		const isExpired = new Date().getTime() > new Date(parseInt(savedExpiry)).getTime();
		if (isExpired) {
			localStorage.removeItem('access_token');
			localStorage.removeItem('token_expiration');
			toast.error('Sessions expired');
			dispatch(authRedux.reset());
		} else {
			dispatch(setToken(savedToken));
		}
	} else if (window.location.hash) {
		const params = getParams(window.location.hash);
		if (params.access_token && params.expires_in) {
			const token_expiration = new Date(new Date().getTime() + params.expires_in * 1000)
				.getTime()
				.toString();
			localStorage.setItem('token_expiration', token_expiration);
			localStorage.setItem('access_token', params.access_token);
			dispatch(setToken(params.access_token));
		}
	}

	dispatch(authRedux.makeReady());
};

export const logout = () => async (dispatch) => {
	localStorage.removeItem('access_token');
	localStorage.removeItem('token_expiration');
	await dispatch(removeToken());
};
