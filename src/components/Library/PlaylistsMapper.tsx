import React from 'react';
import PlaylistCard from './PlaylistCard';
import useUserPlaylist from '@core/swr/userPlaylists';
import { useLibrary } from '@core/redux/reducer/library';

const PlaylistsMapper = () => {
	const { data, ownedPlaylists, publicPlaylists } = useUserPlaylist();
	const { selectedFilter } = useLibrary();

	const sets = {
		owned: ownedPlaylists,
		public: publicPlaylists,
	};

	const filtered = selectedFilter ? sets[selectedFilter] : data;

	return (
		<div className="flex-sc col w-full">
			{filtered.map((item) => (
				<PlaylistCard data={item} key={item.id} />
			))}
		</div>
	);
};

export default PlaylistsMapper;
