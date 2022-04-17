import React from 'react';
import { ImBooks } from 'react-icons/im';

const HeaderLibrary = () => {
	return (
		<div className="flex-sc px-12 mt-8 mb-12 w-full">
			<h1 className="flex-cc text-4xl font-semibold">
				<ImBooks className="mr-4" size={42} /> Library
			</h1>
		</div>
	);
};

export default HeaderLibrary;

