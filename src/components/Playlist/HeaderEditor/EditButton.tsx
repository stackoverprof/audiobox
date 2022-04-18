import React from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { setEditMode } from '@core/redux/reducer/editPlaylist';
import { useDispatch } from 'react-redux';

const EditButton = () => {
	const dispatch = useDispatch();

	return (
		<button
			type="button"
			onClick={() => dispatch(setEditMode(true))}
			className="flex-cc py-2 pr-3 pl-4 mb-3 text-base bg-white rounded-md hover:bg-theme-blue"
		>
			<p className="mr-2 font-semibold">Edit Playlist</p>
			<FiEdit3 className="m-1" size={16} />
		</button>
	);
};

export default EditButton;
