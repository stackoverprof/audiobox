// [README] : DATA FETCHING manager for the Playlists owned/followed by user

import * as fetchers from '@core/api/fetchers';
import useSWR from 'swr';
import useUserData from './userData';

const useUserPlaylist = () => {
	const { user } = useUserData();
	const { data, mutate, error } = useSWR('user_playlist', fetchers.getUserPlaylist);

	const preprocess = () => {
		const owned_only = data && user.id ? data.filter((x) => x.owner.id === user.id) : data;
		return owned_only;
	};

	return {
		loading: !data && !error,
		error: error && error.status === 403,
		data: data ? preprocess() : [],
		mutate,
	};
};

// [TODO] : separate return between owned and all

export default useUserPlaylist;
