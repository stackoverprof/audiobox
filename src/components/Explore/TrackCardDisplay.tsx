import React from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { play } from '@core/redux/actions/player';
import { setPaused, usePlayer } from '@core/redux/reducer/player';
import { useDispatch } from 'react-redux';

interface Props {
	data: any;
	index: number;
	ordered: boolean;
}

const TrackCardDisplay = ({ data, index, ordered }: Props) => {
	if (!data) return <></>;

	// PLAYER CONTROLS
	const dispatch = useDispatch();

	const { currentTrack, paused } = usePlayer();

	const handlePlayer = () => {
		if (currentTrack.id !== data.id) dispatch(play([data]));
		else dispatch(setPaused(!paused));
	};

	const isPlaying = currentTrack.id ? currentTrack.id === data.id : false;

	return (
		<div className="flex-sc col pt-4 w-full h-full bg-white bg-opacity-10 rounded-lg backdrop-blur-sm select-none">
			<div className="relative overflow-hidden mb-4 w-40 h-40 bg-white bg-opacity-10 rounded-lg group">
				{data.album?.images?.length > 0 && <img src={data.album?.images[0].url} alt="" />}
				<button
					onClick={handlePlayer}
					className={[
						'absolute flex-cc top-0 left-0 bg-black bg-opacity-60 transition hover:bg-opacity-75 group-hover:opacity-100 full',
						isPlaying && !paused ? 'opacity-100' : 'opacity-0',
					].join(' ')}
				>
					<div className="flex-cc w-16 h-16 rounded-full border-2">
						{isPlaying && !paused ? (
							<FaPause size={32} className="" />
						) : (
							<FaPlay size={32} className="ml-1" />
						)}
					</div>
				</button>
			</div>
			<div className="flex-ss col w-40">
				<h3 className="overflow-hidden mb-3 w-full font-semibold text-left line-clamp-1">
					{ordered && <span className="text-theme-pink">#{index + 1}&ensp;</span>}
					{data.name}
				</h3>
				<p className="mb-1 w-full text-sm line-clamp-1">
					{data.artists?.map((artist, i, arr) => (
						<span key={i}>
							{artist.name}
							{i + 1 < arr.length && ', '}
						</span>
					))}
				</p>
				<p className="w-full text-xs opacity-40 line-clamp-1 -sm:y-32">
					{data.album?.name}
				</p>
			</div>
		</div>
	);
};

export default TrackCardDisplay;
