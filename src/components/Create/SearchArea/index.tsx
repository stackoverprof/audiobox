import React, { useState } from 'react';
import ResultGrid from './ResultGrid';
import SearchInput from './SearchInput';
import Spotify from '@core/api/lib/spotify';

const SearchArea = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResult, setSearchResult] = useState<any[]>([]);

	const handleSearch = async (e) => {
		e.preventDefault();

		const config = {
			params: {
				type: 'track',
				q: searchQuery,
			},
		};

		const result = await Spotify.get('/search', config)
			.then((res) => res.data.tracks.items)
			.catch((err) => console.error(err.response.data));

		setSearchResult(result);
	};

	return (
		<div className="flex-sc col px-12 w-full">
			<SearchInput
				value={searchQuery}
				onChange={(val) => setSearchQuery(val)}
				handleSearch={handleSearch}
			/>
			<ResultGrid data={searchResult} />
		</div>
	);
};

export default SearchArea;

