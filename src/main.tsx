import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/Root';
import './index.css';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Home from './routes/Home';
import PokemonList from './routes/Pokemon';

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
				path: 'pokemon',
				element: <PokemonList IDList={[1, 2, 3, 4]} />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
