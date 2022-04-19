import React from 'react';
import { setSelectedFilter, useLibrary } from '@core/redux/reducer/library';
import { useDispatch } from 'react-redux';

const FilterControl = () => {
	const dispatch = useDispatch();
	const { selectedFilter } = useLibrary();

	return (
		<div className="flex-cc pt-2">
			<button
				onClick={() => dispatch(setSelectedFilter(''))}
				className={[
					'px-2 py-1 ml-2 rounded-md border border-opacity-50  border-theme-blue',
					selectedFilter === ''
						? 'bg-theme-blue bg-opacity-30 text-white'
						: 'text-theme-blue',
				].join(' ')}
			>
				All
			</button>
			<button
				onClick={() => dispatch(setSelectedFilter('owned'))}
				className={[
					'px-2 py-1 ml-2 rounded-md border border-opacity-50 border-theme-blue',
					selectedFilter === 'owned'
						? 'bg-theme-blue bg-opacity-30 text-white'
						: 'text-theme-blue',
				].join(' ')}
			>
				Owned
			</button>
			<button
				onClick={() => dispatch(setSelectedFilter('public'))}
				className={[
					'px-2 py-1 ml-2 rounded-md border border-opacity-50 border-theme-blue',
					selectedFilter === 'public'
						? 'bg-theme-blue bg-opacity-30 text-white'
						: 'text-theme-blue',
				].join(' ')}
			>
				Public
			</button>
		</div>
	);
};

export default FilterControl;
