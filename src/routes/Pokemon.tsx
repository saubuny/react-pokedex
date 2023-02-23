import { FC } from 'react';
import PokeCard from '../components/PokeCard';

interface PokemonListProps {
	IDList: number[];
}

const PokemonList: FC<PokemonListProps> = ({ IDList }) => {
	return (
		<>
			<div className="m-4 grid gap-4 justify-items-center sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
				{IDList.map((ID) => (
					<PokeCard ID={ID} key={ID} />
				))}
			</div>
		</>
	);
};

export default PokemonList;
