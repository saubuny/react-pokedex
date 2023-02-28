import { MainClient, Pokemon } from "pokenode-ts";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// I dont know why i have to use a type alias here instead of an interface
type PokemonInfoParams = {
  id: string;
};

const PokemonInfo: FC = () => {
  // Get ID from useParams
  const { id } = useParams<PokemonInfoParams>();

  // Repeated code :(
  const [poke, setPoke] = useState<Pokemon>();

  useEffect(() => {
    const pokeByid = async (id: number) => {
      const api = new MainClient();
      await api.pokemon
        .getPokemonById(id)
        .then((data) => setPoke(data))
        .catch((err) => {
          console.log(err);
        });
    };

    pokeByid(id as unknown as number);
  }, []);

  return (
    <div>
      <p> {poke?.name}</p>
    </div>
  );
};

export default PokemonInfo;
