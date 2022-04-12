import { PropTypes } from 'prop-types';
import React from 'react';
import TrackCard from '../TrackCard';

import 'src/core/style/style-gigih.css';

const TracksGrid = ({ searchResult, selectedTracks, setSelectedTracks }) => {
	return (
		<div className="flex-cc w-full">
			<div className="grid-gigih">
				{searchResult.map((data) => (
					<TrackCard
						data={data}
						selectedTracks={selectedTracks}
						setSelectedTracks={setSelectedTracks}
						key={data.uri}
					/>
				))}
			</div>
			{!searchResult.length && <p className="">Search and select some tracks first!</p>}
		</div>
	);
};

export default TracksGrid;

TracksGrid.propTypes = {
	searchResult: PropTypes.any.isRequired,
	selectedTracks: PropTypes.any.isRequired,
	setSelectedTracks: PropTypes.func.isRequired,
};
