import { useState, FC } from 'react';
import CardList from './components/CardList';

const App: FC = () => {
	const [count, setCount] = useState<number>(0);
	const nums: number[] = [];
	for (let i = 1; i < 1000; i++) {
		nums[i] = i;
	}

	return (
		<>
			<CardList IDList={nums} />
		</>
	);
};

export default App;
