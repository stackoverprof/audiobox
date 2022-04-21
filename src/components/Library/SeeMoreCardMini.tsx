import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	playlist_id: string;
}

const SeeMoreCardMini = ({ playlist_id }: Props) => {
	return (
		<Link
			to={`/playlist/${playlist_id}`}
			className="flex-bc px-4 mt-2 h-16 bg-white bg-opacity-10 rounded-lg backdrop-blur group"
		>
			<p className="mr-2">See more</p>

			<div
				className={[
					'py-1.5 hover:border-theme-pink hover:border-opacity-50 group-hover:bg-theme-pink group-hover:bg-opacity-20 border px-4 transition flex-cc rounded-md text-sm',
				].join(' ')}
			>
				Open
			</div>
		</Link>
	);
};

export default SeeMoreCardMini;

