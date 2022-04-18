import React from 'react';
import * as fetchers from '@core/api/fetchers';
import HeaderEditor from '@components/Playlist/HeaderEditor';
import MainLayout from '@components/_layouts/MainLayout';
import SearchArea from '@components/Playlist/SearchArea';
import useSWR from 'swr';
import { useNavigate, useParams } from 'react-router-dom';

const Playlist = () => {
	const { playlist_id } = useParams();
	const navigate = useNavigate();
	if (!playlist_id) return navigate('/library');

	const { data: playlist } = useSWR(`/playlists/${playlist_id}`, () =>
		fetchers.getPlaylist(playlist_id)
	);

	console.log('data', playlist);

	return (
		<MainLayout title="Playlist" className="flex-sc col w-full">
			<HeaderEditor />
			<SearchArea />
		</MainLayout>
	);
};

export default Playlist;

