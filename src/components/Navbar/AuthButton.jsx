import React from 'react';
import { useAuth } from 'src/core/redux/reducer/auth';
import spotifyLogin from 'src/core/utils/spotify-login';

const AuthButton = () => {
	const { authenticated } = useAuth();

	const handleAuth = () => {
		const targetURL = spotifyLogin();
		window.location = targetURL;
	};

	const handleLogout = () => {
		window.location = '/';
	};

	if (!authenticated)
		return (
			<button
				className="px-3 py-2 text-base font-semibold bg-green-400 rounded-md border"
				onClick={handleAuth}
			>
				Login
			</button>
		);
	else
		return (
			<button
				className="px-3 py-2 text-base font-semibold bg-red-400 rounded-md border"
				onClick={handleLogout}
			>
				Logout
			</button>
		);
};

export default AuthButton;

