import React from 'react';
import TrackCard from './TrackCard';
import useFeaturedTracks from '@core/swr/featuredTracks';

const FeaturedTracks = () => {
	const { featuredTracks } = useFeaturedTracks();

	console.log(featuredTracks);

	return (
		<div className="flex-cs col mt-24 mb-16">
			<h3 className="mb-8 text-lg">
				<span className="font-medium text-theme-blue">#Featured</span> today
			</h3>
			<div className="grid grid-cols-3 gap-8 ">
				{/* {[].map((data) => (
					<TrackCard data={data} key={data.uri} />
				))} */}
			</div>
		</div>
	);
};

export default FeaturedTracks;

