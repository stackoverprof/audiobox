import React from 'react';
import { MdOutlineGroupOff } from 'react-icons/md';
import { RiShieldKeyholeLine } from 'react-icons/ri';

const BadgesInfo = () => {
	return (
		<div className="flex-cs col pl-2">
			<div className="flex-cc my-1 opacity-60 hover:opacity-100">
				<RiShieldKeyholeLine size={20} />
				<p className="ml-2 text-sm">Private</p>
			</div>
			<div className="flex-cc my-1 opacity-60 hover:opacity-100">
				<MdOutlineGroupOff size={20} />
				<p className="ml-2 text-sm">Non-collaborative</p>
			</div>
		</div>
	);
};

export default BadgesInfo;
