import React from 'react';
import CoverPlaylist from './CoverPlaylist';
import EmptyHolder from './EmptyHolder';
import TrackCardSlim from './TrackCardSlim';
import { usePlayer } from '@core/redux/reducer/player';

const HistoryGrid = () => {
	const { history } = usePlayer();
	if (!history.length) return <EmptyHolder />;

	return (
		<div className="flex-ss px-12 pt-8 w-full -sm:px-6 -lg:flex-col-reverse">
			<div className="flex-ss mr-8 col w-full max-w-[520px]">
				<p className="mb-4 text-lg font-semibold">Track Records</p>
				{history.map((data) => (
					<TrackCardSlim data={data} key={data.uri} />
				))}
			</div>
			<div className="flex-ss col mb-8">
				<p className="mb-4 text-lg font-semibold">Replay All</p>
				<CoverPlaylist tracks={history} images={history[0].album?.images || []} />
			</div>
		</div>
	);
};

export default HistoryGrid;
