import React from 'react';

interface Props {
	title: string;
	description: string;
	data: any[];
}

const DisplaySection = ({ title, description, data }: Props) => {
	return (
		<div className="h-[280px] relative w-full flex-se">
			<div className="w-[320px] absolute pl-28 h-full flex-es col">
				<h2 className="font-semibold text-3xl">{title}</h2>
				<p className="opacity-50">{description}</p>
			</div>
		</div>
	);
};

export default DisplaySection;

