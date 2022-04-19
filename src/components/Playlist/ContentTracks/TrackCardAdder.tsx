import React from 'react';
import usePlaylist from '@core/swr/usePlaylist';
import { HiPlus } from 'react-icons/hi';
import { setEditMode, useEditPlaylist } from '@core/redux/reducer/editPlaylist';
import { useDispatch } from 'react-redux';

const TrackCardAdder = () => {
	const { id } = useEditPlaylist();
	const { isOwned } = usePlaylist(id);

	const dispatch = useDispatch();

	if (!isOwned) return <></>;
	return (
		<button
			onClick={() => (isOwned ? dispatch(setEditMode(true)) : {})}
			className="flex-cc w-full h-28 rounded-md border border-white border-opacity-20 transition group hover:bg-white hover:bg-opacity-5"
		>
			<HiPlus
				size={40}
				className="text-white opacity-30 transition group-hover:opacity-100"
			/>
		</button>
	);
};

export default TrackCardAdder;
