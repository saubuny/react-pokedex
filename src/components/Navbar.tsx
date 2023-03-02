import { FC } from "react";
import { Link } from "react-router-dom";
import pokeball from "../assets/pokeball.png";

interface NavbarProps {
  scroll: number;
  changeDarkMode: () => void;
}

const Navbar: FC<NavbarProps> = ({ scroll, changeDarkMode }) => {
  return (
    <>
      <div
        className={
          "flex items-center justify-between w-full bg-nord-white dark:bg-onedark-dark dark:border-b dark:border-b-onedark-gutter-gray p-2 z-10 fixed transition-height duration-300 " +
          (scroll > 0 ? "h-12 drop-shadow" : "h-16")
        }
      >
        <div id="left" className="flex items-center">
          <img src={pokeball} className="object-contain h-10 mr-2" />
          <p className="dark:text-nord-white text-xl">Pokedex</p>
        </div>
        <div id="right">
          <nav className="flex gap-1 items-center">
            <Link
              to={"/"}
              className="dark:text-nord-white hover:bg-nord-white-2 dark:hover:bg-onedark-gutter-gray/[0.2] p-1 rounded"
            >
              Home
            </Link>
            <Link
              to={"/pokemon/1"}
              className="dark:text-nord-white hover:bg-nord-white-2 dark:hover:bg-onedark-gutter-gray/[0.2] p-1 rounded"
            >
              Pokemon
            </Link>
            <button
              className="dark:text-nord-white hover:bg-nord-white-2 dark:hover:bg-onedark-gutter-gray/[0.2] p-1 rounded"
              onClick={() => changeDarkMode()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
