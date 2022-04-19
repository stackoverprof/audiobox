import React from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { setPaused, usePlayer } from '@core/redux/reducer/player';
import { useDispatch } from 'react-redux';

const MiniPlayer = () => {
	const dispatch = useDispatch();

	// PLAYER CONTROLS
	const { currentTrack, paused } = usePlayer();

	const handlePlayer = () => {
		dispatch(setPaused(!paused));
	};

	return (
		<div
			className={[
				'flex-sc mt-4 w-full bg-black border-t transition-all duration-300 border-theme-pink overflow-hidden',
				currentTrack.id ? 'h-16 border-opacity-40' : 'h-0  border-opacity-0',
			].join(' ')}
		>
			<div className="relative w-16 h-16 min-w-[64px] mr-3">
				{currentTrack.album?.images?.length > 0 && (
					<img src={currentTrack.album.images[0].url} alt="" className="" />
				)}
				<button
					onClick={handlePlayer}
					className={[
						'absolute flex-cc top-0 hover:opacity-100 left-0 bg-black bg-opacity-60 transition hover:bg-opacity-75 group-hover:opacity-100 full',
						paused ? 'opacity-100' : 'opacity-0',
					].join(' ')}
				>
					<div className="flex-cc w-8 h-8 rounded-full border-2">
						{!paused ? (
							<FaPause size={16} className="" />
						) : (
							<FaPlay size={16} className="ml-1" />
						)}
					</div>
				</button>
			</div>
			<div className="flex-bc py-2 w-full h-full">
				<div className="flex-cs col h-full">
					<p className="text-sm line-clamp-1">{currentTrack.name}</p>
					<p className="w-full text-xs opacity-50 line-clamp-1">
						{currentTrack.artists?.map((artist, i, arr) => (
							<span key={i}>
								{artist.name}
								{i + 1 < arr.length && ', '}
							</span>
						))}
					</p>
				</div>
			</div>
		</div>
	);
};
// [TODO] : listen full button, redirect spotify
export default MiniPlayer;
