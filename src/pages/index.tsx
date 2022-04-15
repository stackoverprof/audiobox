import React from 'react';
import BannerWelcome from '@components/Home/BannerWelcome';
import CleanLayout from '@components/_layouts/CleanLayout';
import { FaSpotify } from 'react-icons/fa';
import { MdLibraryMusic } from 'react-icons/md';

const Home = () => {
	return (
		<CleanLayout title="Home" className="flex-cc w-full h-screen">
			<div className="container flex-cs col mb-24 w-full max-w-screen-xl h-full">
				<div className="flex-bc mb-24">
					<h1 className="flex-cc font-serif text-4xl font-semibold">
						<MdLibraryMusic size={36} className="mr-2" />
						Audiobox
					</h1>
				</div>
				<h2 className="text-[40px] font-semibold w-[500px] mb-16">
					Find Tracks and create the <span className="text-grad"> Playlist</span> you
					love.
				</h2>
				<h3 className="mb-6">Let&apos;s get started!</h3>
				<button className="flex-cc px-4 py-3 text-base font-semibold bg-white rounded">
					<FaSpotify size={24} className="mr-2" />
					Connect to Spotify
				</button>
				<div className="flex-bc"></div>
			</div>
			<BannerWelcome />
		</CleanLayout>
	);
};

export default Home;
