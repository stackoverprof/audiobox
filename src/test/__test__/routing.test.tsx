import React from 'react';
import Main from 'src/main';
import randomBytesJs from 'random-bytes-js';
import { render, waitFor } from '@testing-library/react';

describe('Simulate routing screnarios', () => {
	test('Entering /create without token SHOULD redirect to /', async () => {
		// VISIT
		window.history.pushState({}, 'Create', '/create');

		// RENDER APP
		render(<Main />);

		// LATER SHOULD BE in page /
		await waitFor(() => {
			expect(window.location.pathname).toStrictEqual('/');
		});
	});

	test('After success login SHOULD redirect to /create', async () => {
		// AFTER SUCCESSFUL AUTH
		window.history.pushState(
			{},
			'Landing',
			`#access_token=${randomBytesJs.randHex(40)}&token_type=Bearer&expires_in=3600`
		);

		// RENDER APP
		render(<Main />);

		// LATER SHOULD BE in page /create
		await waitFor(() => {
			expect(window.location.pathname).toStrictEqual('/create');
		});
	});

	test('If user has localStorage token SHOULD redirect to /create', async () => {
		// PREDEFINED localStorage
		localStorage.setItem('access_token', randomBytesJs.randHex(40));

		// VISIT
		window.history.pushState({}, 'Landing', '/');

		// RENDER APP
		render(<Main />);

		// LATER SHOULD BE in page /create
		await waitFor(() => {
			expect(window.location.pathname).toStrictEqual('/create');
		});
	});
});
