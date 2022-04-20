import result_me from './results/me.json';
import { rest } from 'msw';

export const handlers = [
	rest.get('/https://api.spotify.com/v1/me', (_, res, ctx) => {
		return res(ctx.json(result_me));
	}),
];

