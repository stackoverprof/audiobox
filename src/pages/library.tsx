import React from 'react';
import HeaderLibrary from '@components/Library/HeaderLibrary';
import MainLayout from '@components/_layouts/MainLayout';
import PlaylistsMapper from '@components/Library/PlaylistsMapper';

const Library = () => {
	return (
		<MainLayout title="Create" className="flex-sc col w-full">
			<HeaderLibrary />
			<PlaylistsMapper />
		</MainLayout>
	);
};

export default Library;

