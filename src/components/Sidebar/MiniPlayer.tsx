import React from 'react';

const MiniPlayer = () => {
	return (
		<div className="mt-4 w-full h-20 bg-black border-t border-opacity-40 border-theme-pink">
			<audio controls>
				<source src="horse.ogg" type="audio/ogg" />
				<source src="horse.mp3" type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>
		</div>
	);
};

export default MiniPlayer;
