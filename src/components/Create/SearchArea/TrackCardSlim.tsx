import React from 'react';
import msToTime from '@core/utils/ms-to-time';
import { addTrack, removeTrack } from '@core/redux/actions/createPlaylist';
import { BsCheckLg } from 'react-icons/bs';
import { FaPause, FaPlay } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import { play } from '@core/redux/actions/player';
import { setPaused, usePlayer } from '@core/redux/reducer/player';
import { useDispatch } from 'react-redux';

interface Props {
	data: any;
	selected: boolean;
}

const TrackCardSlim = ({ data, selected }: Props) => {
	if (!data) return <></>;

	const dispatch = useDispatch();

	const handleSelect = () => {
		dispatch(addTrack({ uri: data.uri, data }));
	};
	const handleUnSelect = () => {
		dispatch(removeTrack(data.uri));
	};

	// PLAYER CONTROLS
	const { currentTrack, paused } = usePlayer();

	const handlePlayer = () => {
		if (currentTrack.id !== data.id) dispatch(play([data]));
		else dispatch(setPaused(!paused));
	};

	const isPlaying = currentTrack.id ? currentTrack.id === data.id : false;

	return (
		<div
			data-testid="track-cards-result"
			className="flex-bc overflow-hidden pl-4 h-28 bg-white bg-opacity-10 rounded-lg backdrop-blur group"
		>
			<div className="flex-cs mr-4">
				<div
					className="relative overflow-hidden mr-4 w-20 h-20 min-w-[80px] rounded-md"
					data-id="cover-track-cards-result"
				>
					{data.album?.images?.length > 0 && (
						<img
							src={data.album?.images[0].url}
							alt=""
							className="object-cover mr-4 full"
						/>
					)}
					<button
						onClick={handlePlayer}
						className={[
							'absolute flex-cc top-0 left-0 bg-black bg-opacity-60 transition hover:bg-opacity-75 group-hover:opacity-100 full',
							isPlaying && !paused ? 'opacity-100' : 'opacity-0',
						].join(' ')}
					>
						<div className="flex-cc w-12 h-12 rounded-full border-2">
							{isPlaying && !paused ? (
								<FaPause size={24} className="" />
							) : (
								<FaPlay size={24} className="ml-1" />
							)}
						</div>
					</button>
				</div>
				<div className="flex-ss col w-full">
					<h3
						className="overflow-hidden mb-3 w-full font-semibold text-left line-clamp-1"
						data-id="title-track-cards-result"
					>
						{data.name}
					</h3>
					<p
						className="mb-1 w-full text-sm line-clamp-1"
						data-id="description-track-cards-result"
					>
						{data.artists?.map((artist, i, arr) => (
							<span key={i}>
								{artist.name}
								{i + 1 < arr.length && ', '}
							</span>
						))}
					</p>
					<p
						className="w-full text-xs opacity-40 line-clamp-1 -sm:y-32"
						data-id="duration-track-cards-result"
					>
						{msToTime(data.duration_ms)} - {data.album?.name}
					</p>
				</div>
			</div>
			{selected ? (
				<button
					data-testid="button-to-unselect-track"
					onClick={handleUnSelect}
					className="flex-cc w-12 min-w-[48px] h-full bg-opacity-30 transition bg-theme-blue hover:bg-opacity-30"
				>
					<BsCheckLg size={20} className="transition-all transform text-theme-blue" />
				</button>
			) : (
				<button
					data-testid="button-to-select-track"
					onClick={handleSelect}
					className="flex-cc w-12 min-w-[48px] h-full bg-opacity-5 transition bg-white  hover:bg-theme-green hover:bg-opacity-30"
				>
					<HiPlus
						size={28}
						className="text-white opacity-40 transition-all transform group-hover:opacity-100 group-hover:text-theme-green group-hover:scale-125"
					/>
				</button>
			)}
		</div>
	);
};

export default TrackCardSlim;
