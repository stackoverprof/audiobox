import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CTACreate = () => {
	return (
		<div className="px-6 my-8 w-full">
			<Link
				to="/create"
				className="flex-bc py-3 pr-3 pl-4 w-full bg-opacity-70 rounded-md transition group hover:bg-opacity-60 bg-theme-pink"
			>
				<p className="text-lg">Create</p>
				<div className="flex-cc w-9 h-9 bg-white bg-opacity-20 rounded-md transition-all transform group-hover:bg-theme-pink group-hover:bg-opacity-100 group-hover:scale-110">
					<FiPlus className="text-white" size={24} />
				</div>
			</Link>
		</div>
	);
};

export default CTACreate;

