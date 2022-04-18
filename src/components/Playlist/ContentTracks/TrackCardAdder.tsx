import React from 'react';
import { HiPlus } from 'react-icons/hi';
import { setEditMode } from '@core/redux/reducer/editPlaylist';
import { useDispatch } from 'react-redux';

const TrackCardAdder = () => {
	const dispatch = useDispatch();
	return (
		<button
			onClick={() => dispatch(setEditMode(true))}
			className="h-28 transition w-full border border-white group rounded-md hover:bg-white hover:bg-opacity-5 flex-cc border-opacity-20"
		>
			<HiPlus
				size={40}
				className="text-white opacity-30 group-hover:opacity-100 transition"
			/>
		</button>
	);
};

export default TrackCardAdder;
