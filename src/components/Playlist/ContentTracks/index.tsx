import React from 'react';
import ButtonOptions from './ButtonOptions';
import CoverPlaylist from './CoverPlaylist';
import ResultGrid from './ResultGrid';
import { useEditPlaylist } from '@core/redux/reducer/editPlaylist';

interface Props {
	data: any;
}

const ContentTracks = ({ data }: Props) => {
	const { selectedTracks } = useEditPlaylist();

	return (
		<div className="w-full flex-ss">
			<div className="flex-sc col px-12 pt-8 w-full max-w-[820px]">
				<div className="flex-bc mb-6 w-full text-3xl font-semibold">
					<p className="">Tracks</p>
					<ButtonOptions />
				</div>
				<ResultGrid data={selectedTracks.map((x) => x.data)} />
			</div>
			<div className="w-48 pt-8">
				<div className="flex-bc mb-6 w-full text-3xl font-semibold">
					<p className="">Play All</p>
				</div>
				<CoverPlaylist images={data.images} />
			</div>
		</div>
	);
};

export default ContentTracks;
