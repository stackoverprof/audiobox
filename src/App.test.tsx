import React from 'react';
import MainArea from '@components/Landing/MainArea';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Simple working test', () => {
	// run
	test('OnlyRunThis', () => {
		render(<MainArea />);

		expect(screen.getByText(/Audiobox/i)).toBeInTheDocument();
	});
});

