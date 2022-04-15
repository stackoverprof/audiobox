import React from 'react';
import CreatePlaylist from '@pages/create-playlist';
import Home from '@pages/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@core/style/tailwind.css';
import '@core/style/typefaces.css';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create-playlist" element={<CreatePlaylist />} />
			</Routes>
		</Router>
	);
};

export default App;
