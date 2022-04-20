import React from 'react';
import TrackCardAdder from './TrackCardAdder';
import TrackCardSlim from './TrackCardSlim';

interface Props {
	data: any[];
}

const ResultGrid = ({ data }: Props) => {
	return (
		<div className="grid grid-cols-2 gap-8 mb-8 w-full -xl:grid-cols-1">
			{data.map((data) => (
				<TrackCardSlim data={data} key={data.uri} />
			))}
			<TrackCardAdder />
		</div>
	);
};

export default ResultGrid;
