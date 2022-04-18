import React from 'react';
import colors from '@core/style/colors';
import SliderTracks from './SliderTracks';

interface Props {
	title: string;
	description: string;
	data: any[];
}

const DisplaySection = ({ title, description, data }: Props) => {
	return (
		<div className="h-[260px] relative w-full flex-se mb-24">
			<div
				className="pointer-events-none w-[440px] pr-20 absolute pl-[120px] h-full flex-es col z-20"
				style={{
					background: `linear-gradient(60deg, ${colors.base}ff 30%, ${colors.base}00 70%)`,
				}}
			>
				<h2 className="font-semibold text-4xl">{title}</h2>
				<p className="opacity-50 text-lg">{description}</p>
			</div>
			<div className="absolute full top-0 left-0">
				<SliderTracks data={data} />
			</div>
		</div>
	);
};

export default DisplaySection;

