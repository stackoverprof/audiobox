import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="flex-cc mt-12 w-full h-16 bg-white bg-opacity-10">
			<div className="container flex-bc">
				<p className="">
					© {new Date().getFullYear()} by R. Bintang Bagus Putra Angkasa KM_G2FE4058
				</p>
				<div className="flex-cc gap-1">
					<FaGithub />
					<p className="ml-1">See the repository</p>
					<a
						className="block underline"
						href="https://github.com/stackoverprof/gigih-homework"
					>
						here
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
