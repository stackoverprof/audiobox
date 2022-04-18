import React from 'react';
import useUserData from '@core/swr/userData';
import { logout } from '@core/redux/actions/auth';
import { MdLogout } from 'react-icons/md';
import { useDispatch } from 'react-redux';

const UserProfile = () => {
	const { user } = useUserData();

	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<div className="flex-bc px-6 w-full">
			<div className="flex-cc">
				<div className="w-8 h-8 mr-3 bg-white bg-opacity-20 rounded-full"></div>
				<p className="ml-2">{user?.display_name}</p>
			</div>
			<button
				onClick={handleLogout}
				className="h-8 w-8 rounded-md text-[#fff6]  hover:bg-red-400 hover:bg-opacity-20  hover:text-white flex-cc"
			>
				<MdLogout size={18} className="transform rotate-180" />
			</button>
		</div>
	);
};
// [TODO] : make an explicit logout btn

export default UserProfile;
