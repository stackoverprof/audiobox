import React from 'react';
import historyDraft from '@public/lottie/history-draft.json';
import Lottie from '@components/_shared/Lottie';
import { Link } from 'react-router-dom';

const EmptyHolder = () => {
	return (
		<div className="flex-sc col w-full">
			<Lottie animationData={historyDraft} loop className="mb-8 w-[320px]" />
			<p className="mb-12 text-center opacity-30">No history recorded.</p>
			<p className="text-center lg:text-xl sm:text-xl">
				Let&apos;s{' '}
				<Link
					to="/explore"
					className="px-3 py-1.5 mx-1 rounded-md border border-white border-opacity-40 hover:bg-theme-blue hover:bg-opacity-30 hover:border-theme-blue"
				>
					Explore
				</Link>{' '}
				and play some tracks
			</p>
		</div>
	);
};

export default EmptyHolder;

