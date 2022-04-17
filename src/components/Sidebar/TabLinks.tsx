import React from 'react';
import TabLink from './TabLink';
import { FaGlobeAmericas } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';

const DATA_TAB_LINKS = [
	{
		route: '/explore',
		text: 'Explore',
		icon: FaGlobeAmericas,
	},
	{
		route: '/library',
		text: 'Library',
		icon: ImBooks,
	},
];

const TabLinks = () => {
	return (
		<div className="px-6 w-full">
			{DATA_TAB_LINKS.map((item, i) => (
				<TabLink route={item.route} text={item.text} Icon={item.icon} key={i} />
			))}
		</div>
	);
};

export default TabLinks;

