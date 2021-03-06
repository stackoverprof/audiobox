import React from 'react';
import Lottie from '@components/_shared/Lottie';
import spinner from '@public/lottie/spinner.json';
import { FaPause, FaPlay } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { setPaused, usePlayer } from '@core/redux/reducer/player';
import { useDispatch } from 'react-redux';

const MiniPlayer = () => {
	const dispatch = useDispatch();

	// PLAYER CONTROLS
	const { currentTrack, paused, buffering } = usePlayer();

	const handlePlayer = () => {
		dispatch(setPaused(!paused));
	};

	return (
		<div
			className={[
				'flex-sc col mt-4 w-full bg-black border-t group transition-all duration-300 border-theme-pink overflow-hidden',
				currentTrack.id ? 'h-16 border-opacity-40 hover:h-24' : 'h-0 border-opacity-0',
			].join(' ')}
		>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={`https://open.spotify.com/track/${currentTrack.id}`}
				className="flex-ec overflow-hidden px-2 w-full h-0 bg-opacity-20 opacity-60 transition-all duration-300 bg-theme-pink text-theme-pink hover:opacity-100 hover:text-white hover:bg-theme-pink hover:duration-100 hover:bg-opacity-20 group-hover:h-8"
			>
				<p className="font-medium">Listen full version</p>
				<FiArrowUpRight size={24} className="ml-2" />
			</a>
			<div className="flex-sc w-full h-16">
				<div className="relative w-16 h-16 min-w-[64px] mr-3">
					{currentTrack.album?.images?.length > 0 && (
						<img src={currentTrack.album.images[0].url} alt="" className="" />
					)}
					<button
						onClick={handlePlayer}
						className={[
							'absolute flex-cc top-0 hover:opacity-100 left-0 bg-black bg-opacity-60 transition hover:bg-opacity-75 group-hover:opacity-100 full',
							paused || buffering ? 'opacity-100' : 'opacity-0',
						].join(' ')}
					>
						{paused ? (
							<div className="flex-cc w-8 h-8 rounded-full border-2">
								<FaPlay size={16} className="ml-1" />
							</div>
						) : buffering ? (
							<Lottie animationData={spinner} loop className="w-10 h-10" />
						) : (
							<div className="flex-cc w-8 h-8 rounded-full border-2">
								<FaPause size={16} className="" />
							</div>
						)}
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
		</div>
	);
};

export default MiniPlayer;
