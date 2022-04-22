// [README] : redux actions dispatcher for player music related tasks

import store from '../store';
import { setCurrentTrack, setHistory, setSelectedTracks } from '../reducer/player';

export const play = (tracks: any[]) => (dispatch) => {
	dispatch(setCurrentTrack({}));
	dispatch(setSelectedTracks(tracks));
};

export const pushHistory = (track: any) => (dispatch) => {
	const timestamp = new Date().getTime();
	const timestamped = { ...track, timestamp };
	const { history } = store.getState().player;
	const next = [...history, timestamped];

	localStorage.setItem('player_history', JSON.stringify(next));
	dispatch(setHistory(next));
};
