import React from 'react';

interface Props {
	value: string;
	onChange(value: string): void;
}

const TitleInput = ({ value, onChange }: Props) => {
	return (
		<div className="flex-cc pl-10 mt-8 w-full">
			<input
				placeholder="New Playlist"
				type="text"
				className="px-2 py-2 w-full text-5xl font-semibold bg-black bg-opacity-0 rounded-md focus:bg-opacity-100 placeholder:text-white"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				name=""
				id=""
			/>
		</div>
	);
};

export default TitleInput;

