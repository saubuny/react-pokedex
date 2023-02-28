import { useState, FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const App: FC = () => {
  const [scroll, setScroll] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(false); // TODO: use context API for this

  const nums: number[] = [];
  for (let i = 1; i < 50; i++) {
    nums[i] = i;
  }

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Toggle Dark Mode
  useEffect(() => {
    document.documentElement.className = darkMode
      ? "dark bg-onedark-darker"
      : "bg-nord-white";
  }, [darkMode]);

  return (
    <>
      <div>
        <Navbar scroll={scroll} />
        <div className="pt-16 bg-nord-white dark:bg-onedark-darker">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;