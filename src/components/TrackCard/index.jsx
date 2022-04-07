import { PropTypes } from 'prop-types';
import React from 'react';

const TrackCard = ({ data, selectedTracks, setSelectedTracks }) => {
	const id = data.uri;
	const selected = selectedTracks.includes(id);

	const handleSelect = () => {
		if (selectedTracks.find((x) => x === id)) return;
		setSelectedTracks([...selectedTracks, id]);
	};

	const handleUnSelect = () => {
		if (!selectedTracks.find((x) => x === id)) return;
		const deleted = [...selectedTracks].filter((x) => x !== id);
		setSelectedTracks(deleted);
	};

	return (
		<div className="flex-bc p-4 bg-white bg-opacity-10 rounded-lg border">
			<div className="flex-bc col h-full">
				<div className="flex-cs col mb-4">
					<img
						src={data.album.images[0].url}
						alt=""
						className="object-cover mb-4 w-52 h-52 rounded-md"
					/>
					<h3 className="mb-2 font-semibold">{data.name}</h3>
					<p className="text-sm">
						{data.artists.map((artist, i, arr) => (
							<span key={i}>
								{artist.name}
								{i + 1 < arr.length && ', '}
							</span>
						))}
					</p>
					<p className="text-sm">{data.album.name}</p>
				</div>
				<button
					className={[
						'w-full rounded-md py-2 font-semibold',
						selected ? 'bg-green-300 text-base' : 'bg-white text-base',
					].join(' ')}
					onClick={selected ? handleUnSelect : handleSelect}
				>
					{selected ? 'Selected' : 'Select'}
				</button>
			</div>
		</div>
	);
};

export default TrackCard;

TrackCard.propTypes = {
	data: PropTypes.any.isRequired,
	selectedTracks: PropTypes.any.isRequired,
	setSelectedTracks: PropTypes.func.isRequired,
};

