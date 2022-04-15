import React from 'react';
import BannerWelcome from '@components/Home/BannerWelcome';
import CleanLayout from '@components/_layouts/CleanLayout';
import MainArea from '@components/Home/MainArea';

const Home = () => {
	return (
		<CleanLayout title="Home" className="flex-cc w-full h-screen">
			<MainArea />
			<BannerWelcome />
		</CleanLayout>
	);
};

export default Home;
