import React from 'react';
import { FaPlay } from 'react-icons/fa';

interface Props {
	images: any[];
}

const CoverPlaylist = ({ images }: Props) => {
	return (
		<div className="flex-cc mr-8">
			<div className="relative overflow-hidden w-40 h-40 bg-white bg-opacity-10 rounded-lg group">
				<img src={images.length ? images[0].url : ''} alt="" />
				<button className="absolute flex-cc top-0 left-0 bg-black bg-opacity-60 opacity-0 transition hover:bg-opacity-75 group-hover:opacity-100 full">
					<div className="flex-cc w-20 h-20 rounded-full border-2">
						<FaPlay size={36} className="ml-1" />
					</div>
				</button>
			</div>
		</div>
	);
};

export default CoverPlaylist;

