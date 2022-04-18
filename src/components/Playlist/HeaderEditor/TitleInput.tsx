import React, { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';

interface Props {
	value: string;
	onChange(value: string): void;
}

const TitleInput = ({ value, onChange }: Props) => {
	const [focus, setFocus] = useState(false);

	return (
		<div className="relative flex-cc pl-10 mt-8 w-full">
			<input
				type="text"
				className="px-2 py-2 w-full text-5xl font-semibold bg-black bg-opacity-0 rounded-md focus:bg-opacity-100 placeholder:text-white"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				name=""
				id=""
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			/>
			<div className="absolute flex-sc pl-7 pointer-events-none full">
				<div className="flex-ce text-5xl font-semibold">
					<span className="opacity-0">{value}</span>
					{!focus && <FiEdit3 size={32} className="mb-0.5 ml-3 opacity-40" />}
				</div>
			</div>

			<div
				className={[
					'absolute transition flex-es top-0 left-0 text-xs text-red-300 pointer-events-none full opacity-0',
					!focus && value && value.length < 10 && 'opacity-100',
				].join(' ')}
			>
				<p className="pt-1 pr-2 text-right">Title is too short. Minimal 10 characters</p>
			</div>
		</div>
	);
};

export default TitleInput;
