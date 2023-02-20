import { FC } from 'react';
import PokeCard from './PokeCard';

interface CardListProps {
	IDList: number[];
}

const CardList: FC<CardListProps> = ({ IDList }) => {
	return (
		<>
			{IDList.map((ID) => (
				<PokeCard ID={ID} />
			))}
		</>
	);
};

export default CardList;
