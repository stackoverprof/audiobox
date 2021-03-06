import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';

interface Props {
	value: string;
	onChange(value: string): void;
	handleSearch: React.FormEventHandler;
}

const SearchInput = ({ value, onChange, handleSearch }: Props) => {
	return (
		<div className="flex-cs col py-6 mb-2 w-full">
			<form
				onSubmit={handleSearch}
				className="flex-cc bg-black border-b w-full max-w-[480px] border-white border-opacity-20"
			>
				<input
					type="text"
					data-testid="input-search-tracks"
					className="px-4 py-3 w-full bg-opacity-0 bg-base"
					placeholder="Let's find something..."
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>
				<button
					type="button"
					onClick={() => onChange('')}
					className={['px-1 h-12 transition group', !value && 'opacity-0'].join(' ')}
				>
					<RiCloseFill
						className="text-white opacity-40 transform group-hover:scale-110 group-hover:opacity-100"
						size={24}
					/>
				</button>
				<button
					type="submit"
					data-testid="button-search-tracks"
					className="px-3 h-12 transition hover:bg-theme-pink hover:bg-opacity-25"
				>
					<FiSearch className="text-white" size={24} />
				</button>
			</form>
		</div>
	);
};

export default SearchInput;
