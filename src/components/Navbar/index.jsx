import React from 'react';
import { Link } from 'react-router-dom';
import useUser from 'src/core/swr/user';
import AuthButton from './AuthButton';

const Navbar = () => {
	const { user } = useUser();

	return (
		<nav className="container flex-bc w-full">
			<h1>Gigih Homework</h1>
			<div className="nav-buttons">
				{user && <p className="nav-greeting">Hello, {user.display_name}</p>}
				<Link to="/" className="btn">
					Home
				</Link>
				<Link to="/create-playlist" className="btn">
					Create Playlist
				</Link>
				<AuthButton />
			</div>
		</nav>
	);
};

export default Navbar;

