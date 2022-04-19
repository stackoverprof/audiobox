import React from 'react';

const FooterCredit = () => {
	return (
		<p className="mb-8 text-center">
			Copyright © {new Date().getFullYear()}&ensp; — &ensp;Made with &nbsp;💕 &nbsp;by{' '}
			<a
				target="_blank"
				href="https://github.com/stackoverprof"
				className="text-theme-blue hover:underline"
				rel="norefferer noopener noreferrer"
			>
				stackoverprof
			</a>
		</p>
	);
};

export default FooterCredit;
