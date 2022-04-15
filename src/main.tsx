import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import store from './core/redux/store';
import { Provider } from 'react-redux';

const Root = document.getElementById('root');

if (Root) {
	ReactDOM.createRoot(Root).render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	);
}
