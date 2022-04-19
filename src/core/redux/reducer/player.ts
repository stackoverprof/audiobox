// [README] : reducer for explore page related state management

import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface State {
	currentTracks: any;
}

const initialState = <State>{
	currentTracks: {},
};

const ReduxSlice = createSlice({
	name: 'PLAYER',
	initialState,
	reducers: {
		setCurrentTracks: (state, action) => {
			state.currentTracks = action.payload;
		},
		reset: () => initialState,
	},
});

export const { setCurrentTracks, reset } = ReduxSlice.actions;

export const usePlayer = (): State => {
	const state = useSelector((RootState: { player: State }) => RootState.player);
	return state;
};

export default ReduxSlice.reducer;
