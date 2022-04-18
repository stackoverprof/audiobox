import React from 'react';
import Lottie from '@components/Lottie';
import worldMap from '@public/lottie/world-map.json';
import { FaGlobeAmericas } from 'react-icons/fa';
import { setSelectedTab, useExplore } from '@core/redux/reducer/explore';
import { useDispatch } from 'react-redux';

const HeaderExplore = () => {
	const { selectedTab } = useExplore();
	const dispatch = useDispatch();

	return (
		<div className="relative w-full h-72">
			<div
				className="absolute flex-bc z-30 pr-12 pl-16 bg-white pointer-events-none full"
				style={{ background: 'linear-gradient(0deg, #fff0, #fff1, #fff3)' }}
			>
				<h1 className="flex-cc mb-12 text-5xl font-semibold">
					<FaGlobeAmericas className="mr-4" size={52} /> Explore
				</h1>
				<div className="relative flex-cc mb-12 h-12 p-1.5 text-lg rounded-full border pointer-events-auto">
					<button
						onClick={() => dispatch(setSelectedTab('featured'))}
						className="relative z-10 w-28 h-full rounded-full pointer-events-auto"
					>
						Featured
					</button>
					<button
						onClick={() => dispatch(setSelectedTab('charts'))}
						className="relative z-10 w-24 h-full rounded-full pointer-events-auto"
					>
						Charts
					</button>
					<div className="absolute p-1.5 full pointer-events-none transition flex-cc">
						<div
							className={[
								'h-full bg-white bg-opacity-20 backdrop-blur-sm rounded-full transition-all transform',
								selectedTab === 'featured'
									? '-translate-x-12 w-28'
									: 'translate-x-14 w-24',
							].join(' ')}
						></div>
					</div>
				</div>
			</div>
			<div className="absolute flex-es overflow-hidden top-0 right-0 full">
				<Lottie
					animationData={worldMap}
					loop
					className="absolute top-0 z-0 -right-32 h-[440px]"
				/>
			</div>
		</div>
	);
};

// [TODO] : make two tabs, with Charts

export default HeaderExplore;
