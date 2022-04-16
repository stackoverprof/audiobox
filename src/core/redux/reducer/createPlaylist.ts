import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface State {
	title: string;
	description: string;
	selectedTracks: TrackType[];
}

const initialState = <State>{
	title: '',
	description: '',
	selectedTracks: [],
};

const ReduxSlice = createSlice({
	name: 'CREATE_PLAYLIST',
	initialState,
	reducers: {
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

export const { setTitle, setDescription, setSelectedTracks, reset } = ReduxSlice.actions;
export const useCreatePlaylist = (): State =>
	useSelector((RootState: { createPlaylist: State }) => RootState.createPlaylist);
export default ReduxSlice.reducer;

export type TrackType = {
	uri: string;
	data: any;
};

