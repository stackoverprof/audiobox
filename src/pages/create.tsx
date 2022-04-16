import React from 'react';
import HeaderEditor from '@components/Create/HeaderEditor';
import MainLayout from '@components/_layouts/MainLayout';

const Create = () => {
	return (
		<MainLayout title="Create" className="flex-sc col w-full">
			<HeaderEditor />
		</MainLayout>
	);
};

export default Create;
