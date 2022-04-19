// [README] : DATA FETCHING manager for the data of a playlist (by ID)

import * as fetchers from '@core/api/fetchers';
import useSWR from 'swr';

const usePlaylist = (playlist_id) => {
	const { data, mutate, error } = useSWR(`/playlists/${playlist_id}`, () =>
		fetchers.getPlaylist(playlist_id)
	);

	return {
		loading: !data && !error,
		error: error && error.status === 403,
		playlist: data ? data : [],
		mutate,
	};
};

export default usePlaylist;
