import React from 'react';
import TabLink from './TabLink';
import useUserPlaylist from '@core/swr/userPlaylists';
import { FaGlobeAmericas, FaHistory } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';

const TabLinks = () => {
	const { data } = useUserPlaylist();

	return (
		<div className="px-6 w-full">
			<TabLink route="/explore" text="Explore" Icon={FaGlobeAmericas} />
			<TabLink route="/history" text="History" Icon={FaHistory} />
			<TabLink
				route="/library"
				text="Library"
				Icon={ImBooks}
				badge={data.length > 49 ? '49+' : data.length}
			/>
		</div>
	);
};

export default TabLinks;
