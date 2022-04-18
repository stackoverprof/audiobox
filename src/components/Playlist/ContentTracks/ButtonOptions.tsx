import React from 'react';
import { HiPlus } from 'react-icons/hi';
import { setEditMode } from '@core/redux/reducer/editPlaylist';
import { useDispatch } from 'react-redux';


const ButtonOptions = () => {
	const dispatch = useDispatch();
	return (
		<div className="flex-cc">
			<button
				onClick={() => dispatch(setEditMode(true))}
				className="flex-cc ml-2 w-8 h-8 rounded-md border border-opacity-50 text-theme-blue hover:bg-theme-blue hover:bg-opacity-20 hover:text-white border-theme-blue"
			>
				<HiPlus size={24} />
			</button>
		</div>
	);
};

export default ButtonOptions;

