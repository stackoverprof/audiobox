import React from 'react';
import { ImBooks } from 'react-icons/im';

const HeaderLibrary = () => {
	// const [searchQuery, setSearchQuery] = useState('');
	// const { mutate } = useUserPlaylists();

	// const handleSearch = (query) => {
	// 	mutate(query);
	// };

	return (
		<div className="flex-bc px-12 mt-8 mb-4 w-full">
			<h1 className="flex-cc text-4xl font-semibold">
				<ImBooks className="mr-4" size={42} /> Library
			</h1>
			{/* <SearchInput
				value={searchQuery}
				onChange={(val) => {
					setSearchQuery(val);
					handleSearch(val);
				}}
				handleSearch={() => handleSearch(searchQuery)}
			/> */}
		</div>
	);
};

export default HeaderLibrary;
