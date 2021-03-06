import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

const SubmissionButtons = () => {
	return (
		<button
			data-testid="button-submit-playlist"
			type="submit"
			className="flex-cc py-2 pr-3 pl-4 mb-3 text-base bg-white rounded-md hover:bg-theme-green"
		>
			<p className="mr-2 font-semibold">Create Playlist</p>
			<BsCheckLg className="m-1" size={16} />
		</button>
	);
};

export default SubmissionButtons;
