import { useContext } from "react";
import { PageContext } from "../App";

export const Welcome = () => {
  const { setCurrentPage } = useContext(PageContext);
  return (
    <>
      <p>Welcome !</p>
      <button onClick={() => setCurrentPage("Add")}>Add new expenses </button>
      <button onClick={() => setCurrentPage("List")}>View all expenses</button>
    </>
  );
};
