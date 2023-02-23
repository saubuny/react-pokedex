import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Home from './routes/Home';
import PokemonCards from './routes/PokemonCards';
import PokemonInfo from './routes/PokemonInfo';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'home',
				element: <Home />,
			},
			{
				path: 'pokemon',
				element: <PokemonCards />,
			},
			{
				path: 'pokemon/:id',
				element: <PokemonInfo />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
