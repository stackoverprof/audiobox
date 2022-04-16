import React from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface Props {
	route: string;
	text: string;
	Icon: IconType;
}

const TabLink = ({ route, text, Icon }: Props) => {
	const getPlaylistNumber = () => {
		return 12;
	};
	return (
		<Link
			to={route}
			className="flex-bc px-3 w-full h-12 bg-white bg-opacity-0 rounded-md hover:bg-opacity-20"
		>
			<div className="flex-cc">
				<Icon size={24} className="mr-4" />
				<p className="">{text}</p>
			</div>
			<div className="flex-cc">
				{route === '/library' && (
					<div className="px-2 py-1 text-xs bg-white bg-opacity-20 rounded">
						{getPlaylistNumber()}
					</div>
				)}
			</div>
		</Link>
	);
};

export default TabLink;

