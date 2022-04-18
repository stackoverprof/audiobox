import React from 'react';
import TrackCard from './TrackCard.horizontal';

interface Props {
	data: any[];
}

const ResultGrid = ({ data }: Props) => {
	return (
		<div className="grid grid-cols-2 gap-8 mb-8">
			{data.map((data) => (
				<TrackCard data={data} key={data.uri} />
			))}
		</div>
	);
};

export default ResultGrid;
