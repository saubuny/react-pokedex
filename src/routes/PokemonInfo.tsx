import { Pokemon, PokemonClient, PokemonSpecies } from "pokenode-ts";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { capitalize } from "../extra/capitalize";
import { MAX_POKE_ID } from "../extra/constants";
import useTypeColor from "../hooks/useTypeColor";

// I dont know why i have to use a type alias here instead of an interface
type PokemonInfoParams = {
  id: string;
};

// Break this UI into many components because thats how react works :)

const PokemonInfo: FC = () => {
  // Get ID from useParams
  const { id } = useParams<PokemonInfoParams>();
  const [poke, setPoke] = useState<Pokemon>();
  const [pokeSpecies, setPokeSpecies] = useState<PokemonSpecies>();

  useEffect(() => {
    if (typeof id === "undefined") return;
    const newId = Number(id);

    // For sprites and general information
    const pokeById = async (id: number) => {
      const pokeClient = new PokemonClient();
      await pokeClient
        .getPokemonById(id)
        .then((data) => {
          setPoke(data);
        })
        .catch((err) => console.error(err));
    };

    // For dex entry and others
    const speciesById = async (id: number) => {
      const pokeClient = new PokemonClient();
      await pokeClient
        .getPokemonSpeciesById(id)
        .then((data) => {
          setPokeSpecies(data);
        })
        .catch((err) => console.error(err));
    };

    // Valid pokemon id
    if (newId < 1) return;
    if (newId > Math.ceil(MAX_POKE_ID)) return;

    pokeById(newId);
    speciesById(newId);
  }, []);

  return (
    <>
      <div>
        {
          // Button to prev pokemon
          // Button to next pokemon
        }
      </div>
      <div className="flex flex-row items-center justify-center">
        <h1 className="dark:text-nord-white text-lg">
          {capitalize(poke?.name || "loading")}
        </h1>
        <p className="text-xs text-gray-400">#{poke?.id}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-around">
        <section>
          <img
            className="m-4 h-72"
            src={
              poke?.sprites.versions["generation-v"]["black-white"].animated
                .front_default || (poke?.sprites.front_default as string)
            }
          />
          <div className="flex gap-1">
            {poke?.types.map((t) => {
              return (
                <span
                  className={`cursor-pointer grow text-center text-sm text-nord-white p-1 rounded ${useTypeColor(
                    t.type.name
                  )}`}
                  key={t.type.name}
                >
                  {capitalize(t.type.name)}
                </span>
              );
            })}
          </div>
        </section>
        <section>
          <h1 className="dark:text-nord-white text-lg">
            {capitalize(
              pokeSpecies?.flavor_text_entries[0].flavor_text || "loading"
            )}
          </h1>
          {
            // Dex entry
            // Heigh Weight Gender Category Abilities
            // Weaknesses
          }
        </section>
      </div>
      <div>
        <section>
          {
            // Base Stats
          }
        </section>
        <section>
          {
            // Evolutions as Modified Cards
          }
        </section>
      </div>
    </>
  );
};

export default PokemonInfo;
