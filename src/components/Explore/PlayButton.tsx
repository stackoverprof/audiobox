import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { play } from '@core/redux/actions/player';
import { useDispatch } from 'react-redux';

interface Props {
	tracks: any[];
}

const PlayButton = ({ tracks }: Props) => {
	const dispatch = useDispatch();

	const handlePlayPlaylist = () => {
		dispatch(play(tracks));
	};

	return (
		<div className="flex-sc mr-2">
			<button
				onClick={handlePlayPlaylist}
				className="flex-cc w-10 h-10 rounded-full border border-white transition-all hover:border-theme-green hover:text-theme-green hover:bg-opacity-30 hover:bg-theme-green"
			>
				<FaPlay size={16} className="ml-1" />
			</button>
		</div>
	);
};

export default PlayButton;
// [TODO] : see more button
