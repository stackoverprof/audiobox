import React from 'react';
import TrackCard from './TrackCard';
import useFeaturedTracks from '@core/swr/featuredTracks';

interface Props {
	limit: number;
}

const FeaturedTracks = ({ limit }: Props) => {
	const { featuredTracks } = useFeaturedTracks();

	return (
		<div className="flex-cs col mt-24 mb-16">
			<h3 className="mb-8 text-lg">
				Featured Daily&nbsp;
				<span className="font-medium text-theme-blue">#TopCharts</span>
			</h3>
			<div className="grid grid-cols-3 gap-8 ">
				{featuredTracks.slice(0, limit).map((data, i) => (
					<TrackCard data={data} index={i} key={data.uri} />
				))}
			</div>
		</div>
	);
};

export default FeaturedTracks;

