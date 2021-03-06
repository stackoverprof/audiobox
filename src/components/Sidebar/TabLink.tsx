import React from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface Props {
	route: string;
	text: string;
	Icon: IconType;
	badge?: string | number;
	active?: boolean;
}

const TabLink = ({ active, route, text, Icon, badge = '' }: Props) => {
	return (
		<Link
			to={route}
			className="flex-bc px-3 w-full h-12 bg-white bg-opacity-0 rounded-md hover:bg-opacity-20"
		>
			<div className={['flex-sc', active ? '' : 'text-white'].join(' ')}>
				<Icon size={24} className="mr-4" />
				<p className="">{text}</p>
			</div>
			<div className="flex-cc">
				{badge.toString() && (
					<div className="px-2 py-1 text-xs bg-white bg-opacity-20 rounded">{badge}</div>
				)}
			</div>
		</Link>
	);
};

export default TabLink;
