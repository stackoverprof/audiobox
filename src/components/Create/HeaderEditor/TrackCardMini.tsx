import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { removeTrack } from '@core/redux/actions/createPlaylist';
import { useDispatch } from 'react-redux';

interface Props {
	data: any;
}

const TrackCardMini = ({ data }: Props) => {
	if (!data) return <></>;

	const dispatch = useDispatch();

	const handleUnSelect = () => {
		dispatch(removeTrack(data.uri));
	};

	return (
		<div className="relative flex-bc mt-2 h-16 bg-white bg-opacity-10 rounded-lg backdrop-blur group">
			<div className="flex-sc pr-4">
				<div className="relative overflow-hidden mr-4 ml-3 w-12 h-12 rounded-md">
					{data.album?.images?.length > 0 && (
						<img
							src={data.album?.images[0].url}
							alt=""
							className="object-cover mr-4 w-12 h-12 full"
						/>
					)}
					<button className="absolute flex-cc top-0 left-0 bg-black bg-opacity-60 opacity-0 transition hover:bg-opacity-75 group-hover:opacity-100 full">
						<div className="flex-cc w-8 h-8 rounded-full border-2">
							<FaPlay size={16} className="ml-1" />
						</div>
					</button>
				</div>
				<div className="flex-cs col flex-1">
					<h3 className="overflow-hidden w-full text-sm font-semibold text-left line-clamp-1">
						{data.name}
					</h3>
					<p className="w-full text-sm line-clamp-1">
						{data.artists?.map((artist, i, arr) => (
							<span key={i}>
								{artist.name}
								{i + 1 < arr.length && ', '}
							</span>
						))}
					</p>
				</div>
			</div>
			<div className="absolute opacity-0 flex-cc -top-1.5 group-hover:opacity-100 -right-2">
				<IoMdCloseCircle
					onClick={handleUnSelect}
					className="text-white cursor-pointer hover:text-red-300"
					size={24}
				/>
			</div>
		</div>
	);
};

export default TrackCardMini;
