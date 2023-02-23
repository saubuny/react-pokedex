import { FC } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage: FC = () => {
	const error = useRouteError();
	console.error(error);

	if (isRouteErrorResponse(error)) {
		return (
			<div id="error-page">
				<p>Error</p>
				<p>
					{error.status} {error.statusText}
				</p>
			</div>
		);
	}

	return (
		<div id="error-page">
			<p>Error</p>
			<p>Unkown Error</p>
		</div>
	);
};

export default ErrorPage;
