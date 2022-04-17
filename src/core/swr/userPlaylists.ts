import { useState } from 'react';
import * as fetchers from '@core/api/fetchers';
import useSWR, { useSWRConfig } from 'swr';

const useUserPlaylist = () => {
	const { cache } = useSWRConfig();
	const { data, mutate, error } = useSWR('user_playlist', fetchers.getUserPlaylist);

	const preprocess = () => {
		const user = cache.get('api_user');
		const owned_only = user?.id ? data.filter((x) => x.owner.id === user.id) : data;
		// console.log('research');

		// const searched = owned_only.filter((x) => {
		// 	console.log(x.name, searchFilter, x.name.includes(searchFilter));

		// 	return x.name.includes(searchFilter);
		// });
		// console.log('resulted', searched.length);

		// return searched;
		return owned_only;
	};

	return {
		loading: !data && !error,
		error: error && error.status === 403,
		data: data ? preprocess() : [],
		mutate,
	};
};

export default useUserPlaylist;
