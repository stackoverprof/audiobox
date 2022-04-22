// [README] : redux actions dispatcher for player music related tasks

import store from '../store';
import { setCurrentTrack, setHistory, setSelectedTracks } from '../reducer/player';

export const play = (tracks: any[]) => (dispatch) => {
	const { currentTrack } = store.getState().player;
	if (currentTrack.id) dispatch(pushHistory(currentTrack));
	dispatch(setCurrentTrack({}));
	dispatch(setSelectedTracks(tracks));
};

export const pushHistory = (track: any) => (dispatch) => {
	console.log('PUSHING', track.name);

	const timestamp = new Date().getTime();
	const timestamped = { ...track, timestamp };
	const { history } = store.getState().player;
	const cleaned = history.filter((item) => item.uri !== track.uri);
	const next = [timestamped, ...cleaned];

	localStorage.setItem('player_history', JSON.stringify(next));
	dispatch(setHistory(next));
};
