// [README] : Di aplikasi tersebut, Gigih ingin agar aplikasi tersebut hanya dapat diakses
// oleh orang yang sudah log-in terlebih dahulu. Jika Gigih belum log-in, maka Gigih tidak dapat
// mengakses halaman untuk membuat playlist tersebut, dan akan di-redirect ke halaman login.
// Ketika selesai login, maka Gigih ingin melihat halaman untuk membuat playlist.

import React from 'react';
import Main from 'src/main';
import randomBytesJs from 'random-bytes-js';
import { render, waitFor } from '@testing-library/react';

describe('Simulate routing screnarios', () => {
	test('SHOULD redirect to / if no token', async () => {
		// VISIT
		window.history.pushState({}, 'Create', '/create');

		// RENDER APP
		render(<Main />);

		// LATER SHOULD BE in page /
		await waitFor(() => {
			expect(window.location.pathname).toStrictEqual('/');
		});
	});

	test('SHOULD redirect to /create, after success login', async () => {
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

	test('SHOULD redirect to /create, if token found', async () => {
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
