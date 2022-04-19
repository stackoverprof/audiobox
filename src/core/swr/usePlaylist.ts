// [README] : DATA FETCHING manager for the data of a playlist (by ID)

import * as fetchers from '@core/api/fetchers';
import useSWR from 'swr';
import useUserData from './userData';
import useUserPlaylist from './userPlaylists';

const usePlaylist = (playlist_id) => {
	const { user } = useUserData();
	const { data: userPlaylists } = useUserPlaylist();
	const { data, mutate, error } = useSWR(`/playlists/${playlist_id}`, () =>
		fetchers.getPlaylist(playlist_id)
	);

	// [TODO] : how to handle pagination? load more? > 100 tracks data

	return {
		loading: !data && !error,
		error: error && error.status === 403,
		notFound: error && error.status === 404,
		playlist: data ? data : {},
		mutate,
		isOwned: data ? data.owner.id === user.id : false,
		isFollowed: data ? userPlaylists.find((x) => x.id === data.id) : false,
	};
};

export default usePlaylist;
