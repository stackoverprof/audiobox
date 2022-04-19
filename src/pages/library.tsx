import React from 'react';
import HeaderLibrary from '@components/Library/HeaderLibrary';
import MainLayout from '@components/_layouts/MainLayout';
import PlaylistsMapper from '@components/Library/PlaylistsMapper';
// [TODO] : can show non-user playlist, can follow too
const Library = () => {
	return (
		<MainLayout title="Library" className="flex-sc col w-full">
			<HeaderLibrary />
			<PlaylistsMapper />
		</MainLayout>
	);
};

export default Library;
