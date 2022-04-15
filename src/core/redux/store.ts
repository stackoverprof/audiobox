import authReducer, { State as AuthStateType } from './reducer/auth';
import { configureStore, Reducer } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});

export default store;

export interface RootStateType {
	auth: Reducer<AuthStateType>;
}
