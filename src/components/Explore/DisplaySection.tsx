import React, { useState } from 'react';
import colors from '@core/style/colors';
import PlayButton from './PlayButton';
import SliderTracks from './SliderTracks';
import usePlaylist from '@core/swr/usePlaylist';
import useResize from '@core/hooks/useResize';
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
	const screen = useResize();
	if (!playlist) return <></>;

	const data = playlist.tracks?.items?.map((x) => x.track).slice(0, 15) || [];
	return (
		<div
			className="h-[292px] relative w-full flex-se mb-20"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div
				className="absolute z-10 pointer-events-none full lg:hidden"
				style={{
					background: `linear-gradient(60deg, ${colors.base}ff 15%, ${colors.base}00 45%)`,
				}}
			></div>
			<div
				className="top-0 left-0 pointer-events-none w-[440px] -lg:w-full pr-20 absolute pl-[84px] -xl:pl-[42px] h-full flex-es col z-20"
				style={{
					background: screen.lg
						? `linear-gradient(60deg, ${colors.base}ff 30%, ${colors.base}ee 40%, ${colors.base}cc 50%, ${colors.base}55 65%, ${colors.base}00 70%)`
						: `linear-gradient(15deg, ${colors.base}ff 15%, ${colors.base}ee 25%, ${colors.base}cc 30%, ${colors.base}55 35%, ${colors.base}00 40%)`,
				}}
			>
				<div
					className={[
						'flex-cc mb-8 pointer-events-auto z-10',
						hover || !screen.lg ? 'opacity-100' : 'opacity-0',
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
					className="flex-es col z-10 pointer-events-auto group"
				>
					<h2 className="text-4xl font-semibold -md:text-3xl line-clamp-3 group-hover:text-theme-pink">
						{playlist.name}
					</h2>
					<p className="opacity-50 md:text-lg line-clamp-3">
						{convert(playlist.description)}
					</p>
				</Link>
			</div>
			<div className="absolute top-0 left-0 full">
				<SliderTracks data={data} ordered={ordered} highlighted={highlighted} />
			</div>
			<div
				className="absolute top-0 right-0 z-20 w-40 h-full pointer-events-none -xl:hidden"
				style={{
					background: `linear-gradient(90deg, ${colors.base}00 0%, ${colors.base}77 30%,${colors.base}ff 100%)`,
				}}
			></div>
		</div>
	);
};

export default DisplaySection;
