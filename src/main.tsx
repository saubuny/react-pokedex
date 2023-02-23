import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/Root';
import './index.css';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Home from './routes/Home';
import PokemonCards from './routes/PokemonCards';
import PokemonInfo from './routes/PokemonInfo';

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
				element: <PokemonCards IDList={[1, 2, 3, 4]} />,
			},
			{
				path: 'pokemon/:id',
				element: <PokemonInfo ID={1} />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
