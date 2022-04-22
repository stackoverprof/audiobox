import React from 'react';
import useUserData from '@core/swr/userData';

const AuthButton = () => {
	const { user } = useUserData();
	return (
		<div className="flex-cc col">
			<div className="flex-cc overflow-hidden mb-1 w-6 h-6 bg-white bg-opacity-20 rounded-full border border-white border-opacity-50">
				<img
					src={`https://avatars.dicebear.com/api/micah/${user.name}.svg`}
					alt="avatar"
					className="full"
				/>
			</div>
			<p className="text-[11px]">Profile</p>
		</div>
	);
};

export default AuthButton;
