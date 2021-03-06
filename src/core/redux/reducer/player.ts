// [README] : reducer for explore page related state management

import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface State {
	currentTrack: any;
	selectedTracks: any[];
	history: any[];
	paused: boolean;
	buffering: boolean;
}

const initialState = <State>{
	currentTrack: {},
	selectedTracks: [],
	history: [],
	paused: false,
	buffering: false,
};

const ReduxSlice = createSlice({
	name: 'PLAYER',
	initialState,
	reducers: {
		setCurrentTrack: (state, action) => {
			state.currentTrack = action.payload;
			state.paused = false;
		},
		setSelectedTracks: (state, action) => {
			state.selectedTracks = action.payload;
		},
		setPaused: (state, action) => {
			state.paused = action.payload;
		},
		setHistory: (state, action) => {
			state.history = action.payload;
		},
		setBuffering: (state, action) => {
			state.buffering = action.payload;
		},
		reset: () => initialState,
	},
});

export const { setCurrentTrack, setSelectedTracks, setPaused, setHistory, setBuffering, reset } =
	ReduxSlice.actions;

export const usePlayer = (): State =>
	useSelector((RootState: { player: State }) => RootState.player);

export default ReduxSlice.reducer;
