import { FC } from "react";
import PokeCard from "../components/PokeCard";
import { CardType } from "../extra/CardType";

interface CardListProps {
  type: CardType;
  idList: number[];
}

// TODO: Change idList to the current page and do the math here
const CardList: FC<CardListProps> = ({ type, idList }) => {
  return (
    <>
      <div className="m-4 grid gap-4 justify-items-center sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {type === CardType.POKECARD && (
          idList.map((id) => <PokeCard id={id} key={id} />)
        )}
      </div>
    </>
  );
};

export default CardList;
