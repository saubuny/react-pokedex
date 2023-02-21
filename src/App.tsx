import { useState, FC, useEffect } from "react";
import CardList from "./components/CardList";
import Navbar from "./components/Navbar";

// Set dark mode

const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(false); // TODO: use context API for this

  const nums: number[] = [];
  for (let i = 1; i < 50; i++) {
    nums[i] = i;
  }

  useEffect(() => {
    document.documentElement.className = darkMode
      ? "dark bg-onedark-darker"
      : "bg-nord-white";
  }, [darkMode]);

  return (
    <>
      <div>
        <Navbar />
        <div className="pt-12 bg-nord-white dark:bg-onedark-darker">
          <CardList IDList={nums} />
        </div>
      </div>
    </>
  );
};

export default App;
