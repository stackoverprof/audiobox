import React from 'react';
import EtalaseMapper from '@components/Explore/EtalaseMapper';
import HeaderExplore from '@components/Explore/HeaderExplore';
import MainLayout from '@components/_layouts/MainLayout';

const Explore = () => {
	return (
		<MainLayout title="Explore" className="flex-sc col overflow-hidden w-full">
			<HeaderExplore />
			<EtalaseMapper />
		</MainLayout>
	);
};

export default Explore;
