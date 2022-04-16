import authReducer, { State as AuthStateType } from './reducer/auth';
import createPlaylistReducer, { State as CreatePlaylistStateType } from './reducer/createPlaylist';
import { configureStore, Reducer } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		auth: authReducer,
		createPlaylist: createPlaylistReducer,
	},
});

export default store;

export interface RootStateType {
	auth: Reducer<AuthStateType>;
	createPlaylist: Reducer<CreatePlaylistStateType>;
}
