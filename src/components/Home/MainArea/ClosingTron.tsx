import React from 'react';
import CTAButton from './CTAButton';

const ClosingTron = () => {
	return (
		<div className="flex-sc mb-24 -sm:flex-col-reverse">
			<CTAButton />
			<div className="flex-cs col -sm:mb-4">
				<p className="ml-6 text-sm -sm:m-0 text-theme-pink">Love these tracks?</p>
				<p className="ml-6 text-lg -sm:m-0">Let&apos;s create your playlist</p>
			</div>
		</div>
	);
};

export default ClosingTron;

