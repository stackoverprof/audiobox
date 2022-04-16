import React from 'react';
import DescriptionInput from './DescriptionInput';
import TitleInput from './TitleInput';
import TracksSelected from './TracksSelected';

const HeaderEditor = () => {
	return (
		<div
			className="flex-bs col w-full h-[260px]"
			style={{ background: 'linear-gradient(0deg, #fff1, #fff0)' }}
		>
			<div className="flex-bc w-full">
				<div className="flex-cs col flex-1 w-full">
					<TitleInput value={''} onChange={(val) => console.log(val)} />
					<DescriptionInput value={''} onChange={(val) => console.log(val)} />
				</div>
				<div className="w-72 h-20"></div>
			</div>
			<TracksSelected />
		</div>
	);
};

export default HeaderEditor;

