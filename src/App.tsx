import { useState, FC } from 'react';
import './App.css';
import PokeCard from './components/PokeCard';

const App: FC = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<div className="App">
			<PokeCard ID={1} />
		</div>
	);
};

export default App;
