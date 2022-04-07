import React from 'react';

const Footer = () => {
	return (
		<div className="flex-cc w-full h-16 bg-white bg-opacity-10">
			<div className="container flex-bc">
				<p className="">© {new Date().getFullYear()} by R. Bintang Bagus Putra Angkasa</p>
				<p className="">Generasi Gigih Front-end Assignment</p>
			</div>
		</div>
	);
};

export default Footer;

