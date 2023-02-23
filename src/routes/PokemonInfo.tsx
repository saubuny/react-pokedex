import { FC } from 'react';
import { useParams } from 'react-router-dom';

const PokemonInfo: FC = () => {
	// Get ID from useParams
	const { ID } = useParams();
	console.log(ID);
	return <p>{ID}</p>;
};

export default PokemonInfo;
