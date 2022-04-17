import React from 'react';
import CoverPlaylist from './CoverPlaylist';
import HeaderPlaylist from './HeaderPlaylist';
import SliderTracks from './SliderTracks';

interface Props {
	data: any;
}

const PlaylistCard = ({ data }: Props) => {
	return (
		<>
			<div className="flex-sc px-12 w-full">
				<CoverPlaylist images={data.images} />
				<div className="flex-bs col w-full h-40">
					<HeaderPlaylist data={data} />
					<SliderTracks />
				</div>
			</div>
			<div className="my-8 w-full h-px bg-white bg-opacity-10"></div>
		</>
	);
};

export default PlaylistCard;

