import React from 'react';
import EmptyHolder from './EmptyHolder';
import TrackCardSlim from './TrackCardSlim';
import { usePlayer } from '@core/redux/reducer/player';

const HistoryGrid = () => {
	const { history } = usePlayer();
	return (
		<div className="flex-ss col px-12 pt-8 w-full -sm:px-6 ">
			<div className="flex-ss col w-full max-w-[820px]">
				{history.map((data) => (
					<TrackCardSlim data={data} key={data.uri} />
				))}
				{!history.length && <EmptyHolder />}
			</div>
		</div>
	);
};

export default HistoryGrid;
