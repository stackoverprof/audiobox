import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface State {
	authenticated: boolean;
	token: string;
}

const ReduxSlice = createSlice({
	name: 'AUTH',
	initialState: <State>{
		authenticated: false,
		token: '',
	},
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
			state.authenticated = true;
		},
		removeToken: (state) => {
			state.token = '';
			state.authenticated = false;
		},
	},
});

export const { setToken, removeToken } = ReduxSlice.actions;
export const useAuth = (): State => useSelector((RootState: { auth: State }) => RootState.auth);
export default ReduxSlice.reducer;
