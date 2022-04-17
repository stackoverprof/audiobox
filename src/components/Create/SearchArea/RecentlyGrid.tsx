import React from 'react';
import ResultGrid from './ResultGrid';
import useRecentlyPlayed from '@core/swr/recentlyPlayed';

const RecentlyGrid = () => {
	const { data } = useRecentlyPlayed();
	return (
		<div className="flex-ss col pt-8 w-full">
			<p className="mb-6 text-xl font-semibold">Recently played</p>
			<ResultGrid data={data} />
		</div>
	);
};

export default RecentlyGrid;

