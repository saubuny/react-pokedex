import { FC, useEffect, useState } from 'react';
import { MainClient, Pokemon } from 'pokenode-ts';

// Apply styles to type name
const typeBg = (type: string | undefined): string => {
	switch (type) {
		case 'normal':
			return 'bg-[#a8a878]';
		case 'fire':
			return 'bg-[#f08030]';
		case 'water':
			return 'bg-[#6890f0]';
		case 'grass':
			return 'bg-[#78c850]';
		case 'electric':
			return 'bg-[#f8d030]';
		case 'ice':
			return 'bg-[#98d8d8]';
		case 'fighting':
			return 'bg-[#c03028]';
		case 'poison':
			return 'bg-[#a040a0]';
		case 'ground':
			return 'bg-[#e0c068]';
		case 'flying':
			return 'bg-[#a890f0]';
		case 'psychic':
			return 'bg-[#f85888]';
		case 'bug':
			return 'bg-[#a8b820]';
		case 'rock':
			return 'bg-[#b8a038]';
		case 'ghost':
			return 'bg-[#705898]';
		case 'dark':
			return 'bg-[#705848]';
		case 'dragon':
			return 'bg-[#7038f8]';
		case 'steel':
			return 'bg-[#b8b8d0]';
		case 'fairy':
			return 'bg-[#ee99ac]';
		case '???':
			return 'bg-[#68a090]';
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
