import { FC, useEffect, useState } from "react";
import CardList from "../components/CardList";
import PageForm from "../components/PageForm";
import { CardType } from "../extra/CardType";

const PER_PAGE = 20;

const Pokemon: FC = () => {
  // Pagination in state
  const [page, setPage] = useState<number>(0);

  // Temporary, this will be removed when pokemon are sent CardList instead of an idList
  const [ids, setIds] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8]);

  // Use a seperate form component to change pagination, send it a handler function
  const changePage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    console.log(page);
  }, [page]);

  // use this to fetch all pokemon
  // api.listPokemons(offset?: number, limit?: number)
  // card list renders all pokemon in list
  // limit  =  current page * PER_PAGE
  // offset = (current page * PER_PAGE) - PER_PAGE

  return (
    <>
      <CardList type={CardType.POKECARD} idList={ids} />
      {/* Put pagination form component here */}
      <PageForm changePage={changePage} page={page} />
    </>
  );
};

export default Pokemon;
