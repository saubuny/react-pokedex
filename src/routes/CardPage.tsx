import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import { CardType } from "../extra/CardType";
import PokeCard from "../components/PokeCard";

// TODO: Show us an error when we try to go to a nonexisting page (less than 1 or greater than max page) instead of just loading page one or whatever we do right now

const PER_PAGE = 24;
const MAX_POKE_ID = 1008; // TODO: Perhaps find a way to get this info from the API ?

type CardPageParams = {
  page: string;
};

interface CardPageProps {
  type: CardType;
}

const CardPage: FC<CardPageProps> = ({ type }) => {
  const navigate = useNavigate();
  const { page } = useParams<CardPageParams>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [ids, setIds] = useState<number[]>([1]);

  // Move us to the page number specified in the params
  useEffect(() => changePageNumber(page), []);

  // Handle state changing properly
  const changePageNumber = (newPage: number | undefined | string) => {
    if (typeof newPage === "undefined") {
      return;
    }

    // This, temporarily, will just send us to page one if someone decides to go to pokemon/asdfasdf or something
    if (typeof newPage === "string") {
      newPage = Number(newPage);
      console.log(newPage);
      if (Number.isNaN(newPage)) return;
    }

    // Valid page
    if (newPage < 1) return;
    if (newPage > Math.ceil(MAX_POKE_ID / PER_PAGE)) return;

    // Move to new page and update URL
    setPageNumber(newPage);
    navigate(`/pokemon/${newPage}`);
  };

  useEffect(() => {
    const newIds = [];
    for (
      let i = pageNumber * PER_PAGE - (PER_PAGE - 1);
      i <= pageNumber * PER_PAGE;
      i++
    )
      if (i <= MAX_POKE_ID) newIds.push(i);
    setIds(newIds);
  }, [pageNumber]);

  return (
    <>
      <div className="m-4 grid gap-4 justify-items-center sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {type === CardType.POKECARD && (
          ids.map((id) => <PokeCard id={id} key={id} />)
        )}
      </div>
      <Pagination changePage={changePageNumber} page={pageNumber} />
    </>
  );
};

export default CardPage;
