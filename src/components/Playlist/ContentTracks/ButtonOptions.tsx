import React from 'react';
import usePlaylist from '@core/swr/usePlaylist';
import { HiPlus } from 'react-icons/hi';
import { setEditMode, useEditPlaylist } from '@core/redux/reducer/editPlaylist';
import { useDispatch } from 'react-redux';

const ButtonOptions = () => {
	const { id } = useEditPlaylist();
	const { isOwned } = usePlaylist(id);
	const dispatch = useDispatch();

	if (!isOwned) return <></>;
	return (
		<div className="flex-cc">
			<button
				onClick={() => (isOwned ? dispatch(setEditMode(true)) : {})}
				className="flex-cc ml-2 w-8 h-8 rounded-md border border-opacity-50 text-theme-blue hover:bg-theme-blue hover:bg-opacity-20 hover:text-white border-theme-blue"
			>
				<HiPlus size={24} />
			</button>
		</div>
	);
};

export default ButtonOptions;
