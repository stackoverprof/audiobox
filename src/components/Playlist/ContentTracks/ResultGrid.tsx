import React from 'react';
import TrackCard from './TrackCard.horizontal';
import TrackCardAdder from './TrackCardAdder';

interface Props {
	data: any[];
}

const ResultGrid = ({ data }: Props) => {
	return (
		<div className="grid grid-cols-2 gap-8 mb-8">
			{data.map((data) => (
				<TrackCard data={data} key={data.uri} />
			))}
			<TrackCardAdder />
		</div>
	);
};

export default ResultGrid;
