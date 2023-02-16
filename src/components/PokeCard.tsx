import { FC, useEffect, useState } from 'react';
import { MainClient, Pokemon } from 'pokenode-ts';

// Passed in from pagination
interface PokeCardProps {
	ID: number;
}

// Display a Pokemon's info given its ID
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
			<div className="shadow p-2 w-60 h-60 flex flex-col">
				<div className="flex justify-between">
					<h1 className="text-lg">{poke?.name[0].toUpperCase().concat(poke?.name.slice(1))}</h1>
					<p className="text-sm text-gray-600">{poke?.id}</p>
				</div>
				<img
					className="object-contain"
					src={
						poke?.sprites.versions['generation-v']['black-white'].animated.front_default ||
						(poke?.sprites.front_default as string)
					}
					alt=""
				/>
				<div>
					<p className="text-sm text-gray-600">
						Abilities: {poke?.abilities.map((a) => a.ability.name + ' ')}
					</p>
					<p className="text-sm text-gray-600">
						Types: {poke?.types.map((t) => t.type.name + ' ')}
					</p>
				</div>
			</div>
		</>
	);
};

export default PokeCard;
