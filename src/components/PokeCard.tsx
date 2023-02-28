import { FC, useEffect, useState } from "react";
import { Pokemon, PokemonClient } from "pokenode-ts";
import { typeBg } from "../extra/typeBg";
import { capitalize } from "../extra/capitalize";
import { Link } from "react-router-dom";

interface PokeCardProps {
  id: number;
}

// Display a Pokemon's info given its id
const PokeCard: FC<PokeCardProps> = ({ id }) => {
  const [poke, setPoke] = useState<Pokemon>();

  useEffect(() => {
    const pokeById = async (id: number) => {
      const pokeClient = new PokemonClient();
      await pokeClient
        .getPokemonById(id)
        .then((data) => {
          setPoke(data);
        })
        .catch((err) => console.error(err));
    };

    pokeById(id);
  }, []);

  return (
    <>
      <div className="hover:-translate-y-1 transition-all shadow-md border dark:border-onedark-gutter-gray dark:bg-onedark-dark rounded p-2 w-full flex flex-col">
        <Link to={`${id}`} className="flex justify-center">
          <img
            className="cursor-pointer object-contain h-24 m-4"
            src={
              poke?.sprites.versions["generation-v"]["black-white"].animated
                .front_default || (poke?.sprites.front_default as string)
            }
          />{" "}
        </Link>
        <div className="h-px bg-nord-white dark:bg-onedark-gutter-gray m-1"></div>
        <div className="flex flex-row items-center justify-between">
          <h1 className="dark:text-nord-white text-lg">
            {capitalize(poke?.name || "loading")}
          </h1>
          <p className="text-xs text-gray-400">#{poke?.id}</p>
        </div>
        <div className="flex gap-1">
          {poke?.types.map((t) => {
            return (
              <span
                className={`cursor-pointer grow text-center text-sm text-nord-white p-1 rounded ${typeBg(
                  t.type.name
                )}`}
                key={t.type.name}
              >
                {capitalize(t.type.name)}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PokeCard;
