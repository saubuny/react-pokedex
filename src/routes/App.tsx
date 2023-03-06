import { useState, FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const App: FC = () => {
  const [scroll, setScroll] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const changeDarkMode = () => {
    localStorage.setItem("darkMode", `${darkMode}`);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Toggle Dark Mode
  useEffect(() => {
    const lsDark = localStorage.getItem("darkMode");
    if (!lsDark) {
      localStorage.setItem("darkMode", `${darkMode}`);
      return;
    }

    document.documentElement.className =
      lsDark === "true" ? "dark bg-onedark-darker" : "bg-nord-white";
  }, [darkMode]);

  return (
    <>
      <div>
        <Navbar scroll={scroll} changeDarkMode={changeDarkMode} />
        <div className="pt-16 bg-nord-white dark:bg-onedark-darker">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
