import React from 'react';
import ButtonOptions from './ButtonOptions';
import CoverPlaylist from './CoverPlaylist';
import ResultGrid from './ResultGrid';
import usePlaylist from '@core/swr/usePlaylist';
import { useEditPlaylist } from '@core/redux/reducer/editPlaylist';

interface Props {
	data: any;
}

const ContentTracks = ({ data }: Props) => {
	const { id, selectedTracks } = useEditPlaylist();
	const { playlist } = usePlaylist(id);

	if (!playlist.id) return <></>;
	return (
		<div className="flex-ss w-full">
			<div className="flex-sc col px-12 pt-8 w-3/4 max-w-[820px]">
				<div className="flex-bc mb-6 w-full text-3xl font-semibold">
					<p className="">Tracks</p>
					<ButtonOptions />
				</div>
				<ResultGrid data={selectedTracks.map((x) => x.data)} />
			</div>
			<div className="pt-8 w-48">
				<div className="flex-bc mb-6 w-full text-3xl font-semibold">
					<p className="">Play All</p>
				</div>
				<CoverPlaylist
					tracks={playlist.tracks.items.map((x) => x.track)}
					images={data.images}
				/>
			</div>
		</div>
	);
};

export default ContentTracks;
