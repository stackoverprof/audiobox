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
		<div className="music">
			<div className="card-music">
				<div className="upper">
					<img src={data.album.images[0].url} alt="" />
					<h3 className="title">{data.name}</h3>
					<p className="artist">
						{data.artists.map((artist, i, arr) => (
							<span key={i}>
								{artist.name}
								{i + 1 < arr.length && ', '}
							</span>
						))}
					</p>
					<p className="album">{data.album_name}</p>
				</div>
				<button
					className={`play ${selected && 'selected'}`}
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

