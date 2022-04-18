import React, { useEffect } from 'react';
import * as editPlaylistRedux from '@core/redux/reducer/editPlaylist';
import ContentTracks from '@components/Playlist/ContentTracks';
import HeaderEditor from '@components/Playlist/HeaderEditor';
import MainLayout from '@components/_layouts/MainLayout';
import SearchArea from '@components/Playlist/SearchArea';
import usePlaylist from '@core/swr/usePlaylist';
import { makeInitialized, setDescription, setId, setTitle } from '@core/redux/reducer/editPlaylist';
import { setSelectedTracks, useEditPlaylist } from '@core/redux/reducer/editPlaylist';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Playlist = () => {
	const { playlist_id } = useParams();
	const navigate = useNavigate();
	if (!playlist_id) return navigate('/library');

	const { playlist } = usePlaylist(playlist_id);
	const { editMode, initialized } = useEditPlaylist();

	//  FILL UP EXISTING DATA
	const dispatch = useDispatch();
	useEffect(() => {
		if (
			(!initialized || !editMode) &&
			(playlist.name || playlist.description || playlist.tracks?.items)
		) {
			dispatch(setId(playlist.id));
			dispatch(setTitle(playlist.name));
			dispatch(setDescription(playlist.description));
			dispatch(
				setSelectedTracks(
					playlist.tracks.items.map((item) => ({ uri: item.track.uri, data: item.track }))
				)
			);
			dispatch(makeInitialized());
		}
	}, [playlist, playlist_id, editMode]);

	useEffect(() => {
		return () => {
			dispatch(editPlaylistRedux.reset());
		};
	}, [playlist_id]);

	return (
		<MainLayout title="Playlist" className="flex-sc col w-full" key={playlist_id}>
			<HeaderEditor />
			{!editMode && <ContentTracks />}
			{editMode && (
				<>
					<SearchArea />
				</>
			)}
		</MainLayout>
	);
};

export default Playlist;
