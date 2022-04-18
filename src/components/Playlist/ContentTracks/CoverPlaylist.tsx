import React from 'react';
import { FaPlay } from 'react-icons/fa';

interface Props {
	images: any[];
}

const CoverPlaylist = ({ images }: Props) => {
	return (
		<div className="flex-cc">
			<div className="relative overflow-hidden w-48 h-48 bg-white bg-opacity-10 rounded-lg group">
				{images?.length > 0 && <img src={images[0].url} alt="" />}
				<button className="absolute flex-cc top-0 left-0 bg-black bg-opacity-60 transition hover:bg-opacity-75 group-hover:opacity-100 full">
					<div className="flex-cc w-20 h-20 rounded-full border-2">
						<FaPlay
							size={36}
							className="ml-1 transition-all transform group-hover:scale-110"
						/>
					</div>
				</button>
			</div>
		</div>
	);
};

export default CoverPlaylist;
