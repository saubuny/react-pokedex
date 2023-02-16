import { useState, FC } from 'react';
import PokeCard from './components/PokeCard';

const App: FC = () => {
	const [count, setCount] = useState<number>(0);
	const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<>
			{nums.map((c) => (
				<PokeCard key={c} ID={c} />
			))}
		</>
	);
};

export default App;
