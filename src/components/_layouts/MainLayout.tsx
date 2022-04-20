// [README] : Higher Order Component, layout with sidebar

import React from 'react';
import SEOTags from '@components/_shared/SEOTags';
import Sidebar from '@components/Sidebar';

interface Props {
	children: React.ReactNode;
	title?: string;
	className?: string;
	style?: React.CSSProperties;
}

const MainLayout = ({ children, style, className, title }: Props) => {
	return (
		<div className="flex-bs w-full">
			<SEOTags title={title} />
			<aside className="w-72 h-screen -md:hidden">
				<Sidebar />
			</aside>
			<div className="flex-sc col flex-1">
				<main style={style} className={className}>
					{children}
				</main>
			</div>
		</div>
	);
};

export default MainLayout;
