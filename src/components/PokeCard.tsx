import { FC, useEffect, useState } from 'react';
import { MainClient, Pokemon } from 'pokenode-ts';

// Apply styles to type name
const typeBg = (type: string | undefined): string => {
	switch (type) {
		case 'normal':
			return 'bg-stone-400';
		case 'fire':
			return 'bg-orange-500';
		case 'water':
			return 'bg-blue-400';
		case 'grass':
			return 'bg-green-500';
		case 'electric':
			return 'bg-yellow-300';
		case 'ice':
			return 'bg-cyan-200';
		case 'fighting':
			return 'bg-red-600';
		case 'poison':
			return 'bg-purple-500';
		case 'ground':
			return 'bg-yellow-500';
		case 'flying':
			return 'bg-indigo-300';
		case 'psychic':
			return 'bg-pink-500';
		case 'bug':
			return 'bg-lime-500';
		case 'rock':
			return 'bg-yellow-600';
		case 'ghost':
			return 'bg-violet-800';
		case 'dark':
			return 'bg-yellow-900';
		case 'dragon':
			return 'bg-indigo-700';
		case 'steel':
			return 'bg-slate-300';
		case 'fairy':
			return 'bg-pink-200';
		default:
			return '';
	}
};

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
					<h1 className="text-lg">{capitalize(poke?.name)}</h1>
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
