import React from 'react';
import colors from '@core/style/colors';
import CTACreate from './CTACreate';
import LogoAudiobox from './LogoAudiobox';
import MiniPlayer from './MiniPlayer';
import TabLinks from './TabLinks';
import UserProfile from './UserProfile';

const Sidebar = () => {
	return (
		<div
			className="fixed flex-bs col top-0 left-0 pt-8 w-72 h-full bg-black bg-opacity-40"
			style={{ boxShadow: `0 0 40px -8px ${colors.theme.pink}55` }}
		>
			<div className="w-full">
				<LogoAudiobox />
				<CTACreate />
				<TabLinks />
			</div>
			<div className="px-6 w-full"></div>
			<div className="w-full">
				<UserProfile />
				<MiniPlayer />
			</div>
		</div>
	);
};

export default Sidebar;

