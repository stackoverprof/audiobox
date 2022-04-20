import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { play } from '@core/redux/actions/player';
import { useDispatch } from 'react-redux';

interface Props {
	images: any[];
	tracks: any[];
}

const CoverPlaylistMini = ({ images, tracks }: Props) => {
	const dispatch = useDispatch();

	const handlePlayPlaylist = () => {
		dispatch(play(tracks));
	};

	return (
		<div className="flex-cc mr-8 xl:hidden">
			<div className="relative overflow-hidden w-20 h-20 bg-white bg-opacity-10 rounded-lg group">
				{images?.length > 0 && <img src={images[0].url} alt="" />}
				<button
					onClick={handlePlayPlaylist}
					className="absolute flex-cc top-0 left-0 bg-black bg-opacity-60 opacity-0 transition hover:bg-opacity-75 group-hover:opacity-100 full"
				>
					<div className="flex-cc w-10 h-10 rounded-full border-2">
						<FaPlay size={18} className="ml-1" />
					</div>
				</button>
			</div>
		</div>
	);
};

export default CoverPlaylistMini;
