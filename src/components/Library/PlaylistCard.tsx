import React, { useState } from 'react';
import CoverPlaylist from './CoverPlaylist';
import HeaderPlaylist from './HeaderPlaylist';
import SliderTracks from './SliderTracks';
import usePlaylist from '@core/swr/usePlaylist';

interface Props {
	data: any;
}

const PlaylistCard = ({ data }: Props) => {
	const [hover, setHover] = useState(false);
	const { playlist, isOwned } = usePlaylist(data.id);
	if (!playlist) return <></>;

	const tracks = playlist.tracks?.items?.map((x) => x.track).slice(0, 15) || [];

	return (
		<div
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className="flex-sc py-8 pl-12 w-full border-b border-white border-opacity-10 transition cursor-pointer -md:pl-6 hover:bg-theme-pink hover:bg-opacity-5"
		>
			<CoverPlaylist tracks={tracks} images={data.images} />
			<div className="flex-bs col w-full h-40">
				<HeaderPlaylist
					data={data}
					tracks={tracks}
					badges={isOwned ? ['owned'] : []}
					hover={hover}
				/>
				{tracks.length > 0 && (
					<SliderTracks hover={hover} data={tracks} playlist_id={data.id} />
				)}
			</div>
		</div>
	);
};

export default PlaylistCard;
// [TODO] : implement one last see more card
