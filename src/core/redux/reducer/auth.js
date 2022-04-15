import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
	authenticated: false,
	access_token: 'vfjvidfjvkn',
};

const ReduxSlice = createSlice({
	name: 'AUTH',
	initialState,
	reducers: {
		setToken: (state, action) => {
			state.access_token = action.payload;
			state.authenticated = true;
		},
		removeToken: (state) => {
			state.access_token = '';
			state.authenticated = false;
		},
	},
});

export const { setToken, removeToken } = ReduxSlice.actions;
export const useAuth = () => useSelector((RootState) => RootState.auth);
export default ReduxSlice.reducer;
