import { useState, FC } from 'react';
import CardList from './components/CardList';

const App: FC = () => {
	const [count, setCount] = useState<number>(0);
	const nums: number[] = [];
	for (let i = 1; i < 152; i++) {
		nums[i] = i;
	}

	return (
		<>
			<div className="dark">
				<div className="bg-nord-white dark:bg-onedark-darker">
					<CardList IDList={nums} />
				</div>
			</div>
		</>
	);
};

export default App;
