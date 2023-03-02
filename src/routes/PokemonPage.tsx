import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";
import { CardType } from "../extra/CardType";

// TODO: Show us an error when we try to go to a nonexisting page (less than 1 or greater than max page) instead of just loading page one or whatever we do right now

// TODO: move the id list from page math to the cardlist itself, so it'd take pages instead of an idList
const PER_PAGE = 24;
const MAX_POKE_ID = 1008; // TODO: Perhaps find a way to get this info from the API ?

type PokemonPageParams = {
  page: string;
};

const PokemonPage: FC = () => {
  const navigate = useNavigate();
  const { page } = useParams<PokemonPageParams>();
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

  // Update ID list on page change, remember that this logic is going to be moved to the CardList component
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
      <CardList type={CardType.POKECARD} idList={ids} />
      <Pagination changePage={changePageNumber} page={pageNumber} />
    </>
  );
};

export default PokemonPage;
