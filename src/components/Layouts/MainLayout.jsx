import { PropTypes } from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import useMinHeight from 'src/core/hooks/useMinHeight';
import Footer from '../Footer';
import Navbar from '../Navbar';

const MainLayout = ({ children, style, className, title }) => {
	const [minHeight, upper, lower] = useMinHeight();

	return (
		<>
			<Helmet>
				<title> Gigih Homework{title && ` | ${title}`}</title>
			</Helmet>
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
	title: PropTypes.any,
};
