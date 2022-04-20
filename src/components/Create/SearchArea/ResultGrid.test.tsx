import React from 'react';
import ResultGrid from './ResultGrid';
import store from '@core/redux/store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

describe('Track card component mapping', () => {
	test('Tracks cards should exist at least one', () => {
		render(
			<Provider store={store}>
				<ResultGrid data={DATA_TRACKS} />
			</Provider>
		);

		expect(document.querySelectorAll('#track-card').length).toBeGreaterThan(0);
	});

	test('Tracks cards should not exist', () => {
		render(
			<Provider store={store}>
				<ResultGrid data={[]} />
			</Provider>
		);

		expect(document.querySelectorAll('#track-card').length).toEqual(0);
	});
});

const DATA_TRACKS = [
	{
		album: {
			album_type: 'single',
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/2jnIB6XdLvnJUeNTy5A0J2',
					},
					href: 'https://api.spotify.com/v1/artists/2jnIB6XdLvnJUeNTy5A0J2',
					id: '2jnIB6XdLvnJUeNTy5A0J2',
					name: 'Why Don\'t We',
					type: 'artist',
					uri: 'spotify:artist:2jnIB6XdLvnJUeNTy5A0J2',
				},
			],
			available_markets: [
				'AD',
				'AE',
				'AG',
				'AL',
				'AM',
				'AO',
				'AR',
				'AT',
				'AU',
				'AZ',
				'BA',
				'BB',
				'BD',
				'BE',
				'BF',
				'BG',
				'BH',
				'BI',
				'BJ',
				'BN',
				'BO',
				'BR',
				'BS',
				'BT',
				'BW',
				'BY',
				'BZ',
				'CA',
				'CD',
				'CG',
				'CH',
				'CI',
				'CL',
				'CM',
				'CO',
				'CR',
				'CV',
				'CW',
				'CY',
				'CZ',
				'DE',
				'DJ',
				'DK',
				'DM',
				'DO',
				'DZ',
				'EC',
				'EE',
				'EG',
				'ES',
				'FI',
				'FJ',
				'FM',
				'FR',
				'GA',
				'GB',
				'GD',
				'GE',
				'GH',
				'GM',
				'GN',
				'GQ',
				'GR',
				'GT',
				'GW',
				'GY',
				'HK',
				'HN',
				'HR',
				'HT',
				'HU',
				'ID',
				'IE',
				'IL',
				'IN',
				'IQ',
				'IS',
				'IT',
				'JM',
				'JO',
				'JP',
				'KE',
				'KG',
				'KH',
				'KI',
				'KM',
				'KN',
				'KR',
				'KW',
				'KZ',
				'LA',
				'LB',
				'LC',
				'LI',
				'LK',
				'LR',
				'LS',
				'LT',
				'LU',
				'LV',
				'LY',
				'MA',
				'MC',
				'MD',
				'ME',
				'MG',
				'MH',
				'MK',
				'ML',
				'MN',
				'MO',
				'MR',
				'MT',
				'MU',
				'MV',
				'MW',
				'MX',
				'MY',
				'MZ',
				'NA',
				'NE',
				'NG',
				'NI',
				'NL',
				'NO',
				'NP',
				'NR',
				'NZ',
				'OM',
				'PA',
				'PE',
				'PG',
				'PH',
				'PK',
				'PL',
				'PS',
				'PT',
				'PW',
				'PY',
				'QA',
				'RO',
				'RS',
				'RW',
				'SA',
				'SB',
				'SC',
				'SE',
				'SG',
				'SI',
				'SK',
				'SL',
				'SM',
				'SN',
				'SR',
				'ST',
				'SV',
				'SZ',
				'TD',
				'TG',
				'TH',
				'TJ',
				'TL',
				'TN',
				'TO',
				'TR',
				'TT',
				'TV',
				'TW',
				'TZ',
				'UA',
				'UG',
				'UY',
				'UZ',
				'VC',
				'VE',
				'VN',
				'VU',
				'WS',
				'XK',
				'ZA',
				'ZM',
				'ZW',
			],
			external_urls: {
				spotify: 'https://open.spotify.com/album/5jJMdQiPyWPh8RznQyioyu',
			},
			href: 'https://api.spotify.com/v1/albums/5jJMdQiPyWPh8RznQyioyu',
			id: '5jJMdQiPyWPh8RznQyioyu',
			images: [
				{
					height: 640,
					url: 'https://i.scdn.co/image/ab67616d0000b273e70279cb2c329286f7e95af1',
					width: 640,
				},
				{
					height: 300,
					url: 'https://i.scdn.co/image/ab67616d00001e02e70279cb2c329286f7e95af1',
					width: 300,
				},
				{
					height: 64,
					url: 'https://i.scdn.co/image/ab67616d00004851e70279cb2c329286f7e95af1',
					width: 64,
				},
			],
			name: 'Unbelievable',
			release_date: '2019-05-16',
			release_date_precision: 'day',
			total_tracks: 2,
			type: 'album',
			uri: 'spotify:album:5jJMdQiPyWPh8RznQyioyu',
		},
		artists: [
			{
				external_urls: {
					spotify: 'https://open.spotify.com/artist/2jnIB6XdLvnJUeNTy5A0J2',
				},
				href: 'https://api.spotify.com/v1/artists/2jnIB6XdLvnJUeNTy5A0J2',
				id: '2jnIB6XdLvnJUeNTy5A0J2',
				name: 'Why Don\'t We',
				type: 'artist',
				uri: 'spotify:artist:2jnIB6XdLvnJUeNTy5A0J2',
			},
		],
		available_markets: [
			'AD',
			'AE',
			'AG',
			'AL',
			'AM',
			'AO',
			'AR',
			'AT',
			'AU',
			'AZ',
			'BA',
			'BB',
			'BD',
			'BE',
			'BF',
			'BG',
			'BH',
			'BI',
			'BJ',
			'BN',
			'BO',
			'BR',
			'BS',
			'BT',
			'BW',
			'BY',
			'BZ',
			'CA',
			'CD',
			'CG',
			'CH',
			'CI',
			'CL',
			'CM',
			'CO',
			'CR',
			'CV',
			'CW',
			'CY',
			'CZ',
			'DE',
			'DJ',
			'DK',
			'DM',
			'DO',
			'DZ',
			'EC',
			'EE',
			'EG',
			'ES',
			'FI',
			'FJ',
			'FM',
			'FR',
			'GA',
			'GB',
			'GD',
			'GE',
			'GH',
			'GM',
			'GN',
			'GQ',
			'GR',
			'GT',
			'GW',
			'GY',
			'HK',
			'HN',
			'HR',
			'HT',
			'HU',
			'ID',
			'IE',
			'IL',
			'IN',
			'IQ',
			'IS',
			'IT',
			'JM',
			'JO',
			'JP',
			'KE',
			'KG',
			'KH',
			'KI',
			'KM',
			'KN',
			'KR',
			'KW',
			'KZ',
			'LA',
			'LB',
			'LC',
			'LI',
			'LK',
			'LR',
			'LS',
			'LT',
			'LU',
			'LV',
			'LY',
			'MA',
			'MC',
			'MD',
			'ME',
			'MG',
			'MH',
			'MK',
			'ML',
			'MN',
			'MO',
			'MR',
			'MT',
			'MU',
			'MV',
			'MW',
			'MX',
			'MY',
			'MZ',
			'NA',
			'NE',
			'NG',
			'NI',
			'NL',
			'NO',
			'NP',
			'NR',
			'NZ',
			'OM',
			'PA',
			'PE',
			'PG',
			'PH',
			'PK',
			'PL',
			'PS',
			'PT',
			'PW',
			'PY',
			'QA',
			'RO',
			'RS',
			'RW',
			'SA',
			'SB',
			'SC',
			'SE',
			'SG',
			'SI',
			'SK',
			'SL',
			'SM',
			'SN',
			'SR',
			'ST',
			'SV',
			'SZ',
			'TD',
			'TG',
			'TH',
			'TJ',
			'TL',
			'TN',
			'TO',
			'TR',
			'TT',
			'TV',
			'TW',
			'TZ',
			'UA',
			'UG',
			'UY',
			'UZ',
			'VC',
			'VE',
			'VN',
			'VU',
			'WS',
			'XK',
			'ZA',
			'ZM',
			'ZW',
		],
		disc_number: 1,
		duration_ms: 189384,
		explicit: false,
		external_ids: {
			isrc: 'USAT21902678',
		},
		external_urls: {
			spotify: 'https://open.spotify.com/track/1LHfEkVMR0Yj20C8lWdgpA',
		},
		href: 'https://api.spotify.com/v1/tracks/1LHfEkVMR0Yj20C8lWdgpA',
		id: '1LHfEkVMR0Yj20C8lWdgpA',
		is_local: false,
		name: 'Unbelievable',
		popularity: 62,
		preview_url:
			'https://p.scdn.co/mp3-preview/db40aefc5f99eeec02bee712f094ebe6e7365483?cid=3c9d561847f94200979c53710b6e3fba',
		track_number: 1,
		type: 'track',
		uri: 'spotify:track:1LHfEkVMR0Yj20C8lWdgpA',
	},
	{
		album: {
			album_type: 'single',
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/66W9LaWS0DPdL7Sz8iYGYe',
					},
					href: 'https://api.spotify.com/v1/artists/66W9LaWS0DPdL7Sz8iYGYe',
					id: '66W9LaWS0DPdL7Sz8iYGYe',
					name: 'JP Saxe',
					type: 'artist',
					uri: 'spotify:artist:66W9LaWS0DPdL7Sz8iYGYe',
				},
			],
			available_markets: [
				'AD',
				'AE',
				'AG',
				'AL',
				'AM',
				'AO',
				'AR',
				'AT',
				'AU',
				'AZ',
				'BA',
				'BB',
				'BD',
				'BE',
				'BF',
				'BG',
				'BH',
				'BI',
				'BJ',
				'BN',
				'BO',
				'BR',
				'BS',
				'BT',
				'BW',
				'BY',
				'BZ',
				'CA',
				'CD',
				'CG',
				'CH',
				'CI',
				'CL',
				'CM',
				'CO',
				'CR',
				'CV',
				'CW',
				'CY',
				'CZ',
				'DE',
				'DJ',
				'DK',
				'DM',
				'DO',
				'DZ',
				'EC',
				'EE',
				'EG',
				'ES',
				'FI',
				'FJ',
				'FM',
				'FR',
				'GA',
				'GB',
				'GD',
				'GE',
				'GH',
				'GM',
				'GN',
				'GQ',
				'GR',
				'GT',
				'GW',
				'GY',
				'HK',
				'HN',
				'HR',
				'HT',
				'HU',
				'ID',
				'IE',
				'IL',
				'IN',
				'IQ',
				'IS',
				'IT',
				'JM',
				'JO',
				'JP',
				'KE',
				'KG',
				'KH',
				'KI',
				'KM',
				'KN',
				'KR',
				'KW',
				'KZ',
				'LA',
				'LB',
				'LC',
				'LI',
				'LK',
				'LR',
				'LS',
				'LT',
				'LU',
				'LV',
				'LY',
				'MA',
				'MC',
				'MD',
				'ME',
				'MG',
				'MH',
				'MK',
				'ML',
				'MN',
				'MO',
				'MR',
				'MT',
				'MU',
				'MV',
				'MW',
				'MX',
				'MY',
				'MZ',
				'NA',
				'NE',
				'NG',
				'NI',
				'NL',
				'NO',
				'NP',
				'NR',
				'NZ',
				'OM',
				'PA',
				'PE',
				'PG',
				'PH',
				'PK',
				'PL',
				'PS',
				'PT',
				'PW',
				'PY',
				'QA',
				'RO',
				'RS',
				'RW',
				'SA',
				'SB',
				'SC',
				'SE',
				'SG',
				'SI',
				'SK',
				'SL',
				'SM',
				'SN',
				'SR',
				'ST',
				'SV',
				'SZ',
				'TD',
				'TG',
				'TH',
				'TJ',
				'TL',
				'TN',
				'TO',
				'TR',
				'TT',
				'TV',
				'TW',
				'TZ',
				'UA',
				'UG',
				'US',
				'UY',
				'UZ',
				'VC',
				'VE',
				'VN',
				'VU',
				'WS',
				'XK',
				'ZA',
				'ZM',
				'ZW',
			],
			external_urls: {
				spotify: 'https://open.spotify.com/album/2gO1pyq1nVTs7PdIMlX0r9',
			},
			href: 'https://api.spotify.com/v1/albums/2gO1pyq1nVTs7PdIMlX0r9',
			id: '2gO1pyq1nVTs7PdIMlX0r9',
			images: [
				{
					height: 640,
					url: 'https://i.scdn.co/image/ab67616d0000b2738fc2cedd12acde2c72d1808a',
					width: 640,
				},
				{
					height: 300,
					url: 'https://i.scdn.co/image/ab67616d00001e028fc2cedd12acde2c72d1808a',
					width: 300,
				},
				{
					height: 64,
					url: 'https://i.scdn.co/image/ab67616d000048518fc2cedd12acde2c72d1808a',
					width: 64,
				},
			],
			name: 'Hold It Together',
			release_date: '2020-02-07',
			release_date_precision: 'day',
			total_tracks: 6,
			type: 'album',
			uri: 'spotify:album:2gO1pyq1nVTs7PdIMlX0r9',
		},
		artists: [
			{
				external_urls: {
					spotify: 'https://open.spotify.com/artist/66W9LaWS0DPdL7Sz8iYGYe',
				},
				href: 'https://api.spotify.com/v1/artists/66W9LaWS0DPdL7Sz8iYGYe',
				id: '66W9LaWS0DPdL7Sz8iYGYe',
				name: 'JP Saxe',
				type: 'artist',
				uri: 'spotify:artist:66W9LaWS0DPdL7Sz8iYGYe',
			},
		],
		available_markets: [
			'AD',
			'AE',
			'AG',
			'AL',
			'AM',
			'AO',
			'AR',
			'AT',
			'AU',
			'AZ',
			'BA',
			'BB',
			'BD',
			'BE',
			'BF',
			'BG',
			'BH',
			'BI',
			'BJ',
			'BN',
			'BO',
			'BR',
			'BS',
			'BT',
			'BW',
			'BY',
			'BZ',
			'CA',
			'CD',
			'CG',
			'CH',
			'CI',
			'CL',
			'CM',
			'CO',
			'CR',
			'CV',
			'CW',
			'CY',
			'CZ',
			'DE',
			'DJ',
			'DK',
			'DM',
			'DO',
			'DZ',
			'EC',
			'EE',
			'EG',
			'ES',
			'FI',
			'FJ',
			'FM',
			'FR',
			'GA',
			'GB',
			'GD',
			'GE',
			'GH',
			'GM',
			'GN',
			'GQ',
			'GR',
			'GT',
			'GW',
			'GY',
			'HK',
			'HN',
			'HR',
			'HT',
			'HU',
			'ID',
			'IE',
			'IL',
			'IN',
			'IQ',
			'IS',
			'IT',
			'JM',
			'JO',
			'JP',
			'KE',
			'KG',
			'KH',
			'KI',
			'KM',
			'KN',
			'KR',
			'KW',
			'KZ',
			'LA',
			'LB',
			'LC',
			'LI',
			'LK',
			'LR',
			'LS',
			'LT',
			'LU',
			'LV',
			'LY',
			'MA',
			'MC',
			'MD',
			'ME',
			'MG',
			'MH',
			'MK',
			'ML',
			'MN',
			'MO',
			'MR',
			'MT',
			'MU',
			'MV',
			'MW',
			'MX',
			'MY',
			'MZ',
			'NA',
			'NE',
			'NG',
			'NI',
			'NL',
			'NO',
			'NP',
			'NR',
			'NZ',
			'OM',
			'PA',
			'PE',
			'PG',
			'PH',
			'PK',
			'PL',
			'PS',
			'PT',
			'PW',
			'PY',
			'QA',
			'RO',
			'RS',
			'RW',
			'SA',
			'SB',
			'SC',
			'SE',
			'SG',
			'SI',
			'SK',
			'SL',
			'SM',
			'SN',
			'SR',
			'ST',
			'SV',
			'SZ',
			'TD',
			'TG',
			'TH',
			'TJ',
			'TL',
			'TN',
			'TO',
			'TR',
			'TT',
			'TV',
			'TW',
			'TZ',
			'UA',
			'UG',
			'US',
			'UY',
			'UZ',
			'VC',
			'VE',
			'VN',
			'VU',
			'WS',
			'XK',
			'ZA',
			'ZM',
			'ZW',
		],
		disc_number: 1,
		duration_ms: 193466,
		explicit: true,
		external_ids: {
			isrc: 'QM6P41826082',
		},
		external_urls: {
			spotify: 'https://open.spotify.com/track/3T26BJ8XxWaxyxs8oGt8eR',
		},
		href: 'https://api.spotify.com/v1/tracks/3T26BJ8XxWaxyxs8oGt8eR',
		id: '3T26BJ8XxWaxyxs8oGt8eR',
		is_local: false,
		name: '25 in Barcelona',
		popularity: 52,
		preview_url:
			'https://p.scdn.co/mp3-preview/bb518415716dac842f8395a87a40acbebfd9b162?cid=3c9d561847f94200979c53710b6e3fba',
		track_number: 1,
		type: 'track',
		uri: 'spotify:track:3T26BJ8XxWaxyxs8oGt8eR',
	},
	{
		album: {
			album_type: 'album',
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/66W9LaWS0DPdL7Sz8iYGYe',
					},
					href: 'https://api.spotify.com/v1/artists/66W9LaWS0DPdL7Sz8iYGYe',
					id: '66W9LaWS0DPdL7Sz8iYGYe',
					name: 'JP Saxe',
					type: 'artist',
					uri: 'spotify:artist:66W9LaWS0DPdL7Sz8iYGYe',
				},
			],
			available_markets: [
				'AD',
				'AE',
				'AG',
				'AL',
				'AM',
				'AO',
				'AR',
				'AT',
				'AU',
				'AZ',
				'BA',
				'BB',
				'BD',
				'BE',
				'BF',
				'BG',
				'BH',
				'BI',
				'BJ',
				'BN',
				'BO',
				'BR',
				'BS',
				'BT',
				'BW',
				'BY',
				'BZ',
				'CA',
				'CD',
				'CG',
				'CH',
				'CI',
				'CL',
				'CM',
				'CO',
				'CR',
				'CV',
				'CW',
				'CY',
				'CZ',
				'DE',
				'DJ',
				'DK',
				'DM',
				'DO',
				'DZ',
				'EC',
				'EE',
				'EG',
				'ES',
				'FI',
				'FJ',
				'FM',
				'FR',
				'GA',
				'GB',
				'GD',
				'GE',
				'GH',
				'GM',
				'GN',
				'GQ',
				'GR',
				'GT',
				'GW',
				'GY',
				'HK',
				'HN',
				'HR',
				'HT',
				'HU',
				'ID',
				'IE',
				'IL',
				'IN',
				'IQ',
				'IS',
				'IT',
				'JM',
				'JO',
				'JP',
				'KE',
				'KG',
				'KH',
				'KI',
				'KM',
				'KN',
				'KR',
				'KW',
				'KZ',
				'LA',
				'LB',
				'LC',
				'LI',
				'LK',
				'LR',
				'LS',
				'LT',
				'LU',
				'LV',
				'LY',
				'MA',
				'MC',
				'MD',
				'ME',
				'MG',
				'MH',
				'MK',
				'ML',
				'MN',
				'MO',
				'MR',
				'MT',
				'MU',
				'MV',
				'MW',
				'MX',
				'MY',
				'MZ',
				'NA',
				'NE',
				'NG',
				'NI',
				'NL',
				'NO',
				'NP',
				'NR',
				'NZ',
				'OM',
				'PA',
				'PE',
				'PG',
				'PH',
				'PK',
				'PL',
				'PS',
				'PT',
				'PW',
				'PY',
				'QA',
				'RO',
				'RS',
				'RW',
				'SA',
				'SB',
				'SC',
				'SE',
				'SG',
				'SI',
				'SK',
				'SL',
				'SM',
				'SN',
				'SR',
				'ST',
				'SV',
				'SZ',
				'TD',
				'TG',
				'TH',
				'TJ',
				'TL',
				'TN',
				'TO',
				'TR',
				'TT',
				'TV',
				'TW',
				'TZ',
				'UA',
				'UG',
				'US',
				'UY',
				'UZ',
				'VC',
				'VE',
				'VN',
				'VU',
				'WS',
				'XK',
				'ZA',
				'ZM',
				'ZW',
			],
			external_urls: {
				spotify: 'https://open.spotify.com/album/538BxdI7oOQykSkEtyjhUD',
			},
			href: 'https://api.spotify.com/v1/albums/538BxdI7oOQykSkEtyjhUD',
			id: '538BxdI7oOQykSkEtyjhUD',
			images: [
				{
					height: 640,
					url: 'https://i.scdn.co/image/ab67616d0000b273e19d9c548f323ab0f0299d36',
					width: 640,
				},
				{
					height: 300,
					url: 'https://i.scdn.co/image/ab67616d00001e02e19d9c548f323ab0f0299d36',
					width: 300,
				},
				{
					height: 64,
					url: 'https://i.scdn.co/image/ab67616d00004851e19d9c548f323ab0f0299d36',
					width: 64,
				},
			],
			name: 'Dangerous Levels of Introspection',
			release_date: '2021-06-25',
			release_date_precision: 'day',
			total_tracks: 13,
			type: 'album',
			uri: 'spotify:album:538BxdI7oOQykSkEtyjhUD',
		},
		artists: [
			{
				external_urls: {
					spotify: 'https://open.spotify.com/artist/66W9LaWS0DPdL7Sz8iYGYe',
				},
				href: 'https://api.spotify.com/v1/artists/66W9LaWS0DPdL7Sz8iYGYe',
				id: '66W9LaWS0DPdL7Sz8iYGYe',
				name: 'JP Saxe',
				type: 'artist',
				uri: 'spotify:artist:66W9LaWS0DPdL7Sz8iYGYe',
			},
			{
				external_urls: {
					spotify: 'https://open.spotify.com/artist/0ZED1XzwlLHW4ZaG4lOT6m',
				},
				href: 'https://api.spotify.com/v1/artists/0ZED1XzwlLHW4ZaG4lOT6m',
				id: '0ZED1XzwlLHW4ZaG4lOT6m',
				name: 'Julia Michaels',
				type: 'artist',
				uri: 'spotify:artist:0ZED1XzwlLHW4ZaG4lOT6m',
			},
		],
		available_markets: [
			'AD',
			'AE',
			'AG',
			'AL',
			'AM',
			'AO',
			'AR',
			'AT',
			'AU',
			'AZ',
			'BA',
			'BB',
			'BD',
			'BE',
			'BF',
			'BG',
			'BH',
			'BI',
			'BJ',
			'BN',
			'BO',
			'BR',
			'BS',
			'BT',
			'BW',
			'BY',
			'BZ',
			'CA',
			'CD',
			'CG',
			'CH',
			'CI',
			'CL',
			'CM',
			'CO',
			'CR',
			'CV',
			'CW',
			'CY',
			'CZ',
			'DE',
			'DJ',
			'DK',
			'DM',
			'DO',
			'DZ',
			'EC',
			'EE',
			'EG',
			'ES',
			'FI',
			'FJ',
			'FM',
			'FR',
			'GA',
			'GB',
			'GD',
			'GE',
			'GH',
			'GM',
			'GN',
			'GQ',
			'GR',
			'GT',
			'GW',
			'GY',
			'HK',
			'HN',
			'HR',
			'HT',
			'HU',
			'ID',
			'IE',
			'IL',
			'IN',
			'IQ',
			'IS',
			'IT',
			'JM',
			'JO',
			'JP',
			'KE',
			'KG',
			'KH',
			'KI',
			'KM',
			'KN',
			'KR',
			'KW',
			'KZ',
			'LA',
			'LB',
			'LC',
			'LI',
			'LK',
			'LR',
			'LS',
			'LT',
			'LU',
			'LV',
			'LY',
			'MA',
			'MC',
			'MD',
			'ME',
			'MG',
			'MH',
			'MK',
			'ML',
			'MN',
			'MO',
			'MR',
			'MT',
			'MU',
			'MV',
			'MW',
			'MX',
			'MY',
			'MZ',
			'NA',
			'NE',
			'NG',
			'NI',
			'NL',
			'NO',
			'NP',
			'NR',
			'NZ',
			'OM',
			'PA',
			'PE',
			'PG',
			'PH',
			'PK',
			'PL',
			'PS',
			'PT',
			'PW',
			'PY',
			'QA',
			'RO',
			'RS',
			'RW',
			'SA',
			'SB',
			'SC',
			'SE',
			'SG',
			'SI',
			'SK',
			'SL',
			'SM',
			'SN',
			'SR',
			'ST',
			'SV',
			'SZ',
			'TD',
			'TG',
			'TH',
			'TJ',
			'TL',
			'TN',
			'TO',
			'TR',
			'TT',
			'TV',
			'TW',
			'TZ',
			'UA',
			'UG',
			'US',
			'UY',
			'UZ',
			'VC',
			'VE',
			'VN',
			'VU',
			'WS',
			'XK',
			'ZA',
			'ZM',
			'ZW',
		],
		disc_number: 1,
		duration_ms: 209493,
		explicit: false,
		external_ids: {
			isrc: 'USQX91902708',
		},
		external_urls: {
			spotify: 'https://open.spotify.com/track/77MdvMx9L4ZQuLhhn3o21h',
		},
		href: 'https://api.spotify.com/v1/tracks/77MdvMx9L4ZQuLhhn3o21h',
		id: '77MdvMx9L4ZQuLhhn3o21h',
		is_local: false,
		name: 'If the World Was Ending (feat. Julia Michaels)',
		popularity: 72,
		preview_url:
			'https://p.scdn.co/mp3-preview/371187b3012b9afe859f36811190b04aeaa6172f?cid=3c9d561847f94200979c53710b6e3fba',
		track_number: 7,
		type: 'track',
		uri: 'spotify:track:77MdvMx9L4ZQuLhhn3o21h',
	},
	{
		album: {
			album_type: 'single',
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/7z5WFjZAIYejWy0NI5lv4T',
					},
					href: 'https://api.spotify.com/v1/artists/7z5WFjZAIYejWy0NI5lv4T',
					id: '7z5WFjZAIYejWy0NI5lv4T',
					name: 'Dan + Shay',
					type: 'artist',
					uri: 'spotify:artist:7z5WFjZAIYejWy0NI5lv4T',
				},
			],
			available_markets: [
				'AD',
				'AE',
				'AG',
				'AL',
				'AM',
				'AO',
				'AR',
				'AT',
				'AU',
				'AZ',
				'BA',
				'BB',
				'BD',
				'BE',
				'BF',
				'BG',
				'BH',
				'BI',
				'BJ',
				'BN',
				'BO',
				'BR',
				'BS',
				'BT',
				'BW',
				'BY',
				'BZ',
				'CA',
				'CD',
				'CG',
				'CH',
				'CI',
				'CL',
				'CM',
				'CO',
				'CR',
				'CV',
				'CW',
				'CY',
				'CZ',
				'DE',
				'DJ',
				'DK',
				'DM',
				'DO',
				'DZ',
				'EC',
				'EE',
				'EG',
				'ES',
				'FI',
				'FJ',
				'FM',
				'FR',
				'GA',
				'GB',
				'GD',
				'GE',
				'GH',
				'GM',
				'GN',
				'GQ',
				'GR',
				'GT',
				'GW',
				'GY',
				'HK',
				'HN',
				'HR',
				'HT',
				'HU',
				'ID',
				'IE',
				'IL',
				'IN',
				'IQ',
				'IS',
				'IT',
				'JM',
				'JO',
				'JP',
				'KE',
				'KG',
				'KH',
				'KI',
				'KM',
				'KN',
				'KR',
				'KW',
				'KZ',
				'LA',
				'LB',
				'LC',
				'LI',
				'LK',
				'LR',
				'LS',
				'LT',
				'LU',
				'LV',
				'LY',
				'MA',
				'MC',
				'MD',
				'ME',
				'MG',
				'MH',
				'MK',
				'ML',
				'MN',
				'MO',
				'MR',
				'MT',
				'MU',
				'MV',
				'MW',
				'MX',
				'MY',
				'MZ',
				'NA',
				'NE',
				'NG',
				'NI',
				'NL',
				'NO',
				'NP',
				'NR',
				'NZ',
				'OM',
				'PA',
				'PE',
				'PG',
				'PH',
				'PK',
				'PL',
				'PS',
				'PT',
				'PW',
				'PY',
				'QA',
				'RO',
				'RS',
				'RW',
				'SA',
				'SB',
				'SC',
				'SE',
				'SG',
				'SI',
				'SK',
				'SL',
				'SM',
				'SN',
				'SR',
				'ST',
				'SV',
				'SZ',
				'TD',
				'TG',
				'TH',
				'TJ',
				'TL',
				'TN',
				'TO',
				'TR',
				'TT',
				'TV',
				'TW',
				'TZ',
				'UA',
				'UG',
				'US',
				'UY',
				'UZ',
				'VC',
				'VE',
				'VN',
				'VU',
				'WS',
				'XK',
				'ZA',
				'ZM',
				'ZW',
			],
			external_urls: {
				spotify: 'https://open.spotify.com/album/4PG2VYLVZls4GxvLjKMrp5',
			},
			href: 'https://api.spotify.com/v1/albums/4PG2VYLVZls4GxvLjKMrp5',
			id: '4PG2VYLVZls4GxvLjKMrp5',
			images: [
				{
					height: 640,
					url: 'https://i.scdn.co/image/ab67616d0000b273c571fc3cc77c9d1efa95b6a5',
					width: 640,
				},
				{
					height: 300,
					url: 'https://i.scdn.co/image/ab67616d00001e02c571fc3cc77c9d1efa95b6a5',
					width: 300,
				},
				{
					height: 64,
					url: 'https://i.scdn.co/image/ab67616d00004851c571fc3cc77c9d1efa95b6a5',
					width: 64,
				},
			],
			name: 'Speechless (feat. Tori Kelly)',
			release_date: '2019-06-07',
			release_date_precision: 'day',
			total_tracks: 1,
			type: 'album',
			uri: 'spotify:album:4PG2VYLVZls4GxvLjKMrp5',
		},
		artists: [
			{
				external_urls: {
					spotify: 'https://open.spotify.com/artist/7z5WFjZAIYejWy0NI5lv4T',
				},
				href: 'https://api.spotify.com/v1/artists/7z5WFjZAIYejWy0NI5lv4T',
				id: '7z5WFjZAIYejWy0NI5lv4T',
				name: 'Dan + Shay',
				type: 'artist',
				uri: 'spotify:artist:7z5WFjZAIYejWy0NI5lv4T',
			},
			{
				external_urls: {
					spotify: 'https://open.spotify.com/artist/1vSN1fsvrzpbttOYGsliDr',
				},
				href: 'https://api.spotify.com/v1/artists/1vSN1fsvrzpbttOYGsliDr',
				id: '1vSN1fsvrzpbttOYGsliDr',
				name: 'Tori Kelly',
				type: 'artist',
				uri: 'spotify:artist:1vSN1fsvrzpbttOYGsliDr',
			},
		],
		available_markets: [
			'AD',
			'AE',
			'AG',
			'AL',
			'AM',
			'AO',
			'AR',
			'AT',
			'AU',
			'AZ',
			'BA',
			'BB',
			'BD',
			'BE',
			'BF',
			'BG',
			'BH',
			'BI',
			'BJ',
			'BN',
			'BO',
			'BR',
			'BS',
			'BT',
			'BW',
			'BY',
			'BZ',
			'CA',
			'CD',
			'CG',
			'CH',
			'CI',
			'CL',
			'CM',
			'CO',
			'CR',
			'CV',
			'CW',
			'CY',
			'CZ',
			'DE',
			'DJ',
			'DK',
			'DM',
			'DO',
			'DZ',
			'EC',
			'EE',
			'EG',
			'ES',
			'FI',
			'FJ',
			'FM',
			'FR',
			'GA',
			'GB',
			'GD',
			'GE',
			'GH',
			'GM',
			'GN',
			'GQ',
			'GR',
			'GT',
			'GW',
			'GY',
			'HK',
			'HN',
			'HR',
			'HT',
			'HU',
			'ID',
			'IE',
			'IL',
			'IN',
			'IQ',
			'IS',
			'IT',
			'JM',
			'JO',
			'JP',
			'KE',
			'KG',
			'KH',
			'KI',
			'KM',
			'KN',
			'KR',
			'KW',
			'KZ',
			'LA',
			'LB',
			'LC',
			'LI',
			'LK',
			'LR',
			'LS',
			'LT',
			'LU',
			'LV',
			'LY',
			'MA',
			'MC',
			'MD',
			'ME',
			'MG',
			'MH',
			'MK',
			'ML',
			'MN',
			'MO',
			'MR',
			'MT',
			'MU',
			'MV',
			'MW',
			'MX',
			'MY',
			'MZ',
			'NA',
			'NE',
			'NG',
			'NI',
			'NL',
			'NO',
			'NP',
			'NR',
			'NZ',
			'OM',
			'PA',
			'PE',
			'PG',
			'PH',
			'PK',
			'PL',
			'PS',
			'PT',
			'PW',
			'PY',
			'QA',
			'RO',
			'RS',
			'RW',
			'SA',
			'SB',
			'SC',
			'SE',
			'SG',
			'SI',
			'SK',
			'SL',
			'SM',
			'SN',
			'SR',
			'ST',
			'SV',
			'SZ',
			'TD',
			'TG',
			'TH',
			'TJ',
			'TL',
			'TN',
			'TO',
			'TR',
			'TT',
			'TV',
			'TW',
			'TZ',
			'UA',
			'UG',
			'US',
			'UY',
			'UZ',
			'VC',
			'VE',
			'VN',
			'VU',
			'WS',
			'XK',
			'ZA',
			'ZM',
			'ZW',
		],
		disc_number: 1,
		duration_ms: 208960,
		explicit: false,
		external_ids: {
			isrc: 'USWB11901352',
		},
		external_urls: {
			spotify: 'https://open.spotify.com/track/7nsOsdlqa9Srr1LBYyd9pC',
		},
		href: 'https://api.spotify.com/v1/tracks/7nsOsdlqa9Srr1LBYyd9pC',
		id: '7nsOsdlqa9Srr1LBYyd9pC',
		is_local: false,
		name: 'Speechless (feat. Tori Kelly)',
		popularity: 59,
		preview_url:
			'https://p.scdn.co/mp3-preview/4c60124debcf405f2157f3e0e245cbe6b070618e?cid=3c9d561847f94200979c53710b6e3fba',
		track_number: 1,
		type: 'track',
		uri: 'spotify:track:7nsOsdlqa9Srr1LBYyd9pC',
	},
	{
		album: {
			album_type: 'album',
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/5ZsFI1h6hIdQRw2ti0hz81',
					},
					href: 'https://api.spotify.com/v1/artists/5ZsFI1h6hIdQRw2ti0hz81',
					id: '5ZsFI1h6hIdQRw2ti0hz81',
					name: 'ZAYN',
					type: 'artist',
					uri: 'spotify:artist:5ZsFI1h6hIdQRw2ti0hz81',
				},
			],
			available_markets: [
				'AD',
				'AE',
				'AG',
				'AL',
				'AM',
				'AO',
				'AR',
				'AT',
				'AU',
				'AZ',
				'BA',
				'BB',
				'BD',
				'BE',
				'BF',
				'BG',
				'BH',
				'BI',
				'BJ',
				'BN',
				'BO',
				'BR',
				'BS',
				'BT',
				'BW',
				'BY',
				'BZ',
				'CA',
				'CD',
				'CG',
				'CH',
				'CI',
				'CL',
				'CM',
				'CO',
				'CR',
				'CV',
				'CW',
				'CY',
				'CZ',
				'DE',
				'DJ',
				'DK',
				'DM',
				'DO',
				'DZ',
				'EC',
				'EE',
				'EG',
				'ES',
				'FI',
				'FJ',
				'FM',
				'FR',
				'GA',
				'GB',
				'GD',
				'GE',
				'GH',
				'GM',
				'GN',
				'GQ',
				'GR',
				'GT',
				'GW',
				'GY',
				'HK',
				'HN',
				'HR',
				'HT',
				'HU',
				'ID',
				'IE',
				'IL',
				'IN',
				'IQ',
				'IS',
				'IT',
				'JM',
				'JO',
				'JP',
				'KE',
				'KG',
				'KH',
				'KI',
				'KM',
				'KN',
				'KR',
				'KW',
				'KZ',
				'LA',
				'LB',
				'LC',
				'LI',
				'LK',
				'LR',
				'LS',
				'LT',
				'LU',
				'LV',
				'LY',
				'MA',
				'MC',
				'MD',
				'ME',
				'MG',
				'MH',
				'MK',
				'ML',
				'MN',
				'MO',
				'MR',
				'MT',
				'MU',
				'MV',
				'MW',
				'MX',
				'MY',
				'MZ',
				'NA',
				'NE',
				'NG',
				'NI',
				'NL',
				'NO',
				'NP',
				'NR',
				'NZ',
				'OM',
				'PA',
				'PE',
				'PG',
				'PH',
				'PK',
				'PL',
				'PS',
				'PT',
				'PW',
				'PY',
				'QA',
				'RO',
				'RS',
				'RW',
				'SA',
				'SB',
				'SC',
				'SE',
				'SG',
				'SI',
				'SK',
				'SL',
				'SM',
				'SN',
				'SR',
				'ST',
				'SV',
				'SZ',
				'TD',
				'TG',
				'TH',
				'TJ',
				'TL',
				'TN',
				'TO',
				'TR',
				'TT',
				'TV',
				'TW',
				'TZ',
				'UA',
				'UG',
				'US',
				'UY',
				'UZ',
				'VC',
				'VE',
				'VN',
				'VU',
				'WS',
				'XK',
				'ZA',
				'ZM',
				'ZW',
			],
			external_urls: {
				spotify: 'https://open.spotify.com/album/1DF9B2hfwX4EdgEFwGcRwh',
			},
			href: 'https://api.spotify.com/v1/albums/1DF9B2hfwX4EdgEFwGcRwh',
			id: '1DF9B2hfwX4EdgEFwGcRwh',
			images: [
				{
					height: 640,
					url: 'https://i.scdn.co/image/ab67616d0000b2732bdcb339402ebd78651f09c8',
					width: 640,
				},
				{
					height: 300,
					url: 'https://i.scdn.co/image/ab67616d00001e022bdcb339402ebd78651f09c8',
					width: 300,
				},
				{
					height: 64,
					url: 'https://i.scdn.co/image/ab67616d000048512bdcb339402ebd78651f09c8',
					width: 64,
				},
			],
			name: 'Icarus Falls',
			release_date: '2018-12-14',
			release_date_precision: 'day',
			total_tracks: 29,
			type: 'album',
			uri: 'spotify:album:1DF9B2hfwX4EdgEFwGcRwh',
		},
		artists: [
			{
				external_urls: {
					spotify: 'https://open.spotify.com/artist/5ZsFI1h6hIdQRw2ti0hz81',
				},
				href: 'https://api.spotify.com/v1/artists/5ZsFI1h6hIdQRw2ti0hz81',
				id: '5ZsFI1h6hIdQRw2ti0hz81',
				name: 'ZAYN',
				type: 'artist',
				uri: 'spotify:artist:5ZsFI1h6hIdQRw2ti0hz81',
			},
		],
		available_markets: [
			'AD',
			'AE',
			'AG',
			'AL',
			'AM',
			'AO',
			'AR',
			'AT',
			'AU',
			'AZ',
			'BA',
			'BB',
			'BD',
			'BE',
			'BF',
			'BG',
			'BH',
			'BI',
			'BJ',
			'BN',
			'BO',
			'BR',
			'BS',
			'BT',
			'BW',
			'BY',
			'BZ',
			'CA',
			'CD',
			'CG',
			'CH',
			'CI',
			'CL',
			'CM',
			'CO',
			'CR',
			'CV',
			'CW',
			'CY',
			'CZ',
			'DE',
			'DJ',
			'DK',
			'DM',
			'DO',
			'DZ',
			'EC',
			'EE',
			'EG',
			'ES',
			'FI',
			'FJ',
			'FM',
			'FR',
			'GA',
			'GB',
			'GD',
			'GE',
			'GH',
			'GM',
			'GN',
			'GQ',
			'GR',
			'GT',
			'GW',
			'GY',
			'HK',
			'HN',
			'HR',
			'HT',
			'HU',
			'ID',
			'IE',
			'IL',
			'IN',
			'IQ',
			'IS',
			'IT',
			'JM',
			'JO',
			'JP',
			'KE',
			'KG',
			'KH',
			'KI',
			'KM',
			'KN',
			'KR',
			'KW',
			'KZ',
			'LA',
			'LB',
			'LC',
			'LI',
			'LK',
			'LR',
			'LS',
			'LT',
			'LU',
			'LV',
			'LY',
			'MA',
			'MC',
			'MD',
			'ME',
			'MG',
			'MH',
			'MK',
			'ML',
			'MN',
			'MO',
			'MR',
			'MT',
			'MU',
			'MV',
			'MW',
			'MX',
			'MY',
			'MZ',
			'NA',
			'NE',
			'NG',
			'NI',
			'NL',
			'NO',
			'NP',
			'NR',
			'NZ',
			'OM',
			'PA',
			'PE',
			'PG',
			'PH',
			'PK',
			'PL',
			'PS',
			'PT',
			'PW',
			'PY',
			'QA',
			'RO',
			'RS',
			'RW',
			'SA',
			'SB',
			'SC',
			'SE',
			'SG',
			'SI',
			'SK',
			'SL',
			'SM',
			'SN',
			'SR',
			'ST',
			'SV',
			'SZ',
			'TD',
			'TG',
			'TH',
			'TJ',
			'TL',
			'TN',
			'TO',
			'TR',
			'TT',
			'TV',
			'TW',
			'TZ',
			'UA',
			'UG',
			'US',
			'UY',
			'UZ',
			'VC',
			'VE',
			'VN',
			'VU',
			'WS',
			'XK',
			'ZA',
			'ZM',
			'ZW',
		],
		disc_number: 1,
		duration_ms: 180120,
		explicit: false,
		external_ids: {
			isrc: 'USRC11803762',
		},
		external_urls: {
			spotify: 'https://open.spotify.com/track/6CJLdpuz4utMTypcE8kUG3',
		},
		href: 'https://api.spotify.com/v1/tracks/6CJLdpuz4utMTypcE8kUG3',
		id: '6CJLdpuz4utMTypcE8kUG3',
		is_local: false,
		name: 'Good Years',
		popularity: 63,
		preview_url:
			'https://p.scdn.co/mp3-preview/46bd6941041ca4696d7871a51ea62fef4fc8b504?cid=3c9d561847f94200979c53710b6e3fba',
		track_number: 21,
		type: 'track',
		uri: 'spotify:track:6CJLdpuz4utMTypcE8kUG3',
	},
	{
		album: {
			album_type: 'album',
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR',
					},
					href: 'https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR',
					id: '66CXWjxzNUsdJxJ2JdwvnR',
					name: 'Ariana Grande',
					type: 'artist',
					uri: 'spotify:artist:66CXWjxzNUsdJxJ2JdwvnR',
				},
			],
			available_markets: [
				'AD',
				'AG',
				'AL',
				'AM',
				'AO',
				'AR',
				'AT',
				'AU',
				'AZ',
				'BA',
				'BB',
				'BD',
				'BE',
				'BF',
				'BG',
				'BI',
				'BJ',
				'BN',
				'BO',
				'BR',
				'BS',
				'BT',
				'BW',
				'BY',
				'BZ',
				'CA',
				'CD',
				'CG',
				'CH',
				'CI',
				'CL',
				'CM',
				'CO',
				'CR',
				'CV',
				'CY',
				'CZ',
				'DE',
				'DJ',
				'DK',
				'DM',
				'DO',
				'EC',
				'EE',
				'ES',
				'FI',
				'FJ',
				'FM',
				'GA',
				'GB',
				'GD',
				'GE',
				'GH',
				'GM',
				'GN',
				'GQ',
				'GR',
				'GT',
				'GW',
				'GY',
				'HK',
				'HN',
				'HR',
				'HT',
				'HU',
				'ID',
				'IE',
				'IN',
				'IS',
				'IT',
				'JM',
				'KE',
				'KG',
				'KH',
				'KI',
				'KM',
				'KN',
				'KR',
				'KZ',
				'LA',
				'LC',
				'LI',
				'LK',
				'LR',
				'LS',
				'LT',
				'LU',
				'LV',
				'MC',
				'MD',
				'ME',
				'MG',
				'MH',
				'MK',
				'ML',
				'MN',
				'MO',
				'MR',
				'MT',
				'MU',
				'MV',
				'MW',
				'MX',
				'MY',
				'MZ',
				'NA',
				'NE',
				'NG',
				'NI',
				'NL',
				'NO',
				'NP',
				'NR',
				'NZ',
				'PA',
				'PE',
				'PG',
				'PH',
				'PK',
				'PL',
				'PS',
				'PT',
				'PW',
				'PY',
				'RO',
				'RS',
				'RW',
				'SB',
				'SC',
				'SE',
				'SG',
				'SI',
				'SK',
				'SL',
				'SM',
				'SN',
				'SR',
				'ST',
				'SV',
				'SZ',
				'TD',
				'TG',
				'TH',
				'TJ',
				'TL',
				'TO',
				'TR',
				'TT',
				'TV',
				'TW',
				'TZ',
				'UA',
				'UG',
				'US',
				'UY',
				'UZ',
				'VC',
				'VE',
				'VN',
				'VU',
				'WS',
				'XK',
				'ZA',
				'ZM',
				'ZW',
			],
			external_urls: {
				spotify: 'https://open.spotify.com/album/6EVYTRG1drKdO8OnIQBeEj',
			},
			href: 'https://api.spotify.com/v1/albums/6EVYTRG1drKdO8OnIQBeEj',
			id: '6EVYTRG1drKdO8OnIQBeEj',
			images: [
				{
					height: 640,
					url: 'https://i.scdn.co/image/ab67616d0000b273deec12a28d1e336c5052e9aa',
					width: 640,
				},
				{
					height: 300,
					url: 'https://i.scdn.co/image/ab67616d00001e02deec12a28d1e336c5052e9aa',
					width: 300,
				},
				{
					height: 64,
					url: 'https://i.scdn.co/image/ab67616d00004851deec12a28d1e336c5052e9aa',
					width: 64,
				},
			],
			name: 'My Everything (Deluxe)',
			release_date: '2014-08-25',
			release_date_precision: 'day',
			total_tracks: 15,
			type: 'album',
			uri: 'spotify:album:6EVYTRG1drKdO8OnIQBeEj',
		},
		artists: [
			{
				external_urls: {
					spotify: 'https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR',
				},
				href: 'https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR',
				id: '66CXWjxzNUsdJxJ2JdwvnR',
				name: 'Ariana Grande',
				type: 'artist',
				uri: 'spotify:artist:66CXWjxzNUsdJxJ2JdwvnR',
			},
		],
		available_markets: [
			'AD',
			'AG',
			'AL',
			'AM',
			'AO',
			'AR',
			'AT',
			'AU',
			'AZ',
			'BA',
			'BB',
			'BD',
			'BE',
			'BF',
			'BG',
			'BI',
			'BJ',
			'BN',
			'BO',
			'BR',
			'BS',
			'BT',
			'BW',
			'BY',
			'BZ',
			'CA',
			'CD',
			'CG',
			'CH',
			'CI',
			'CL',
			'CM',
			'CO',
			'CR',
			'CV',
			'CY',
			'CZ',
			'DE',
			'DJ',
			'DK',
			'DM',
			'DO',
			'EC',
			'EE',
			'ES',
			'FI',
			'FJ',
			'FM',
			'GA',
			'GB',
			'GD',
			'GE',
			'GH',
			'GM',
			'GN',
			'GQ',
			'GR',
			'GT',
			'GW',
			'GY',
			'HK',
			'HN',
			'HR',
			'HT',
			'HU',
			'ID',
			'IE',
			'IN',
			'IS',
			'IT',
			'JM',
			'KE',
			'KG',
			'KH',
			'KI',
			'KM',
			'KN',
			'KR',
			'KZ',
			'LA',
			'LC',
			'LI',
			'LK',
			'LR',
			'LS',
			'LT',
			'LU',
			'LV',
			'MC',
			'MD',
			'ME',
			'MG',
			'MH',
			'MK',
			'ML',
			'MN',
			'MO',
			'MR',
			'MT',
			'MU',
			'MV',
			'MW',
			'MX',
			'MY',
			'MZ',
			'NA',
			'NE',
			'NG',
			'NI',
			'NL',
			'NO',
			'NP',
			'NR',
			'NZ',
			'PA',
			'PE',
			'PG',
			'PH',
			'PK',
			'PL',
			'PS',
			'PT',
			'PW',
			'PY',
			'RO',
			'RS',
			'RW',
			'SB',
			'SC',
			'SE',
			'SG',
			'SI',
			'SK',
			'SL',
			'SM',
			'SN',
			'SR',
			'ST',
			'SV',
			'SZ',
			'TD',
			'TG',
			'TH',
			'TJ',
			'TL',
			'TO',
			'TR',
			'TT',
			'TV',
			'TW',
			'TZ',
			'UA',
			'UG',
			'US',
			'UY',
			'UZ',
			'VC',
			'VE',
			'VN',
			'VU',
			'WS',
			'XK',
			'ZA',
			'ZM',
			'ZW',
		],
		disc_number: 1,
		duration_ms: 232586,
		explicit: false,
		external_ids: {
			isrc: 'USUM71409730',
		},
		external_urls: {
			spotify: 'https://open.spotify.com/track/5lvnGiTAH9BVlJLHc0DXZz',
		},
		href: 'https://api.spotify.com/v1/tracks/5lvnGiTAH9BVlJLHc0DXZz',
		id: '5lvnGiTAH9BVlJLHc0DXZz',
		is_local: false,
		name: 'Just A Little Bit Of Your Heart',
		popularity: 64,
		preview_url:
			'https://p.scdn.co/mp3-preview/f124935a9c88de7a10ba72e2fa616c212e487d88?cid=3c9d561847f94200979c53710b6e3fba',
		track_number: 10,
		type: 'track',
		uri: 'spotify:track:5lvnGiTAH9BVlJLHc0DXZz',
	},
];
