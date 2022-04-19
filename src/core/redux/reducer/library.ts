// [README] : reducer for explore page related state management

import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface State {
	selectedFilter: '' | 'owned' | 'public';
}

const initialState = <State>{
	selectedFilter: '',
};

const ReduxSlice = createSlice({
	name: 'LIBRARY',
	initialState,
	reducers: {
		setSelectedFilter: (state, action) => {
			state.selectedFilter = action.payload;
		},
		reset: () => initialState,
	},
});

export const { setSelectedFilter, reset } = ReduxSlice.actions;

export const useLibrary = (): State => {
	const state = useSelector((RootState: { library: State }) => RootState.library);
	return state;
};

export default ReduxSlice.reducer;
