import React from 'react';
import * as fetchers from '@core/api/fetchers';
import CoverPlaylist from './CoverPlaylist';
import HeaderPlaylist from './HeaderPlaylist';
import SliderTracks from './SliderTracks';
import useSWR from 'swr';

interface Props {
	data: any;
}

const PlaylistCard = ({ data }: Props) => {
	const { data: playlistData } = useSWR(`/playlists/${data.id}`, () =>
		fetchers.getPlaylist(data.id)
	);

	const tracks = playlistData?.tracks?.items || [];
	// [TODO] : diferentiate private adn public, and the editable
	// [TODO] : or dont show public playlist
	return (
		<>
			<div className="flex-sc pl-12 w-full">
				<CoverPlaylist images={data.images} />
				<div className="flex-bs col w-full h-40">
					<HeaderPlaylist data={data} />
					{tracks.length > 0 && <SliderTracks data={tracks} />}
				</div>
			</div>
			<div className="my-8 w-full h-px bg-white bg-opacity-10"></div>
		</>
	);
};

export default PlaylistCard;
