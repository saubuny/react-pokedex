import { FC } from 'react';
import PokeCard from '../components/PokeCard';

const PokemonCards: FC = () => {
	// Set up pagination here
	const idList = [1, 2, 3, 4];

	return (
		<>
			<div className="m-4 grid gap-4 justify-items-center sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
				{idList.map((id) => (
					<PokeCard id={id} key={id} />
				))}
			</div>
		</>
	);
};

export default PokemonCards;
