import React, { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';

interface Props {
	value: string;
	onChange(value: string): void;
	disabled?: boolean;
}

const TitleInput = ({ value, onChange, disabled }: Props) => {
	const [focus, setFocus] = useState(false);

	return (
		<div className="relative flex-cc mt-8 w-full">
			<input
				type="text"
				disabled={disabled}
				className="px-2 py-2 w-full text-5xl font-semibold bg-black bg-opacity-0 rounded-md -lg:text-4xl focus:bg-opacity-100 placeholder:text-white"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				data-testid="input-title-playlist"
			/>
			<div className="absolute flex-sc pl-2 pointer-events-none full">
				<div className="flex-ce text-5xl font-semibold -lg:text-4xl">
					{value ? (
						<span className="opacity-0">{value}</span>
					) : (
						<span className="opacity-30">New Playlist </span>
					)}
					{!focus && !disabled && (
						<FiEdit3 size={32} className="mb-0.5 ml-3 opacity-60" />
					)}
				</div>
			</div>

			<div
				className={[
					'absolute transition flex-es top-0 left-0 text-xs text-red-300 pointer-events-none full',
					!focus && value && value.length < 10 ? 'opacity-100' : ' opacity-0',
				].join(' ')}
			>
				<p className="pt-1 pr-2 text-right">Title is too short. Minimal 10 characters</p>
			</div>
		</div>
	);
};

export default TitleInput;
