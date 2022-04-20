import result_me from './results/me.json';
import result_tracks from './results/intentions.json';
import { rest } from 'msw';

export const handlers = [
	rest.get('/https://api.spotify.com/v1/me', (_, res, ctx) => {
		return res(ctx.json(result_me));
	}),
	rest.get('/https://api.spotify.com/v1/search', (_, res, ctx) => {
		return res(ctx.json(result_tracks));
	}),
];
