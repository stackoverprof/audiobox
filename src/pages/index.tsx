import React from 'react';
import MainLayout from '@components/Layouts/MainLayout';

const Home = () => {
	return (
		<MainLayout title="Home" className="flex-sc col w-full">
			<h1 className="text-5xl font-semibold leading-tight text-green-400">Spotify Client.</h1>
		</MainLayout>
	);
};

export default Home;
