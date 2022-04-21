import React from 'react';
import colors from '@core/style/colors';
import CTACreate from './CTACreate';
import LogoAudiobox from './LogoAudiobox';
import MiniPlayer from './MiniPlayer';
import PlaylistsPeek from './PlaylistsPeek';
import TabLinks from './TabLinks';
import UserProfile from './UserProfile';

const Sidebar = () => {
	return (
		<div
			className="fixed flex-ss col top-0 left-0 z-50 pt-8 w-72 h-full bg-black bg-opacity-40"
			style={{ boxShadow: `0 0 40px -8px ${colors.theme.pink}55` }}
		>
			<div className="w-full">
				<LogoAudiobox />
				<CTACreate />
				<TabLinks />
				<PlaylistsPeek />
			</div>
			<div className="absolute bottom-0 w-full bg-[#070215]">
				<UserProfile />
				<MiniPlayer />
			</div>
		</div>
	);
};
// [TODO] : responsivness scorll?
export default Sidebar;
