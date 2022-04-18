import React from 'react';
import ResultGrid from './ResultGrid';
import { useEditPlaylist } from '@core/redux/reducer/editPlaylist';

const ContentTracks = () => {
	const { selectedTracks } = useEditPlaylist();
	return (
		<div className="flex-ss mt-8 col w-full px-12">
			<p className="mb-6 text-3xl font-semibold">Tracks</p>
			<ResultGrid data={selectedTracks.map((x) => x.data)} />
		</div>
	);
};

export default ContentTracks;

