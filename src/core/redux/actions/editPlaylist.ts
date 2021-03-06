// [README] : redux actions dispatcher for editing playlist related tasks

import store from '../store';
import { setSelectedTracks, TrackType } from '../reducer/editPlaylist';

export const addTrack = (track: TrackType) => (dispatch) => {
	const { selectedTracks } = store.getState().editPlaylist;
	const added = [track, ...selectedTracks];
	dispatch(setSelectedTracks(added));
};

export const removeTrack = (uri: string) => (dispatch) => {
	const { selectedTracks } = store.getState().editPlaylist;
	const removed = [...selectedTracks].filter((track) => track.uri !== uri);
	dispatch(setSelectedTracks(removed));
};
