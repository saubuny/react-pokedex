import { FC } from 'react';
import pokeball from '../assets/pokeball.png';

const Navbar: FC = () => {
	return (
		<>
			<div className="bg-nord-white shadow dark:bg-onedark-dark h-12">
				<img src={pokeball} className="object-contain" />
			</div>
		</>
	);
};

export default Navbar;
