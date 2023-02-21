import { FC, useEffect, useState } from 'react';
import { MainClient, Pokemon } from 'pokenode-ts';
import { typeBg } from '../extra/typeBg';
import { capitalize } from '../extra/capitalize';

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
			<div className="shadow rounded p-2 w-60 flex flex-col cursor-pointer">
				<img
					className="object-contain h-24"
					src={
						poke?.sprites.versions['generation-v']['black-white'].animated.front_default ||
						(poke?.sprites.front_default as string)
					}
				/>
				<div className="h-px bg-gray-200 m-1"></div>
				<div className="flex flex-row items-center justify-between">
					<h1 className="text-lg">{capitalize(poke?.name || 'loading')}</h1>
					<p className="text-xs text-gray-400">#{poke?.id}</p>
				</div>
				<div className="flex gap-1">
					{poke?.types.map((t) => {
						return (
							<>
								<span
									className={`grow text-center text-sm text-white p-1 rounded ${typeBg(
										t.type.name
									)}`}
								>
									{capitalize(t.type.name)}
								</span>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default PokeCard;
