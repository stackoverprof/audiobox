import React from 'react';

interface Props {
	value: string;
	onChange(value: string): void;
	disabled: boolean;
}

const TitleInput = ({ value, onChange, disabled }: Props) => {
	return (
		<div className="flex-cc pl-10 w-full">
			<textarea
				disabled={disabled}
				placeholder="Write the description here..."
				className="px-2 py-2 w-full bg-black bg-opacity-0 rounded-md opacity-40 resize-none focus:bg-opacity-100 placeholder:text-white focus:opacity-100"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				name=""
				id=""
			></textarea>
		</div>
	);
};

export default TitleInput;
