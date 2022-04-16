import React from 'react';
import SEOTags from '@components/_shared/SEOTags';
import Sidebar from '@components/Sidebar';
import useMinHeight from '@core/hooks/useMinHeight';

interface Props {
	children: React.ReactNode;
	title?: string;
	className?: string;
	style?: React.CSSProperties;
}

const MainLayout = ({ children, style, className, title }: Props) => {
	const [minHeight, upper, lower] = useMinHeight();

	return (
		<div className="flex-bs w-full">
			<SEOTags title={title} />
			<aside className="w-72 h-screen">
				<Sidebar />
			</aside>
			<div className="flex-sc col flex-1">
				<nav className="flex-cc w-full" ref={upper}>
					{/* <Navbar /> */}
				</nav>
				<main style={{ minHeight, ...style }} className={className}>
					{children}
				</main>
				<footer className="flex-cc w-full" ref={lower}>
					{/* <Footer /> */}
				</footer>
			</div>
		</div>
	);
};

export default MainLayout;
