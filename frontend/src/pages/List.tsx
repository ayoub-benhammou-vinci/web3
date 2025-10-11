import { useContext, useEffect, useState } from "react";
import { PageContext } from "../App";
import type { Expense } from "../types/Expense";
import ExpenseItem from "../components/ExpenseItem";

export const List = () => {
  
  const { sendApiRequestAndHandleError, error } = useContext(PageContext);
  const [expenseItems, setExpenseItems] = useState<Expense[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    marginBottom: "24px",
  };
  
  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const data = await sendApiRequestAndHandleError("GET", "expenses") as Expense[];
      console.log("DATA", data)
      setExpenseItems(data);
      setLoading(false);
    } catch (err) {
      console.error(err)
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);
  
  return (
    <>
      <h2>Mes dépenses</h2>
      {loading && <div>Loading...</div>}
      {error && <div>Error : {error}</div>}
      <div style={containerStyle}>
        {expenseItems.map((item) => (
          <ExpenseItem key={item.id} expense={item} />
        ))}
      </div>
    </>
  );
};
