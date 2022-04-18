import React, { useEffect } from 'react';
import DisplaySection from './DisplaySection';
import useFeaturedPlaylist from '@core/swr/featuredPlaylists';
import { setSelectedTab, useExplore } from '@core/redux/reducer/explore';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const EtalaseMapper = () => {
	const { data } = useFeaturedPlaylist();
	if (!data) return <></>;

	const { selectedTab } = useExplore();
	const sets = {
		featured: data.map((x) => x.id),
		charts: DATA_CHARTS,
	};

	// URLSearchParams BINDING
	const [params] = useSearchParams();
	const initial_tab = params.get('tab');
	const dispatch = useDispatch();

	useEffect(() => {
		if (initial_tab) dispatch(setSelectedTab(initial_tab));
	}, [initial_tab]);

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		searchParams.set('tab', selectedTab);
		const newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
		history.pushState(null, '', newRelativePathQuery);
	}, [selectedTab]);

	return (
		<div className="flex-sc col -mt-14 w-full">
			{sets[selectedTab].map((id) => (
				<DisplaySection playlist_id={id} ordered={selectedTab === 'charts'} key={id} />
			))}
		</div>
	);
};

export default EtalaseMapper;

const DATA_CHARTS = [
	'37i9dQZEVXbNG2KDcFcKOF',
	'37i9dQZEVXbIZK8aUquyx8',
	'37i9dQZEVXbLiRSasKsNU9',
	'37i9dQZEVXbKpV6RVDTWcZ',
	'37i9dQZEVXbMDoHDwVN2tF',
	'37i9dQZEVXbObFQZ3JLcXt',
];
