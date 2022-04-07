import { PropTypes } from 'prop-types';
import React from 'react';
import useMinHeight from 'src/core/hooks/useMinHeight';
import Footer from '../Footer';
import Navbar from '../Navbar';

const MainLayout = ({ children, style = {} }) => {
	const [minHeight, upper, lower] = useMinHeight();

	return (
		<>
			<nav ref={upper}>
				<Navbar />
			</nav>
			<main style={{ minHeight, ...style }} className="flex-sc col w-full">
				{children}
			</main>
			<footer ref={lower}>
				<Footer />
			</footer>
		</>
	);
};

export default MainLayout;

MainLayout.propTypes = {
	children: PropTypes.any,
	style: PropTypes.any,
};

