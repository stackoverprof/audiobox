import React from 'react';
import colors from '@core/style/colors';
import SliderTracks from './SliderTracks';
import usePlaylist from '@core/swr/usePlaylist';

interface Props {
	playlist_id: string;
	title: string;
	description: string;
}

const DisplaySection = ({ playlist_id, title, description }: Props) => {
	const { playlist } = usePlaylist(playlist_id);
	if (!playlist) return <></>;

	const data = playlist.tracks?.items?.map((x) => x.track) || [];
	console.log(data);

	return (
		<div className="h-[292px] relative w-full flex-se mb-20">
			<div
				className="pointer-events-none w-[440px] pr-20 absolute pl-[84px] h-full flex-es col z-20"
				style={{
					background: `linear-gradient(60deg, ${colors.base}ff 30%, ${colors.base}ee 40%, ${colors.base}cc 50%, ${colors.base}55 65%, ${colors.base}00 70%)`,
				}}
			>
				<h2 className="font-semibold text-4xl">{title}</h2>
				<p className="opacity-50 text-lg">{description}</p>
			</div>
			<div className="absolute full top-0 left-0">
				<SliderTracks data={data} />
			</div>
		</div>
	);
};

export default DisplaySection;

