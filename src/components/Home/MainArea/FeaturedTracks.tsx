import React, { useState } from 'react';
import TrackCard from './TrackCard';
import useFeaturedTracks from '@core/swr/featuredTracks';

interface Props {
	size: number;
}

const FeaturedTracks = ({ size }: Props) => {
	const [index, setIndex] = useState(1);
	const { featuredTracks } = useFeaturedTracks();

	const loadMore = () => setIndex(index + 1);

	return (
		<div className="flex-cs col mt-24 mb-16">
			<h3 className="mb-8 text-lg">
				Featured Daily Global&nbsp;
				<span className="font-medium text-theme-blue">#TopCharts</span>
			</h3>
			<div className="grid grid-cols-3 gap-8 ">
				{featuredTracks.slice(0, size * index).map((data, i) => (
					<TrackCard data={data} index={i} key={data.uri} />
				))}
			</div>
			<div className="flex-cc w-full">
				<button
					onClick={loadMore}
					className="flex-cc mt-6 w-32 h-8 rounded-lg transition-all hover:bg-white hover:bg-opacity-30 hover:border-none"
				>
					Load more
				</button>
			</div>
		</div>
	);
};

export default FeaturedTracks;

