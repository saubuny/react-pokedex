import { FC, useEffect, useState } from 'react';
import { MainClient, Pokemon } from 'pokenode-ts';

const capitalize = (str: string | undefined): string => {
	if (typeof str === 'undefined') return 'err';
	return str[0].toUpperCase().concat(str.slice(1));
};

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
			<div className="shadow p-2 w-60 h-60 flex flex-col cursor-pointer">
				<img
					className="object-contain"
					src={
						poke?.sprites.versions['generation-v']['black-white'].animated.front_default ||
						(poke?.sprites.front_default as string)
					}
				/>
				<div className="flex flex-row items-center justify-between">
					<h1 className="text-lg">{capitalize(poke?.name)}</h1>
					<p className="text-xs text-gray-400">#{poke?.id}</p>
				</div>
				<div>
					<p className="text-sm text-gray-600">{poke?.types.map((t) => t.type.name + ' ')}</p>
				</div>
			</div>
		</>
	);
};

export default PokeCard;
