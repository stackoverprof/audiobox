import React from 'react';
import CTAButton from './CTAButton';
import { MdLibraryMusic } from 'react-icons/md';

const JumboTron = () => {
	return (
		<div className="flex-ss col mb-20 w-full -md:flex-cc">
			<div className="flex-bc mt-20 mb-16 -sm:mt-12">
				<h1 className="flex-cc font-serif -sm:text-[28px] text-4xl font-semibold ">
					<MdLibraryMusic size={36} className="mr-2" />
					Audiobox
				</h1>
			</div>
			{/* [TODO]: add sounb bar lottie here */}
			<h2 className="text-[40px] -sm:text-[32px] font-semibold w-[500px] -sm:w-full -md:text-center mb-10">
				Find Tracks and create the <span className="text-grad"> Playlist</span> you love.
			</h2>
			<h3 className="mb-6">Let&apos;s get started!</h3>
			<CTAButton />
		</div>
	);
};

export default JumboTron;
