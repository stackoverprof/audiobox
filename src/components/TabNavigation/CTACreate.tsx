import React from 'react';
import { HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const CTACreate = () => {
	return (
		<Link
			to="/create"
			className="flex-cc mb-1 w-14 h-10 bg-opacity-75 rounded-lg bg-theme-pink"
		>
			<HiPlus size={28} />
		</Link>
	);
};

export default CTACreate;

