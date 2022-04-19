// [README] : redux actions dispatcher for player music related tasks

import { setCurrentTrack, setSelectedTracks } from '../reducer/player';

export const play = (tracks: any[]) => (dispatch) => {
	dispatch(setCurrentTrack({}));
	dispatch(setSelectedTracks(tracks));
};
