import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface State {
	id: string;
	title: string;
	description: string;
	selectedTracks: TrackType[];
	initialized: boolean;
	editMode: boolean;
}

const initialState = <State>{
	id: '',
	title: '',
	description: '',
	selectedTracks: [],
	initialized: false,
	editMode: false,
};

// [TODO] : isChanged state
const ReduxSlice = createSlice({
	name: 'EDIT_PLAYLIST',
	initialState,
	reducers: {
		makeInitialized: (state) => {
			state.initialized = true;
		},
		setId: (state, action) => {
			state.id = action.payload;
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
		setEditMode: (state, action) => {
			state.editMode = action.payload;
		},
		reset: () => initialState,
	},
});

export const {
	makeInitialized,
	setId,
	setTitle,
	setDescription,
	setSelectedTracks,
	setEditMode,
	reset,
} = ReduxSlice.actions;
export const useEditPlaylist = (): State =>
	useSelector((RootState: { editPlaylist: State }) => RootState.editPlaylist);
export default ReduxSlice.reducer;

export type TrackType = {
	uri: string;
	data: any;
};
