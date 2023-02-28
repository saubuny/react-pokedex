import { FC, useEffect, useState } from "react";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";
import { CardType } from "../extra/CardType";

// TODO: move the id list from page math to the cardlist itself, so it'd take pages instead of an idList
const PER_PAGE = 100;
const MAX_POKE_ID = 1008;

const PokemonPage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [ids, setIds] = useState<number[]>([1]);

  const changePage = (page: number) => {
    if (page < 1) return;
    if (page > 10000) return; // TODO: Add real limit for pagination

    setPage(page);
    const newIds = [];
    for (let i = page * PER_PAGE - (PER_PAGE - 1); i <= page * PER_PAGE; i++)
      newIds.push(i);
    setIds(newIds);
  };

  // We need to be able to see pokemon without having to change the page first
  useEffect(() => changePage(10), []);

  // TODO: PLEASE FIND A WAY TO FIND MAX 
  useEffect(() => {
    console.log(page);
    console.log((ids[ids.length -1 ] % PER_PAGE) );
  },[page])

  return (
    <>
      <CardList type={CardType.POKECARD} idList={ids} />
      <Pagination changePage={changePage} page={page} />
    </>
  );
};

export default PokemonPage;
