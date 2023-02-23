import { FC } from 'react';
import { useParams } from 'react-router-dom';

// I dont know why i have to use a type alias here instead of an interface
type PokemonInfoParams = {
	id: string;
};

const PokemonInfo: FC = () => {
	// Get ID from useParams
	const { id } = useParams<PokemonInfoParams>();
	console.log(id);
	return <p>{id}</p>;
};

export default PokemonInfo;
