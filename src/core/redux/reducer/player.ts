// [README] : reducer for explore page related state management

import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface State {
	currentTrack: any;
	paused: boolean;
}

const initialState = <State>{
	currentTrack: {},
	paused: false,
};

const ReduxSlice = createSlice({
	name: 'PLAYER',
	initialState,
	reducers: {
		setCurrentTrack: (state, action) => {
			state.currentTrack = action.payload;
			state.paused = false;
		},
		setPaused: (state, action) => {
			state.paused = action.payload;
		},
		reset: () => initialState,
	},
});

export const { setCurrentTrack, setPaused, reset } = ReduxSlice.actions;

export const usePlayer = (): State => {
	const state = useSelector((RootState: { player: State }) => RootState.player);
	return state;
};

export default ReduxSlice.reducer;
