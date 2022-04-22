import React from 'react';
import TabLink from './TabLink';
import useUserPlaylist from '@core/swr/userPlaylists';
import { FaGlobeAmericas, FaHistory } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { useLocation } from 'react-router-dom';

const TabLinks = () => {
	const { data } = useUserPlaylist();
	const { pathname } = useLocation();

	return (
		<div className="px-6 w-full">
			<TabLink
				active={pathname === '/explore'}
				route="/explore"
				text="Explore"
				Icon={FaGlobeAmericas}
			/>
			<TabLink
				active={pathname === '/history'}
				route="/history"
				text="History"
				Icon={FaHistory}
			/>
			<TabLink
				active={pathname === '/library'}
				route="/library"
				text="Library"
				Icon={ImBooks}
				badge={data.length > 49 ? '49+' : data.length}
			/>
		</div>
	);
};

export default TabLinks;
