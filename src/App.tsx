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

const App = () => {
	// CUSTOM HOOK FOR AUTHENTICATION WITH TOKEN
	useSession();

	// AUTH STATUS
	const { authenticated, ready } = useAuth();

	if (!ready) return <></>;
	return (
		<Routes>
			<Route path="/" element={!authenticated ? <Home /> : <Navigate to="/create" />} />
			<Route path="/create" element={authenticated ? <Create /> : <Navigate to="/" />} />
			<Route path="/explore" element={authenticated ? <Explore /> : <Navigate to="/" />} />
			<Route path="/library" element={authenticated ? <Library /> : <Navigate to="/" />} />
			<Route path="/history" element={authenticated ? <History /> : <Navigate to="/" />} />
			<Route path="*" element={<_404 />} />
		</Routes>
	);
};

export default App;
