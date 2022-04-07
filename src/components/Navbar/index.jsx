import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'src/core/redux/reducer/auth';
import useUser from 'src/core/swr/user';
import AuthButton from './AuthButton';

const Navbar = () => {
	const { user } = useUser();
	const { authenticated } = useAuth();

	return (
		<nav className="container flex-bc py-6 w-full">
			<h1 className="text-2xl font-semibold">Gigih Homework</h1>
			<div className="flex-cc gap-4">
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
		</nav>
	);
};

export default Navbar;

