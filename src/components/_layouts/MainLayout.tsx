import React, { useEffect } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import useMinHeight from '@core/hooks/useMinHeight';

interface Props {
	children: React.ReactNode;
	title?: string;
	className?: string;
	style?: React.CSSProperties;
}

const MainLayout = ({ children, style, className, title }: Props) => {
	const [minHeight, upper, lower] = useMinHeight();

	useEffect(() => {
		if (title) document.title = `${title} — Spotifier`;
	}, [title]);

	return (
		<>
			<nav className="flex-cc w-full" ref={upper}>
				<Navbar />
			</nav>
			<main style={{ minHeight, ...style }} className={className}>
				{children}
			</main>
			<footer className="flex-cc w-full" ref={lower}>
				<Footer />
			</footer>
		</>
	);
};

export default MainLayout;
