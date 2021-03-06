import React from 'react';
import FilterControl from './FilterControl';
import { ImBooks } from 'react-icons/im';

const HeaderLibrary = () => {
	return (
		<div className="flex-bc px-12 mt-8 mb-4 w-full -md:col">
			<h1 className="flex-cc text-4xl font-semibold -md:mb-4">
				<ImBooks className="mr-4" size={42} /> Library
			</h1>
			<FilterControl />
		</div>
	);
};

export default HeaderLibrary;
