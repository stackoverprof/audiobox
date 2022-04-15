import React from 'react';
import spotifyLogin from '@core/utils/spotify-login';
import { FaSpotify } from 'react-icons/fa';

const CTAButton = () => {
	return (
		<a
			href={spotifyLogin()}
			className="block flex-cc px-4 py-3 text-base font-semibold bg-white rounded"
		>
			<FaSpotify size={24} className="mr-2" />
			Connect to Spotify
		</a>
	);
};

export default CTAButton;

