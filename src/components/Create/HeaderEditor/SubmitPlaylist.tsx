import React from 'react';
import { BsCheck, BsCheckLg } from 'react-icons/bs';
import { IoMdAddCircleOutline } from 'react-icons/io';

const SubmitPlaylist = () => {
	return (
		<button className="flex-cc py-2 pr-3 pl-4 mb-3 text-base bg-white rounded-md">
			<p className="mr-2 font-semibold">Create Playlist</p>
			<BsCheckLg className="m-1" size={16} />
		</button>
	);
};

export default SubmitPlaylist;

