// [README] : Higher Order Component, layout with sidebar

import React from 'react';
import SEOTags from '@components/_shared/SEOTags';
import Sidebar from '@components/Sidebar';
import TabNavigation from '@components/TabNavigation';

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
			<main className="flex-sc col flex-1 -md:pb-32">
				<div style={style} className={className}>
					{children}
				</div>
			</main>
			<footer className="fixed flex-cc bottom-0 left-0 z-50 w-full md:hidden">
				<TabNavigation />
			</footer>
		</div>
	);
};

export default MainLayout;
