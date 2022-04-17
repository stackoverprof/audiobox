import React, { useEffect, useState } from 'react';
import * as fetchers from '@core/api/fetchers';
import ResultGrid from './ResultGrid';
import SearchInput from './SearchInput';

const SearchArea = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResult, setSearchResult] = useState<any[]>([]);

	const handleSearch = async (e) => {
		e.preventDefault();

		const result = await fetchers.searchTracks(searchQuery);
		setSearchResult(result);
	};

	useEffect(() => {
		(async () => {
			setSearchResult(await fetchers.getRecentlyPlayed({ limit: '12' }));
		})();
	}, []);

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

