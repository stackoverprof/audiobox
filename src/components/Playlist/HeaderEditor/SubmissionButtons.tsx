import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { setEditMode } from '@core/redux/reducer/editPlaylist';
import { useDispatch } from 'react-redux';

const SubmissionButtons = () => {
	const dispatch = useDispatch();

	const handleCancel = () => {
		dispatch(setEditMode(false));
	};

	return (
		<div className="flex-cc">
			<button
				type="submit"
				className="flex-cc py-2 pr-3 pl-4 mb-3 text-base bg-white rounded-md hover:bg-theme-green"
			>
				<p className="mr-2 font-semibold">Save</p>
				<BsCheckLg className="m-1" size={16} />
			</button>
			<button
				type="button"
				onClick={handleCancel}
				className="flex-cc py-2 pr-3 pl-4 mb-3 ml-2 text-red-400 rounded-md border border-red-400 border-opacity-60 hover:text-white hover:bg-red-400 hover:bg-opacity-30"
			>
				<p className="mr-2 font-semibold">Cancel</p>
				<CgClose className="" size={20} />
			</button>
		</div>
	);
};

export default SubmissionButtons;
