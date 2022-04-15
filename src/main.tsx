import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';

const Root = document.getElementById('root');

if (Root) {
	ReactDOM.createRoot(Root).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}
