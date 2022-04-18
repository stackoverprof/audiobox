import React from 'react';
import TrackCard from './TrackCard.horizontal';
import { useCreatePlaylist } from '@core/redux/reducer/createPlaylist';

interface Props {
	data: any[];
}

const ResultGrid = ({ data }: Props) => {
	const { selectedTracks } = useCreatePlaylist();

	return (
		<div className="grid grid-cols-2 gap-8 mb-8">
			{data.map((data) => (
				<TrackCard
					data={data}
					selected={!!selectedTracks.find((track) => track.uri === data.uri)}
					key={data.uri}
				/>
			))}
		</div>
	);
};

export default ResultGrid;
