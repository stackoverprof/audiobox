import React from 'react';
import HeaderExplore from '@components/Explore/HeaderExplore';
import MainLayout from '@components/_layouts/MainLayout';

const Explore = () => {
	return (
		<MainLayout title="Explore" className="flex-sc col w-full">
			<HeaderExplore />
		</MainLayout>
	);
};

export default Explore;
