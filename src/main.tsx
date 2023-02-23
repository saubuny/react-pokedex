import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/Root';
import './index.css';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import CardList from './routes/CardList';
import Home from './routes/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'home',
				element: <Home />,
			},
			{
				path: 'cards',
				element: <CardList IDList={[1, 2, 3, 4]} />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
