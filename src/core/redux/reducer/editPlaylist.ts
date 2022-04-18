import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface State {
	title: string;
	description: string;
	selectedTracks: TrackType[];
	initialized: boolean;
}

const initialState = <State>{
	title: '',
	description: '',
	selectedTracks: [],
	initialized: false,
};

// [TODO] : isChanged state
const ReduxSlice = createSlice({
	name: 'EDIT_PLAYLIST',
	initialState,
	reducers: {
		makeInitialized: (state) => {
			state.initialized = true;
		},
		setTitle: (state, action) => {
			state.title = action.payload;
		},
		setDescription: (state, action) => {
			state.description = action.payload;
		},
		setSelectedTracks: (state, action) => {
			state.selectedTracks = action.payload;
		},
		reset: () => initialState,
	},
});

export const { makeInitialized, setTitle, setDescription, setSelectedTracks, reset } =
	ReduxSlice.actions;
export const useEditPlaylist = (): State =>
	useSelector((RootState: { editPlaylist: State }) => RootState.editPlaylist);
export default ReduxSlice.reducer;

export type TrackType = {
	uri: string;
	data: any;
};
