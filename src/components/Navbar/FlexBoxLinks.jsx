import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'src/core/redux/reducer/auth';
import useUser from 'src/core/swr/user';
import AuthButton from './AuthButton';

import 'src/core/style/style-gigih.css';

const FlexBoxLinks = () => {
	const { user } = useUser();
	const { authenticated } = useAuth();

	return (
		<div className="flex-box-gigih">
			{user && <p className="nav-greeting">Hello, {user.display_name}</p>}
			<Link
				to="/"
				className={[
					'block px-3 py-2 rounded-md border',
					authenticated && 'opacity-50 cursor-not-allowed',
				].join(' ')}
			>
				Home
			</Link>
			<Link
				to="/create-playlist"
				className={[
					'block px-3 py-2 rounded-md border',
					!authenticated && 'opacity-50 cursor-not-allowed',
				].join(' ')}
			>
				Create Playlist
			</Link>
			<AuthButton />
		</div>
	);
};

export default FlexBoxLinks;

