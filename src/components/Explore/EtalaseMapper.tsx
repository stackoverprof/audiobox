import React from 'react';
import DisplaySection from './DisplaySection';

const EtalaseMapper = () => {
	return (
		<div className="flex-sc col w-full -mt-14">
			<DisplaySection
				title="Top Charts Global"
				description="World most played tracks. Ranked."
				data={[...Array(12)]}
			/>
			<DisplaySection
				title="For you."
				description="World most played tracks. Ranked."
				data={[...Array(12)]}
			/>
			<DisplaySection
				title="Releases Radar"
				description="World most played tracks. Ranked."
				data={[...Array(12)]}
			/>
			<DisplaySection
				title="For you."
				description="World most played tracks. Ranked."
				data={[...Array(12)]}
			/>
			<DisplaySection
				title="Releases Radar"
				description="World most played tracks. Ranked."
				data={[...Array(12)]}
			/>
			<DisplaySection
				title="Top Charts Global"
				description="World most played tracks. Ranked."
				data={[...Array(12)]}
			/>
		</div>
	);
};

export default EtalaseMapper;

