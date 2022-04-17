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
		<div className="flex-cs col py-6 w-full">
			<form
				onSubmit={handleSearch}
				className="flex-cc bg-black border-b border-white border-opacity-20"
			>
				<input
					type="text"
					className="w-[400px] bg-base bg-opacity-0 px-4 py-3"
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
					className="px-3 h-12 transition hover:bg-theme-pink hover:bg-opacity-25"
				>
					<FiSearch className="text-white" size={24} />
				</button>
			</form>
		</div>
	);
};

export default SearchInput;
