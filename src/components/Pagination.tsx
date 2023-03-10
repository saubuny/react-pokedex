import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useEffect,
  useState,
} from "react";

interface PaginationProps {
  changePage: (page: number) => void;
  page: number;
}

// TODO: Better styling
const Pagination: FC<PaginationProps> = ({ changePage, page }) => {
  const [inputPage, setInputPage] = useState<string>(page.toString());

  // So that the input value changes when the buttons are used to navigate
  useEffect(() => setInputPage(page.toString()), [page]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget.value.length > 2) return;
    setInputPage(e.currentTarget.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    let newPage = Number(inputPage);
    if (Number.isNaN(newPage)) return;
    changePage(newPage);
  };

  const handleClick = (newPage: number) => {
    changePage(newPage);
  };

  return (
    <>
      <div className="flex justify-center gap-2 m-4">
        <button
          className="dark:text-nord-white dark:bg-onedark-gutter-gray/[0.2] p-2 rounded text-lg shadow-md border dark:border-onedark-gutter-gray active:translate-y-0.5 transition-transform duration-75"
          onClick={() => handleClick(page - 1)}
        >
          {"<-"}
        </button>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            className="dark:text-nord-white bg-inherit dark:bg-onedark-gutter-gray/[0.2] p-2 rounded text-lg w-10 shadow-md border dark:border-onedark-gutter-gray text-center outline-none "
            onChange={handleChange}
            value={inputPage}
          />
          <button
            type="submit"
            className="dark:text-nord-white dark:bg-onedark-gutter-gray/[0.2] p-2 rounded text-lg shadow-md border dark:border-onedark-gutter-gray active:translate-y-0.5 transition-transform duration-75"
          >
            Go
          </button>
        </form>
        <button
          className="dark:text-nord-white dark:bg-onedark-gutter-gray/[0.2] p-2 rounded text-lg shadow-md border dark:border-onedark-gutter-gray active:translate-y-0.5 transition-transform duration-75"
          onClick={() => handleClick(page + 1)}
        >
          {"->"}
        </button>
      </div>
    </>
  );
};

export default Pagination;
