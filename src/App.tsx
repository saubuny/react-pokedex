import { useState, FC } from 'react';
import CardList from './components/CardList';
import Navbar from './components/Navbar';

const App: FC = () => {
	const [count, setCount] = useState<number>(0);
	const nums: number[] = [];
	for (let i = 1; i < 152; i++) {
		nums[i] = i;
	}

	return (
		<>
			{/* Put dark in here to change theme */}
			<div className="dark">
				<Navbar />
				<div className="pt-12 bg-nord-white dark:bg-onedark-darker">
					<CardList IDList={nums} />
				</div>
			</div>
		</>
	);
};

export default App;
