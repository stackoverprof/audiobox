import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface State {
	ready: boolean;
	authenticated: boolean;
	token: string;
}

const initialState = <State>{
	ready: false,
	authenticated: false,
	token: '',
};

const ReduxSlice = createSlice({
	name: 'AUTH',
	initialState,
	reducers: {
		makeReady: (state) => {
			state.ready = true;
		},
		setToken: (state, action) => {
			state.token = action.payload;
			state.authenticated = true;
		},
		removeToken: (state) => {
			state.token = '';
			state.authenticated = false;
		},
		reset: () => initialState,
	},
});

export const { makeReady, setToken, reset, removeToken } = ReduxSlice.actions;
export const useAuth = (): State => useSelector((RootState: { auth: State }) => RootState.auth);
export default ReduxSlice.reducer;
