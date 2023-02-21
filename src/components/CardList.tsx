import { FC } from 'react';
import PokeCard from './PokeCard';

interface CardListProps {
	IDList: number[];
}

const CardList: FC<CardListProps> = ({ IDList }) => {
	return (
		<>
			<div className="m-4 grid gap-4 justify-items-center sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
				{IDList.map((ID) => (
					<PokeCard ID={ID} />
				))}
			</div>
		</>
	);
};

export default CardList;
