import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import store from './core/redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = document.getElementById('root');

if (Root) {
	ReactDOM.createRoot(Root).render(
		<React.StrictMode>
			<Helmet defaultTitle="Audiobox" titleTemplate="%s — Audiobox">
				<meta charSet="utf-8" />
			</Helmet>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
			<ToastContainer position="bottom-right" autoClose={5000} pauseOnHover theme="dark" />
		</React.StrictMode>
	);
}
