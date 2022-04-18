import React from 'react';
import Lottie from '@components/Lottie';
import worldMap from '@public/lottie/world-map.json';
import { FaGlobeAmericas } from 'react-icons/fa';

const HeaderExplore = () => {
	return (
		<div
			className="w-full relative h-64 bg-white flex-sc pl-12"
			style={{ background: 'linear-gradient(0deg, #fff0, #fff1, #fff3)' }}
		>
			<h1 className="flex-cc text-5xl font-semibold">
				<FaGlobeAmericas className="mr-4" size={52} /> Explore
			</h1>
			<div className="absolute top-0 right-0 overflow-hidden full flex-es">
				<Lottie
					animationData={worldMap}
					loop
					className="absolute top-0 -right-32 h-[440px]"
				/>
			</div>
		</div>
	);
};

export default HeaderExplore;
