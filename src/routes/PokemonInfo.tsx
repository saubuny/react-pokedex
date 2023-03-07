import {
  Pokemon,
  PokemonClient,
  PokemonSpecies,
  FlavorText,
  NamedAPIResource,
} from "pokenode-ts";
import { FC, ReactElement, useEffect, useState } from "react";
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

// UI Inspo => https://pokemondb.net/pokedex/bulbasaur (i am not a UI designer)

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
    <div className="mx-10">
      <div className="flex flex-row items-center justify-center my-6">
        <h1 className="dark:text-nord-white text-5xl">
          {capitalize(poke?.name || "loading")}
        </h1>
      </div>
      <div>
        {
          // Button to prev pokemon
          // Button to next pokemon
        }
      </div>
      <div className="w-full border dark:border-onedark-dark"></div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
        <Card>
          <img
            className="m-4 h-56 object-contain"
            src={
              poke?.sprites.versions["generation-v"]["black-white"].animated
                .front_default || (poke?.sprites.front_default as string)
            }
          />
          <div className="flex gap-1 mb-4">
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
          <DexEntry pokeSpecies={pokeSpecies} />
        </Card>
        <Card>
          <h1 className="dark:text-nord-white text-3xl">Data</h1>
          {
            //
          }
        </Card>
        <Card>
          <section>
            {
              // Base Stats
            }
          </section>
        </Card>
        <Card>
          {
            // Dex entry
            // Heigh Weight Gender Category Abilities
            // Weaknesses
          }
        </Card>
      </div>
    </div>
  );
};

export default PokemonInfo;

interface DexEntryProps {
  pokeSpecies: PokemonSpecies | undefined;
}

// Export this
const DexEntry: FC<DexEntryProps> = ({ pokeSpecies }) => {
  if (typeof pokeSpecies === "undefined") return <>Loading...</>;
  const entry = pokeSpecies.flavor_text_entries.filter(
    (entry) => entry.language.name === "en"
  )[0].flavor_text;

  return (
    <>
      <blockquote className="text-gray-500 dark:text-onedark-white italic">
        "{entry}"
      </blockquote>
    </>
  );
};

// Export this
interface CardProps {
  children: ReactElement[] | ReactElement;
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="shadow-md border dark:border-onedark-gutter-gray dark:bg-onedark-dark dark:text-nord-white rounded p-2 w-full flex flex-col">
      {children}
    </div>
  );
};
