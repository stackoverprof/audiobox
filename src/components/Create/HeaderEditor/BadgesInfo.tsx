import React from 'react';
import { MdOutlineGroupOff } from 'react-icons/md';
import { RiShieldKeyholeLine } from 'react-icons/ri';

const BadgesInfo = () => {
	return (
		<div className="flex-cs col pl-2 -xl:flex-cc -xl:flex-row -xl:ml-4 -lg:ml-0 -lg:mt-4 -xl:p-0">
			<div className="flex-cc my-1 opacity-60 hover:opacity-100 -xl:mr-4">
				<RiShieldKeyholeLine size={20} />
				<p className="ml-2 text-sm line-clamp-1">Private</p>
			</div>
			<div className="flex-cc my-1 opacity-60 hover:opacity-100 -xl:mr-4">
				<MdOutlineGroupOff size={20} />
				<p className="ml-2 text-sm line-clamp-1">Non-collaborative</p>
			</div>
		</div>
	);
};

export default BadgesInfo;
