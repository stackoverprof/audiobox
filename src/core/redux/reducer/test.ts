// [README] : reducer for testing environment

import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface State {
	testMode: boolean;
}

const ReduxSlice = (initialState) =>
	createSlice({
		name: 'TEST',
		initialState,
		reducers: {},
	}).reducer;

export const useTest = (): State => useSelector((RootState: { test: State }) => RootState.test);

export default ReduxSlice;
