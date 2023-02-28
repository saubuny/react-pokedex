import { FC } from "react";

interface PageFormProps {
  changePage: (page: number) => void;
  page: number;
}

// TODO: Rename this because its a button now and not a form
const PageForm: FC<PageFormProps> = ({ changePage, page }) => {
  return (
    <>
     <div className="flex justify-center gap-1">
        <button className="dark:text-nord-white bg-slate-200 dark:bg-onedark-gutter-gray/[0.2] p-1 rounded" onClick={() => changePage(page + 1)}>Next Page</button>
        <button className="dark:text-nord-white bg-slate-200 dark:bg-onedark-gutter-gray/[0.2] p-1 rounded" onClick={() => changePage(page - 1)}>Last Page</button>
      </div> 
    </>
  );
};

export default PageForm;
