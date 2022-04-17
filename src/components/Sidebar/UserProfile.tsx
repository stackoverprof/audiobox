import React from 'react';
import useUserData from '@core/swr/userData';

const UserProfile = () => {
	const { user } = useUserData();

	return (
		<div className="flex-bc px-6 w-full">
			<p className="">Hi, {user?.display_name}</p>
			<div className="w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
		</div>
	);
};
// [TODO] : make an explicit logout btn

export default UserProfile;
