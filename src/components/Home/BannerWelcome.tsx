import React from 'react';
import girlMusic from '@public/lottie/girlMusic.json';
import Lottie from '@components/Lottie';

const BannerWelcome = () => {
	return (
		<div
			className="fixed right-0 w-[480px] flex-cc h-full col bg-black bg-opacity-20"
			style={{ boxShadow: '0 0 24px #fb5aff44' }}
		>
			<Lottie animationData={girlMusic} loop />
		</div>
	);
};

export default BannerWelcome;

