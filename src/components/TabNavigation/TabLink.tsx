import React from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface Props {
	route: string;
	text: string;
	Icon: IconType;
}

const TabLink = ({ route, text, Icon }: Props) => {
	return (
		<Link to={route} className="flex-cc col">
			<Icon size={22} className="mb-1" />
			<p className="text-[11px]">{text}</p>
		</Link>
	);
};

export default TabLink;

