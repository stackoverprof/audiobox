import React from 'react';
import HeaderEditor from '@components/Playlist/HeaderEditor';
import MainLayout from '@components/_layouts/MainLayout';
import SearchArea from '@components/Create/SearchArea';

const Create = () => {
	return (
		<MainLayout title="Create" className="flex-sc col w-full">
			<HeaderEditor />
			<SearchArea />
		</MainLayout>
	);
};

export default Create;
