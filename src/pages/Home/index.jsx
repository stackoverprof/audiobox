import React from 'react';
import MainLayout from 'src/components/Layouts/MainLayout';

const Home = () => {
	return (
		<MainLayout>
			<section className="container flex-bc w-full">
				<div className="flex-cs col w-[420px]">
					<h1 className="text-5xl font-semibold leading-tight text-green-400">
						Spotify Client.
					</h1>
					<h2 className="text-4xl font-semibold leading-tight">
						Find tracks and create the playlist you love
					</h2>
				</div>
				<img src="/img/welcome.svg" alt="welcoming image" className="mt-24 w-[600px]" />
			</section>
		</MainLayout>
	);
};

export default Home;

