import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { setSelectedTracks } from '@core/redux/reducer/player';
import { useDispatch } from 'react-redux';

interface Props {
	tracks: any[];
}

const ButtonOptions = ({ tracks }: Props) => {
	const dispatch = useDispatch();

	const handlePlayPlaylist = () => {
		dispatch(setSelectedTracks(tracks));
	};

	return (
		<div className="flex-sc ">
			<button
				onClick={handlePlayPlaylist}
				className="flex-cc w-14 h-14 bg-white bg-opacity-10 rounded-full transition-all hover:text-theme-green hover:bg-opacity-30 hover:bg-theme-green"
			>
				<FaPlay size={20} className="ml-1" />
			</button>
		</div>
	);
};

export default ButtonOptions;
