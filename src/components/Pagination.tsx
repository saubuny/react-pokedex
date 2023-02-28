import { ChangeEventHandler, FC, FormEvent, FormEventHandler, useEffect, useState } from "react";

interface PaginationProps {
  changePage: (page: number) => void;
  page: number;
}

// TODO: Rename this because its a button now and not a form
const Pagination: FC<PaginationProps> = ({ changePage, page }) => {
  const [inputPage, setInputPage] = useState<string>(page.toString());

  const buttonStyle =
    "dark:text-nord-white bg-slate-200 dark:bg-onedark-gutter-gray/[0.2] p-2 rounded text-lg";

  useEffect(() => setInputPage(page.toString()), [page])

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
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
        <button className={buttonStyle} onClick={() => handleClick(page - 1)}>
          {"<-"}
        </button>
        <form onSubmit={handleSubmit}>
          <input
            className={buttonStyle}
            onChange={handleChange}
            value={inputPage}
          />
          <button type="submit" className={buttonStyle}>
            Go
          </button>
        </form>
        <button className={buttonStyle} onClick={() => handleClick(page + 1)}>
          {"->"}
        </button>
      </div>
    </>
  );
};

export default Pagination;
