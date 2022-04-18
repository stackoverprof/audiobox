import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';
import { setEditMode } from '@core/redux/reducer/editPlaylist';
import { useDispatch } from 'react-redux';

interface Props {
	handleDelete(): void;
}

const EditButton = ({ handleDelete }: Props) => {
	const dispatch = useDispatch();

	return (
		<div className="flex-cc">
			<button
				type="button"
				onClick={() => dispatch(setEditMode(true))}
				className="flex-cc py-2 pr-3 pl-4 mb-3 rounded-md border border-opacity-60 hover:text-white text-theme-blue border-theme-blue hover:bg-theme-blue hover:bg-opacity-30 "
			>
				<p className="mr-2 font-semibold">Edit</p>
				<FiEdit3 className="m-1" size={16} />
			</button>
			<button
				type="button"
				onClick={handleDelete}
				className="flex-cc py-2 pr-3 pl-4 mb-3 ml-2 text-red-400 rounded-md border border-red-400 border-opacity-60 hover:text-white hover:bg-red-400 hover:bg-opacity-30"
			>
				<p className="mr-2 font-semibold">Delete</p>
				<FaTrash className="" size={14} />
			</button>
		</div>
	);
};

export default EditButton;
