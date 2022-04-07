import React from 'react';
import Home from 'src/pages/home';
import CreatePlaylist from 'src/pages/create-playlist';
import { useAuth } from 'src/core/redux/reducer/auth';
import useSession from 'src/core/hooks/useSession';
import 'src/core/style/tailwind.css';
import 'src/core/style/typefaces.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
	// AUTH STATUS
	const { authenticated } = useAuth();

	// CUSTOM HOOK FOR AUTHENTICATION WITH TOKEN
	useSession();

	return (
		<div className="flex-sc col w-full">
			<Router>
				<Switch>
					<Route path="/" exact>
						{!authenticated ? <Home /> : <Redirect to="/create-playlist" />}
					</Route>
					<Route path="/create-playlist" exact>
						{authenticated ? <CreatePlaylist /> : <Redirect to="/" />}
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;

