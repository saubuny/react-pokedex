import { FC } from 'react';
import pokeball from '../assets/pokeball.png';

interface NavbarProps {
	scroll: number;
}

const Navbar: FC<NavbarProps> = ({ scroll }) => {
	return (
		<>
			<div
				className={
					'flex items-center justify-between w-full bg-nord-white dark:bg-onedark-dark p-2 z-10 sticky top-0 ' +
					(scroll > 0 ? 'h-12 drop-shadow' : 'h-16')
				}
			>
				<div id="left" className="flex items-center">
					<img src={pokeball} className="object-contain h-10 mr-2" />
					<p className="dark:text-nord-white text-xl">Pokedex {scroll}</p>
				</div>
				<div id="right">
					<nav className="flex gap-1">
						<a
							href="#"
							className="dark:text-nord-white hover:bg-slate-200 p-1 rounded"
							target="_blank"
							rel="noopener noreferrer"
						>
							Home
						</a>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Navbar;
