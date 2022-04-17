import React from 'react';
import TrackCard from './TrackCard.horizontal';
import { useCreatePlaylist } from '@core/redux/reducer/createPlaylist';

interface Props {
	data: any[];
}

const ResultGrid = ({ data }: Props) => {
	const { selectedTracks } = useCreatePlaylist();

	return (
		<div className="flex-cc w-full">
			<div className="flex flex-ss flex-wrap">
				{data.map((data) => (
					<TrackCard
						data={data}
						selected={!!selectedTracks.find((track) => track.uri === data.uri)}
						key={data.uri}
					/>
				))}
			</div>
		</div>
	);
};

export default ResultGrid;

