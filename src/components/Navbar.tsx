import { FC } from 'react';
import { Link } from 'react-router-dom';
import pokeball from '../assets/pokeball.png';

interface NavbarProps {
	scroll: number;
}

const Navbar: FC<NavbarProps> = ({ scroll }) => {
	return (
		<>
			<div
				className={
					'flex items-center justify-between w-full bg-nord-white dark:bg-onedark-dark dark:border-b dark:border-b-onedark-gutter-gray p-2 z-10 fixed transition-all duration-300 ' +
					(scroll > 0 ? 'h-12 drop-shadow' : 'h-16')
				}
			>
				<div id="left" className="flex items-center">
					<img src={pokeball} className="object-contain h-10 mr-2" />
					<p className="dark:text-nord-white text-xl">Pokedex</p>
				</div>
				<div id="right">
					<nav className="flex gap-1">
						<Link
							to={''}
							className="dark:text-nord-white hover:bg-slate-200 dark:hover:bg-onedark-gutter-gray/[0.2] p-1 rounded"
						>
							Home
						</Link>
						<Link
							to={'pokemon'}
							className="dark:text-nord-white hover:bg-slate-200 dark:hover:bg-onedark-gutter-gray/[0.2] p-1 rounded"
						>
							Pokemon
						</Link>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Navbar;
