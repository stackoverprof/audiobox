import React from 'react';
import Main from 'src/main';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

test('Simulate post-authentication, entering /create, search, should see the track cards', async () => {
	// SUCCESSFUL AUTH
	window.history.pushState(
		{},
		'Home Page',
		'#access_token=BQCtgRe2fk_EAYc55JZE8foMnkqMStkDps7fg_wgrvcnR-OFrNU1dsycmSUSQdsX18CnqkOiCweP703_cttZL0AZb5yEbNwJr-FA57f8g-RexiCAP-mCakZOETMBUGzub9sn88SE0lzH7LJXrTF3m3gAqHOuD-yCy__VqLP-YyMA_c5eq4kUnhA3Wtnb05Xs8g8v1YUIVA&token_type=Bearer&expires_in=3600'
	);
	// RENDER APP
	render(<Main testMode />);

	expect(window.location.pathname).toStrictEqual('/create');

	const searchInput = screen.getByTestId('input-search-tracks');
	const button = screen.getByTestId('button-search-tracks');

	userEvent.type(searchInput, 'Intentions');
	userEvent.click(button);

	await waitFor(() => {
		screen.getAllByText('Select').forEach((el) => expect(el).toBeInTheDocument());
	});
});

