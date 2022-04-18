import React from 'react';
import ResultGrid from './ResultGrid';
import useRecentlyPlayed from '@core/swr/recentlyPlayed';

interface Props {
	showLabel: boolean;
}

const RecentlyGrid = ({ showLabel }: Props) => {
	const { data } = useRecentlyPlayed();
	return (
		<div className="flex-ss col w-full">
			{showLabel && <p className="mb-6 text-3xl font-semibold">Recently played</p>}
			<ResultGrid data={data} />
		</div>
	);
};

export default RecentlyGrid;
