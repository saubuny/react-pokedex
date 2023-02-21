import { FC, useEffect } from 'react';
import pokeball from '../assets/pokeball.png';

const Navbar: FC = () => {
	// useEffect(() => {

	// }, [])

	return (
		<>
			<div className="flex items-center justify-between drop-shadow w-full bg-nord-white dark:bg-onedark-dark h-12 p-2 fixed">
				<div id="left" className="flex items-center">
					<img src={pokeball} className="object-contain h-10" />
					<p className="dark:text-nord-white text-xl">Pokedex</p>
				</div>
				<div id="right">
					<nav className="flex gap-1 dark:text-nord-white">
						<a href="#" target="_blank" rel="noopener noreferrer">
							test
						</a>
						<a href="#" target="_blank" rel="noopener noreferrer">
							test
						</a>
						<a href="#" target="_blank" rel="noopener noreferrer">
							test
						</a>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Navbar;
