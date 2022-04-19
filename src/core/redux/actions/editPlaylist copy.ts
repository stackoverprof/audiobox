// [README] : redux actions dispatcher for editing playlist related tasks

import { setCurrentTracks } from '../reducer/player';

export const play = (track: any) => (dispatch) => {
	dispatch(setCurrentTracks(track));
};
