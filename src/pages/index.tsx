import React from 'react';
import CleanLayout from '@components/_layouts/CleanLayout';

const Home = () => {
	return (
		<CleanLayout title="Home" className="flex-bc w-full h-screen">
			<div
				className="w-[480px] h-full bg-black bg-opacity-20"
				style={{ boxShadow: '0 0 24px #fff2' }}
			></div>
		</CleanLayout>
	);
};

export default Home;
