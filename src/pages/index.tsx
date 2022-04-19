import React from 'react';
import BannerWelcome from '@components/Landing/BannerWelcome';
import CleanLayout from '@components/_layouts/CleanLayout';
import MainArea from '@components/Landing/MainArea';

const Landing = () => {
	return (
		<CleanLayout title="" className="flex-cc w-full h-screen">
			<MainArea />
			<BannerWelcome />
		</CleanLayout>
	);
};

export default Landing;
