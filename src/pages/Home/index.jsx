import React from 'react';
import MainLayout from 'src/components/Layouts/MainLayout';
import spotifyLogin from 'src/core/utils/spotify-login';

const Home = () => {
	return (
		<MainLayout className="flex-sc col w-full">
			<section className="container flex-bc w-full">
				<div className="flex-cs col w-[420px] mt-16">
					<h1 className="text-5xl font-semibold leading-tight text-green-400">
						Spotify Client.
					</h1>
					<h2 className="mb-16 text-4xl font-semibold leading-tight">
						Find tracks and create the playlist you love
					</h2>
					<a
						href={spotifyLogin()}
						className="block px-4 py-2 text-base text-xl font-semibold bg-white rounded-md border hover:bg-green-200"
					>
						Login to get started
					</a>
				</div>
				<img src="/img/welcome.svg" alt="welcoming image" className="mt-24 w-[600px]" />
			</section>
		</MainLayout>
	);
};

export default Home;

