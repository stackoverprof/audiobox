import React from 'react';
import SliderTracks from './SliderTracks';

interface Props {
	title: string;
	description: string;
	data: any[];
}

const DisplaySection = ({ title, description, data }: Props) => {
	return (
		<div className="h-[260px] relative w-full flex-se mb-8">
			<div className="w-[320px] absolute pl-28 h-full flex-es col">
				<h2 className="font-semibold text-3xl">{title}</h2>
				<p className="opacity-50">{description}</p>
			</div>
			<div className="absolute full top-0 left-0">
				<SliderTracks data={data} />
			</div>
		</div>
	);
};

export default DisplaySection;

