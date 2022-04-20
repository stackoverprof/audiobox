import React from 'react';
import App from './App';
import AudioPlayer from '@components/_shared/AudioPlayer';
import ReactDOM from 'react-dom/client';
import store from './core/redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface MainConfig {
	testMode?: boolean;
}

const Main = ({ testMode = false }: MainConfig) => (
	<React.StrictMode>
		<Helmet defaultTitle="Audiobox" titleTemplate="%s — Audiobox">
			<meta charSet="utf-8" />
		</Helmet>
		<Provider store={store({ testMode })}>
			<SWRConfig>
				<BrowserRouter>
					<App />
				</BrowserRouter>
				<AudioPlayer />
			</SWRConfig>
		</Provider>
		<ToastContainer position="bottom-right" autoClose={5000} pauseOnHover theme="dark" />
	</React.StrictMode>
);

// INITIALIZE REACT-APP to Root Div
const Root = document.getElementById('root');
if (Root) ReactDOM.createRoot(Root).render(<Main />);

export default Main;
