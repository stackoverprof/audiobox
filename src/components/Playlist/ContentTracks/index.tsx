import React from 'react';
import ResultGrid from './ResultGrid';
import { HiPlus } from 'react-icons/hi';
import { setEditMode, useEditPlaylist } from '@core/redux/reducer/editPlaylist';
import { useDispatch } from 'react-redux';

const ContentTracks = () => {
	const { selectedTracks } = useEditPlaylist();
	const dispatch = useDispatch();

	return (
		<div className="flex-sc col px-12 mt-8 w-full max-w-[900px]">
			<div className="flex-bc mb-6 w-full text-3xl font-semibold">
				<p className="">Tracks</p>
				<button
					onClick={() => dispatch(setEditMode(true))}
					className="flex-cc ml-4 w-8 h-8 rounded-md border border-opacity-50 text-theme-blue hover:bg-theme-blue hover:bg-opacity-20 hover:text-white border-theme-blue"
				>
					<HiPlus size={24} />
				</button>
			</div>
			<ResultGrid data={selectedTracks.map((x) => x.data)} />
		</div>
	);
};

export default ContentTracks;
