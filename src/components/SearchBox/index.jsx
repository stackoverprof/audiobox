import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import { useAuth } from 'src/core/redux/reducer/auth';
import axiosSpotify from 'src/core/utils/axios-spotify';

const SearchBox = ({ setSearchResult }) => {
	const [searchQuery, setSearchQuery] = useState('');
	const handleSearch = async (e) => {
		e.preventDefault();

		let config = {
			params: {
				type: 'track',
				q: searchQuery,
			},
		};

		const result = await axiosSpotify
			.get('/search', config)
			.then((res) => res.data.tracks.items);

		setSearchResult(result);
	};

	const { authenticated } = useAuth();

	return (
		<form
			onSubmit={handleSearch}
			className="search-form"
			style={{
				opacity: authenticated ? 1 : 0.5,
				pointerEvents: authenticated ? 'auto' : 'none',
			}}
		>
			<input
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				type="text"
				className="search-input"
				placeholder="Search something..."
			/>
			<button type="submit" className="search-btn">
				SEARCH!
			</button>
		</form>
	);
};

SearchBox.propTypes = {
	setSearchResult: PropTypes.func.isRequired,
};

export default SearchBox;

