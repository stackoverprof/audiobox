import React from 'react';
import Create from '@pages/create';
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
	const { ready, authenticated } = useAuth();
	console.log(ready);

	if (!ready) return <></>;

	// [TODO] : redirecting doesn't work on production
	return (
		<Routes>
			<Route path="/" element={!authenticated ? <Home /> : <Navigate to="/create" />} />
			<Route path="/create" element={authenticated ? <Create /> : <Navigate to="/" />} />
		</Routes>
	);
};

export default App;
