import { PropTypes } from 'prop-types';
import React from 'react';
import useMinHeight from 'src/core/hooks/useMinHeight';
import Footer from '../Footer';
import Navbar from '../Navbar';

const MainLayout = ({ children, style, className }) => {
	const [minHeight, upper, lower] = useMinHeight();

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

MainLayout.propTypes = {
	children: PropTypes.any,
	style: PropTypes.any,
	className: PropTypes.any,
};

