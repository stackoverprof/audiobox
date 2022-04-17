import React from 'react';
import PlaylistCard from './PlaylistCard';
import useUserPlaylist from '@core/swr/userPlaylists';

const PlaylistsMapper = () => {
	const { data } = useUserPlaylist();
	console.log(data);

	return (
		<div className="flex-sc col w-full">
			{data.map((item, i) => (
				<PlaylistCard data={item} key={i} />
			))}
		</div>
	);
};

export default PlaylistsMapper;

