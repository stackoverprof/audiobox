import React, { useEffect } from 'react';
import * as editPlaylistRedux from '@core/redux/reducer/editPlaylist';
import HeaderEditor from '@components/Playlist/HeaderEditor';
import MainLayout from '@components/_layouts/MainLayout';
import usePlaylist from '@core/swr/usePlaylist';
import { setDescription, setTitle } from '@core/redux/reducer/editPlaylist';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
	makeInitialized,
	setSelectedTracks,
	useEditPlaylist,
} from '@core/redux/reducer/editPlaylist';

const Playlist = () => {
	const { playlist_id } = useParams();
	const navigate = useNavigate();
	if (!playlist_id) return navigate('/library');

	const { playlist } = usePlaylist(playlist_id);
	const { initialized } = useEditPlaylist();

	//  FILL UP EXISTING DATA
	const dispatch = useDispatch();
	useEffect(() => {
		if (!initialized && (playlist.name || playlist.description || playlist.tracks?.items)) {
			dispatch(setTitle(playlist.name));
			dispatch(setDescription(playlist.description));
			dispatch(
				setSelectedTracks(
					playlist.tracks.items.map((item) => ({ uri: item.track.uri, data: item.track }))
				)
			);
			dispatch(makeInitialized());
		}
	}, [playlist, initialized]);

	useEffect(() => {
		return () => {
			console.log('unmounting');
			dispatch(editPlaylistRedux.reset());
			console.log('UUUunmounting');
		};
	}, []);

	return (
		<MainLayout title="Playlist" className="flex-sc col w-full">
			<HeaderEditor />
		</MainLayout>
	);
};

export default Playlist;

