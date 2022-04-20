import React from 'react';
import ClosingTron from './ClosingTron';
import FeaturedTracks from './FeaturedTracks';
import FooterCredit from './FooterCredit';
import JumboTron from './JumboTron';

const MainArea = () => {
	return (
		<div className="container flex-ss col z-10 pl-12 w-full max-w-screen-xl h-full -lg:px-6 -lg:flex-sc">
			<div className="flex-ss col w-2/3 -lg:w-auto -lg:flex-cc ">
				<JumboTron />
				<FeaturedTracks size={6} />
				<ClosingTron />
				<FooterCredit />
			</div>
		</div>
	);
};

export default MainArea;
