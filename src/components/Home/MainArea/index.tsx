import React from 'react';
import CTAButton from './CTAButton';
import FeaturedTracks from './FeaturedTracks';
import { MdLibraryMusic } from 'react-icons/md';

const MainArea = () => {
	return (
		<div className="container flex-ss col w-full max-w-screen-xl h-full">
			<div className="flex-ss col w-2/3">
				<div className="flex-bc mt-24 mb-24">
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
				<CTAButton />
				<FeaturedTracks size={6} />
				<div className="flex-sc mb-24">
					<CTAButton />
					<p className="ml-6 text-lg">Let&apos;s create your playlist</p>
				</div>
				<p className="mb-8">
					© {new Date().getFullYear()}&ensp; — &ensp;Made with &nbsp;💕 &nbsp;by R.
					Bintang Bagus Putra Angkasa
				</p>
			</div>
		</div>
	);
};

export default MainArea;

