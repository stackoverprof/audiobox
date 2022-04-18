import React from 'react';
import HeaderEditor from '@components/Playlist/HeaderEditor';
import MainLayout from '@components/_layouts/MainLayout';
import usePlaylist from '@core/swr/usePlaylist';
import { useNavigate, useParams } from 'react-router-dom';

const Playlist = () => {
	const { playlist_id } = useParams();
	const navigate = useNavigate();
	if (!playlist_id) return navigate('/library');

	const { playlist } = usePlaylist(playlist_id);

	console.log('data', playlist);

	return (
		<MainLayout title="Playlist" className="flex-sc col w-full">
			<HeaderEditor />
		</MainLayout>
	);
};

export default Playlist;

