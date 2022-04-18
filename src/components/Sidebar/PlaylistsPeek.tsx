import React from 'react';
import useUserPlaylist from '@core/swr/userPlaylists';
import { Link } from 'react-router-dom';

const PlaylistsPeek = () => {
	const { data } = useUserPlaylist();

	return (
		<div className="flex-ss col px-8 mt-8">
			{data.slice(0, 5).map((item, i) => (
				<Link
					to={`/library/${item.id}`}
					className="my-2 text-sm w-full opacity-50 hover:opacity-100 line-clamp-1"
					key={i}
				>
					{item.name}
				</Link>
			))}
		</div>
	);
};

export default PlaylistsPeek;
