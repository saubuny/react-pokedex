import { FC, useEffect, useState } from 'react';
import { MainClient, Pokemon } from 'pokenode-ts';

// Passed in from pagination
interface PokeCardProps {
	ID: number;
}

const PokeCard: FC<PokeCardProps> = ({ ID }) => {
	const [poke, setPoke] = useState<Pokemon>();

	useEffect(() => {
		const pokeByID = async (ID: number) => {
			const api = new MainClient();
			await api.pokemon
				.getPokemonById(ID)
				.then((data) => setPoke(data))
				.catch((err) => console.error(err));
		};

		pokeByID(ID);
	}, []);

	return (
		<>
			<p>Card</p>
			{poke?.name}
		</>
	);
};

export default PokeCard;
