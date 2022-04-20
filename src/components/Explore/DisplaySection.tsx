import React, { useState } from 'react';
import colors from '@core/style/colors';
import PlayButton from './PlayButton';
import SliderTracks from './SliderTracks';
import usePlaylist from '@core/swr/usePlaylist';
import { convert } from 'html-to-text';
import { Link } from 'react-router-dom';

interface Props {
	playlist_id: string;
	highlighted?: boolean;
	ordered?: boolean;
}

const DisplaySection = ({ playlist_id, highlighted, ordered = false }: Props) => {
	const [hover, setHover] = useState(false);
	const { playlist } = usePlaylist(playlist_id);
	if (!playlist) return <></>;

	const data = playlist.tracks?.items?.map((x) => x.track).slice(0, 15) || [];
	return (
		<div
			className="h-[292px] relative w-full flex-se mb-20"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div
				className="top-0 left-0 pointer-events-none w-[440px] pr-20 absolute pl-[84px] h-full flex-es col z-20"
				style={{
					background: `linear-gradient(60deg, ${colors.base}ff 30%, ${colors.base}ee 40%, ${colors.base}cc 50%, ${colors.base}55 65%, ${colors.base}00 70%)`,
				}}
			>
				<div
					className={[
						'flex-cc mb-8 pointer-events-auto ',
						hover ? 'opacity-100' : 'opacity-0',
					].join(' ')}
				>
					<PlayButton tracks={data} />
					<Link
						to={`/playlist/${playlist.id}`}
						className={[
							'py-1.5 mr-2 hover:border-theme-pink hover:border-opacity-50 hover:bg-theme-pink hover:bg-opacity-20 border px-4 transition flex-cc rounded-full',
						].join(' ')}
					>
						Open
					</Link>
				</div>
				<Link
					to={`/playlist/${playlist.id}`}
					className="flex-es col pointer-events-auto group"
				>
					<h2 className="text-4xl font-semibold line-clamp-3 group-hover:text-theme-pink">
						{playlist.name}
					</h2>
					<p className="text-lg opacity-50 line-clamp-3">
						{convert(playlist.description)}
					</p>
				</Link>
			</div>
			<div className="absolute top-0 left-0 full">
				<SliderTracks data={data} ordered={ordered} highlighted={highlighted} />
			</div>
			<div
				className="absolute top-0 right-0 z-20 w-40 h-full pointer-events-none"
				style={{
					background: `linear-gradient(90deg, ${colors.base}00 0%, ${colors.base}77 30%,${colors.base}ff 100%)`,
				}}
			></div>
		</div>
	);
};

export default DisplaySection;
