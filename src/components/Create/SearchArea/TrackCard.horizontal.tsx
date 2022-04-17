import React from 'react';
import msToTime from '@core/utils/ms-to-time';
import { FaPlay } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';

interface Props {
	data: any;
	selected: boolean;
}

const TrackCard = ({ data, selected }: Props) => {
	// const id = data.uri;
	// const selected = selectedTracks.includes(id);

	// const handleSelect = () => {
	// 	if (selectedTracks.find((x) => x === id)) return;
	// 	setSelectedTracks([...selectedTracks, id]);
	// };

	// const handleUnSelect = () => {
	// 	if (!selectedTracks.find((x) => x === id)) return;
	// 	const deleted = [...selectedTracks].filter((x) => x !== id);
	// 	setSelectedTracks(deleted);
	// };

	console.log(data);

	return (
		<div className="flex-bc overflow-hidden pl-4 h-28 bg-white bg-opacity-10 rounded-lg backdrop-blur group">
			<div className="flex-cs mr-4">
				<div className="relative overflow-hidden mr-4 w-20 h-20 rounded-md">
					<img
						src={data.album.images[0]?.url || ''}
						alt=""
						className="object-cover mr-4 full"
					/>
					<button className="absolute flex-cc top-0 left-0 bg-black bg-opacity-60 opacity-0 transition hover:bg-opacity-75 group-hover:opacity-100 full">
						<div className="flex-cc w-12 h-12 rounded-full border-2">
							<FaPlay size={24} className="ml-1" />
						</div>
					</button>
				</div>
				<div className="flex-ss col w-56 -sm:w-32">
					<h3 className="overflow-hidden mb-3 w-full font-semibold text-left line-clamp-1 text-ellipsis">
						{data.name}
					</h3>
					<p className="mb-1 w-full text-sm truncate text-ellipsis">
						{data.artists.map((artist, i, arr) => (
							<span key={i}>
								{artist.name}
								{i + 1 < arr.length && ', '}
							</span>
						))}
					</p>
					<p className="w-full text-xs truncate opacity-40 -sm:y-32 text-ellipsis">
						{msToTime(data.duration_ms)} - {data.album.name}
					</p>
				</div>
			</div>
			<div className="flex-cc col w-12 h-full bg-white bg-opacity-5 transition group-hover:bg-theme-pink group-hover:bg-opacity-30">
				<button className="flex-cc full">
					<HiPlus
						size={28}
						className="text-white opacity-40 transition-all transform group-hover:opacity-100 group-hover:text-theme-pink group-hover:scale-125"
					/>
				</button>
			</div>
		</div>
	);
};

export default TrackCard;

