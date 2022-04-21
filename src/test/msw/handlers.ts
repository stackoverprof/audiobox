import featured_tracks from './results/featured_tracks.json';
import intentions from './results/intentions.json';
import me from './results/me.json';
import recently_played from './results/recently_played.json';
import user_playlist from './results/user_playlist.json';
import { rest } from 'msw';

export const handlers = [
	rest.get(
		'/https://api.audiobox.errbint.net/api/playlists/37i9dQZEVXbMDoHDwVN2tF',
		(_, res, ctx) => {
			return res(ctx.json(featured_tracks));
		}
	),

	rest.get('/https://api.spotify.com/v1/me', (_, res, ctx) => {
		return res(ctx.json(me));
	}),

	rest.get('/https://api.spotify.com/v1/me/playlists', (_, res, ctx) => {
		return res(ctx.json(user_playlist));
	}),

	rest.get('/https://api.spotify.com/v1/me/player/recently-played', (_, res, ctx) => {
		return res(ctx.json(recently_played));
	}),

	rest.get('/https://api.spotify.com/v1/search', (req, res, ctx) => {
		return res(ctx.json(intentions));
	}),
];
