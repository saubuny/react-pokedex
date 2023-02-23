import { MainClient, Pokemon } from 'pokenode-ts';

interface getPokemonInfoParams {
	params: {
		ID: number;
	};
}

export default async ({ params }: getPokemonInfoParams) => {
	const pokeByID = async (ID: number) => {
		const api = new MainClient();
		await api.pokemon.getPokemonById(ID);
	};
	return pokeByID(params.ID);
};
