import React from 'react';
import CreatePlaylist from '@pages/create-playlist';
import Home from '@pages/index';
import useSession from '@core/hooks/useSession';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '@core/redux/reducer/auth';
import '@core/style/tailwind.css';
import '@core/style/typefaces.css';

const App = () => {
	// CUSTOM HOOK FOR AUTHENTICATION WITH TOKEN
	useSession();

	// AUTH STATUS
	const { authenticated } = useAuth();

	return (
		<Routes>
			<Route
				path="/"
				element={!authenticated ? <Home /> : <Navigate to="/create-playlist" />}
			/>
			<Route
				path="/create-playlist"
				element={authenticated ? <CreatePlaylist /> : <Navigate to="/" />}
			/>
		</Routes>
	);
};

export default App;
