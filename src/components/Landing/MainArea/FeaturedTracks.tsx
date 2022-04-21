import React, { useState } from 'react';
import TrackCard from './TrackCard';
import useFeaturedTracks from '@core/swr/featuredTracks';
import { MdRefresh } from 'react-icons/md';

interface Props {
	size: number;
}

const FeaturedTracks = ({ size }: Props) => {
	const [index, setIndex] = useState(1);
	const { featuredTracks } = useFeaturedTracks();

	const loadMore = () => setIndex(index + 1);

	return (
		<div className="flex-cs col mb-16 -md:flex-cc">
			<h3 className="mb-8 text-lg">
				Featured Daily Global&nbsp;
				<span className="font-medium text-theme-blue">#TopCharts</span>
			</h3>
			<div className="grid min-h-[400px] grid-cols-3 gap-8 -sm:gap-4 -xl:grid-cols-2 -lg:grid-cols-3 -md:grid-cols-2 ">
				{featuredTracks.slice(0, size * index).map((data, i) => (
					<TrackCard data={data} index={i} key={data.uri} />
				))}
			</div>
			<div className="flex-cc w-full">
				<button
					onClick={loadMore}
					disabled={(index + 1) * size > featuredTracks.length}
					className="flex-cc mt-6 w-32 h-8 rounded-lg transition-all disabled:opacity-20 hover:bg-white hover:bg-opacity-30 hover:border-none"
				>
					<MdRefresh size={18} className="mr-2" />
					<p className="mr-0.5">Load more</p>
				</button>
			</div>
		</div>
	);
};

export default FeaturedTracks;
