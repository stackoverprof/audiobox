// [README] : DATA FETCHING manager for the Playlists owned/followed by user

import * as fetchers from '@core/api/fetchers';
import useSWR from 'swr';
import useUserData from './userData';

const useUserPlaylist = () => {
	const { user } = useUserData();
	const { data, mutate, error } = useSWR('user_playlist', fetchers.getUserPlaylist);

	const filterOwned = () => {
		return data && user.id ? data.filter((x) => x.owner.id === user.id) : data;
	};

	const filterPublic = () => {
		return data && user.id ? data.filter((x) => x.owner.id !== user.id) : data;
	};

	return {
		loading: !data && !error,
		error: error && error.status === 403,
		data: data ? data : [],
		ownedPlaylists: data ? filterOwned() : [],
		publicPlaylists: data ? filterPublic() : [],
		mutate,
	};
};

export default useUserPlaylist;
