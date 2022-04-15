import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import store from './core/redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const Root = document.getElementById('root');

if (Root) {
	ReactDOM.createRoot(Root).render(
		<React.StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</React.StrictMode>
	);
}
