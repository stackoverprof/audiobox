import React from 'react';
import DisplaySection from './DisplaySection';
import useFeaturedPlaylist from '@core/swr/featuredPlaylists';

const EtalaseMapper = () => {
	const { data } = useFeaturedPlaylist();
	if (!data) return <></>;

	return (
		<div className="flex-sc col w-full -mt-14">
			{data.map((item, i) => (
				<DisplaySection playlist_id={item.id} key={i} />
			))}
			{/* <DisplaySection playlist_id="37i9dQZEVXbNG2KDcFcKOF" ordered />
			<DisplaySection playlist_id="37i9dQZEVXbIZK8aUquyx8" ordered />
			<DisplaySection playlist_id="37i9dQZF1DXd7DmVuEZl0w" />
			<DisplaySection playlist_id="37i9dQZF1DX70RN3TfWWJh" /> */}
		</div>
	);
};

export default EtalaseMapper;

