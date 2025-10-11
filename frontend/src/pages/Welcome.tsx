import type { PagesProps } from "../types/Expense";

export const Welcome = ({ setCurrentPage }: PagesProps) => {
  return (
    <>
      <p>Welcome !</p>
      <button onClick={() => setCurrentPage("Add")}>Add new expenses </button>
      <button onClick={() => setCurrentPage("List")}>View all expenses</button>
    </>
  );
};
