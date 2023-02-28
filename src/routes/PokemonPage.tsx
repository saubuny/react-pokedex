import { FC, useEffect, useState } from "react";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";
import { CardType } from "../extra/CardType";

const PER_PAGE = 20;

const PokemonPage: FC = () => {
  // Pagination in state
  const [page, setPage] = useState<number>(1);
  const [ids, setIds] = useState<number[]>([1]);

  // Use a seperate form component to change pagination, send it a handler function
  const changePage = (page: number) => {
    // Page limits
    if (page < 1) return;
    if (page > 10000) return; // TODO: Add real limit for pagination

    // Update displayed pokemon cards
    setPage(page);
    const newIds = [];
    for (let i = page * PER_PAGE - (PER_PAGE - 1); i <= page * PER_PAGE; i++)
      newIds.push(i);
    setIds(newIds);
  };

  // We need to be able to see pokemon without having to change the page first
  useEffect(() => changePage(1), []);

  // Debugging
  useEffect(() => console.log(ids), [ids]);
  useEffect(() => console.log(page), [page]);

  return (
    <>
      <CardList type={CardType.POKECARD} idList={ids} />
      <Pagination changePage={changePage} page={page} />
    </>
  );
};

export default PokemonPage;
