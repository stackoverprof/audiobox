import React from 'react';
import CleanLayout from '@components/_layouts/CleanLayout';
import Lottie from '@components/_shared/Lottie';
import NotFound from '@public/lottie/not-found.json';
import { Link } from 'react-router-dom';

const _404 = () => {
	return (
		<CleanLayout title="Not Found" className="flex-sc col pt-24 full">
			<Lottie animationData={NotFound} loop className="w-[360px]" />
			<h1 className="text-4xl font-semibold">404 Not Found</h1>

			<Link
				to="/"
				className={[
					'px-2 py-1 mt-4 ml-2 rounded-md border border-opacity-50 text-theme-blue hover:text-white hover:bg-theme-blue hover:bg-opacity-20  border-theme-blue',
				].join(' ')}
			>
				Rescue me
			</Link>
		</CleanLayout>
	);
};

export default _404;
