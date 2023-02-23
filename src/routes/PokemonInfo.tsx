import { FC } from 'react';

interface PokemonInfoProps {
	ID: number;
}

const PokemonInfo: FC<PokemonInfoProps> = ({ ID }) => {
	return <p>{ID}</p>;
};

export default PokemonInfo;
