import getParams from 'src/core/utils/get-params';
import { removeToken, setToken } from '../reducer/auth';

export const syncToken = () => async (dispatch) => {
	const savedToken = localStorage.getItem('access_token');
	if (savedToken) {
		dispatch(setToken(savedToken));
	} else if (window.location.hash) {
		const params = getParams(window.location.hash);
		if (!params.access_token) return;
		localStorage.setItem('access_token', params.access_token);
		dispatch(setToken(params.access_token));
	} else return;
};

export const logout = () => async (dispatch) => {
	await localStorage.removeItem('access_token');
	dispatch(removeToken());
};

