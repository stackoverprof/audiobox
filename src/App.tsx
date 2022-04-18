import React from 'react';
import _404 from '@pages/_404';
import Create from '@pages/create';
import Explore from '@pages/explore';
import History from '@pages/history';
import Home from '@pages/index';
import Library from '@pages/library';
import useSession from '@core/hooks/useSession';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '@core/redux/reducer/auth';
import '@core/style/tailwind.css';
import '@core/style/typefaces.css';
import Playlist from '@pages/library/:playlist_id';

const App = () => {
	// CUSTOM AUTHENTICATION HOOKS
	useSession();

	// AUTH STATUS from redux
	const { ready, authenticated } = useAuth();

	// PRIVATE ROUTE BLOCKING LOGIC
	const routeblocks = {
		guestOnly: (Page) => (!authenticated ? <Page /> : <Navigate to="/create" />),
		userOnly: (Page) => (authenticated ? <Page /> : <Navigate to="/" />),
	};

	if (!ready) return <></>;
	return (
		<Routes>
			<Route path="/">
				<Route index element={routeblocks.guestOnly(Home)} />
				<Route path="create" element={routeblocks.userOnly(Create)} />
				<Route path="explore" element={routeblocks.userOnly(Explore)} />
				<Route path="library">
					<Route index element={routeblocks.userOnly(Library)} />
					<Route path=":playlist_id" element={routeblocks.userOnly(Playlist)} />
				</Route>
				<Route path="history" element={routeblocks.userOnly(History)} />
			</Route>
			<Route path="*" element={<_404 />} />
		</Routes>
	);
};

// NOTE: ALL PROVIDERS and ROOT LEVEL WRAPPER is at `main.tsx`

export default App;

// [TODO] : make env zipped to gigih, make sure they can run
