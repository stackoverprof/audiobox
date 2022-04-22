import React from 'react';
import HeaderHistory from '@components/History/HeaderHistory';
import HistoryGrid from '@components/History/HistoryGrid';
import MainLayout from '@components/_layouts/MainLayout';

const History = () => {
	return (
		<MainLayout title="History" className="flex-sc col w-full">
			<HeaderHistory />
			<HistoryGrid />
		</MainLayout>
	);
};

export default History;
