// [README] : main redux store, using redux-toolkit

import authReducer, { State as AuthStateType } from './reducer/auth';
import createPlaylistReducer, { State as CreatePlaylistStateType } from './reducer/createPlaylist';
import editPlaylistReducer, { State as EditPlaylistStateType } from './reducer/editPlaylist';
import exploreReducer, { State as ExploreStateType } from './reducer/explore';
import libraryReducer, { State as LibraryStateType } from './reducer/library';
import playerReducer, { State as PlayerStateType } from './reducer/player';
import testReducer, { State as TestStateType } from './reducer/test';
import { configureStore, Reducer } from '@reduxjs/toolkit';

interface Props {
	testMode: boolean;
}

const store = ({ testMode }: Props) =>
	configureStore({
		reducer: {
			test: testReducer({ testMode }),
			auth: authReducer,
			createPlaylist: createPlaylistReducer,
			editPlaylist: editPlaylistReducer,
			explore: exploreReducer,
			library: libraryReducer,
			player: playerReducer,
		},
	});

export default store;

export interface RootStateType {
	auth: Reducer<AuthStateType>;
	createPlaylist: Reducer<CreatePlaylistStateType>;
	editPlaylist: Reducer<EditPlaylistStateType>;
	explore: Reducer<ExploreStateType>;
	library: Reducer<LibraryStateType>;
	player: Reducer<PlayerStateType>;
	test: Reducer<TestStateType>;
}
