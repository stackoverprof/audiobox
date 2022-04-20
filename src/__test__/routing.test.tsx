import React from 'react';
import Main from 'src/main';
import randomBytesJs from 'random-bytes-js';
import { render, waitFor } from '@testing-library/react';

test('Simulate post-authentication, entering /create', async () => {
	// SUCCESSFUL AUTH
	window.history.pushState(
		{},
		'Home Page',
		`#access_token=${randomBytesJs.randHex(40)}&token_type=Bearer&expires_in=3600`
	);

	// RENDER APP
	render(<Main testMode />);

	// Should be in page /create
	await waitFor(() => {
		expect(window.location.pathname).toStrictEqual('/create');
	});
});

// describe('Search and retrieve track cards', () => {
// 	test('should see cards at least one', async () => {
// 		render(
// 			<Provider store={store()}>
// 				<SearchArea />
// 			</Provider>
// 		);
// 		const searchInput = screen.getByTestId('input-search-tracks');
// 		const button = screen.getByTestId('button-search-tracks');
// 		userEvent.type(searchInput, 'Intentions');
// 		userEvent.click(button);
// 		await waitFor(() => {
// 			screen.getAllByText('Select').forEach((el) => expect(el).toBeInTheDocument());
// 		});
// 	});
// });

