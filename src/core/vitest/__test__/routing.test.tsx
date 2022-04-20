import React from 'react';
import Main from 'src/main';
import randomBytesJs from 'random-bytes-js';
import { render, waitFor } from '@testing-library/react';

test('Simulate post-authentication and redirection to /create', async () => {
	// AFTER SUCCESSFUL AUTH
	window.history.pushState(
		{},
		'Home Page',
		`#access_token=${randomBytesJs.randHex(40)}&token_type=Bearer&expires_in=3600`
	);

	// RENDER APP
	render(<Main testMode />);

	// SHOULD BE in page /create
	await waitFor(() => {
		expect(window.location.pathname).toStrictEqual('/create');
	});
});

test('Simulate enter /create with no token', async () => {
	window.history.pushState({}, 'Create page', '/create');

	render(<Main testMode />);

	// SHOULD BE in page /
	await waitFor(() => {
		expect(window.location.pathname).toStrictlyEqual('/');
	});
});

