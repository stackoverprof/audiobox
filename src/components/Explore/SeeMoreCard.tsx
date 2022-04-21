import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	playlist_id: string;
}

const SeeMoreCard = ({ playlist_id }: Props) => {
	return (
		<Link
			to={`/playlist/${playlist_id}`}
			className="flex-cc col p-4 w-full h-full bg-white bg-opacity-10 rounded-lg backdrop-blur-sm select-none group"
		>
			<p className="mb-2">See more</p>
			<div
				className={[
					'py-1.5 hover:border-theme-pink hover:border-opacity-50 group-hover:bg-theme-pink group-hover:bg-opacity-20 border px-4 transition flex-cc rounded-full',
				].join(' ')}
			>
				Open
			</div>
		</Link>
	);
};

export default SeeMoreCard;

