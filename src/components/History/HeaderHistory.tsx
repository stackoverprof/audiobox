import React from 'react';
import { FaHistory } from 'react-icons/fa';

const HeaderHistory = () => {
	return (
		<div className="flex-bc px-12 mt-8 mb-4 w-full -lg:col">
			<h1 className="flex-cc text-4xl font-semibold -lg:mb-4">
				<FaHistory className="mr-4" size={42} /> History
			</h1>
			<p className="text-center">See the latest track played in the miniplayer.</p>
		</div>
	);
};

export default HeaderHistory;

