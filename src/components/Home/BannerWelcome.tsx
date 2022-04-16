import React from 'react';
import girlMusicBg from '@public/lottie/girlMusic.bg.json';
import girlMusicObj from '@public/lottie/girlMusic.object.json';
import Lottie from '@components/Lottie';

const BannerWelcome = () => {
	return (
		<>
			<div
				className="fixed -lg:hidden z-20 right-0 top-0 w-[480px] flex-cc h-full col bg-black bg-opacity-20"
				style={{ boxShadow: '0 0 24px #fb5aff55' }}
			>
				<div
					className="absolute w-[320px] h-[320px] mb-12 rounded-full bg-theme-pink"
					style={{ boxShadow: '0 0 48px #fb5affdd' }}
				></div>
				<Lottie animationData={girlMusicBg} loop className="absolute mb-12 w-full" />
				<Lottie animationData={girlMusicObj} loop className="absolute mb-12 w-full" />
			</div>
			<div className="fixed -right-10 -bottom-20">
				<p className="font-serif text-[156px] opacity-10 font-bold text-white">Audiobox</p>
			</div>
		</>
	);
};

export default BannerWelcome;
