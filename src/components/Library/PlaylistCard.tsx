import React, { useState } from 'react';
import * as fetchers from '@core/api/fetchers';
import CoverPlaylist from './CoverPlaylist';
import HeaderPlaylist from './HeaderPlaylist';
import SliderTracks from './SliderTracks';
import useSWR from 'swr';

interface Props {
	data: any;
}

const PlaylistCard = ({ data }: Props) => {
	const [hover, setHover] = useState(false);
	const { data: playlistData } = useSWR(`/playlists/${data.id}`, () =>
		fetchers.getPlaylist(data.id)
	);

	const tracks = playlistData?.tracks?.items || [];
	// [TODO] : diferentiate private adn public, and the editable
	// [TODO] : or dont show public playlist
	return (
		<div
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className="flex-sc border-b cursor-pointer border-white border-opacity-10 py-8 pl-12 w-full hover:bg-theme-pink hover:bg-opacity-5 transition"
		>
			<CoverPlaylist images={data.images} />
			<div className="flex-bs col w-full h-40">
				<HeaderPlaylist data={data} hover={hover} />
				{tracks.length > 0 && <SliderTracks data={tracks} />}
			</div>
		</div>
	);
};

export default PlaylistCard;
