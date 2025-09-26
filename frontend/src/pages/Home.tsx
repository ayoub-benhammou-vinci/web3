import { type Expense } from "../types/Expense";
import ExpenseItem from "../components/ExpenseItem";
import { useEffect, useState } from "react";
import ExpenseAdd from "../components/ExpenseAdd";

const Home = () => {
  const host = import.meta.env.VITE_API_URL || 'http://unknown-api-url.com';
  const [expenseItems, setExpenseItems] = useState<Expense[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const sendApiRequestAndHandleError = async (method: string = 'GET', path: string, body?: unknown) => {
    try {
      const response = await fetch(`${host}/${path}`, {
        method: method,
        headers: body ? { 'Content-Type': 'application/json' } : {},
        body: body ? JSON.stringify(body) : null,
      });

      if (!response.ok) {
        throw new Error(`HTTP Error status: ${response.status}`)
      }

      return await response.json();
    } catch (err) {
      console.error("API request failed:", err);
      setError(err instanceof Error ? err.message : 'An error occured');
    }
  };

  const fetchExpenses = async () => {
    try {
      const data = await sendApiRequestAndHandleError('GET', 'expenses');
      setError(null);
      setExpenseItems(data);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (newExpense: Expense) => {
    await sendApiRequestAndHandleError('POST', 'expenses', newExpense);
    await fetchExpenses();
  };

  const resetData = async () => {
    await sendApiRequestAndHandleError('POST', 'expenses/reset');
    await fetchExpenses();
  }

  useEffect(() => {
    fetchExpenses();
  }, [])

  return (
    <>
    <h2>Mes dépenses</h2>
    {loading && <div>Loading...</div>}
    {error && <div>Error : {error}</div>}
      {expenseItems.map((item) => {
        return (
          <>
            <ExpenseItem expense={item}></ExpenseItem>
            --------------------------------------------
          </>
        );
      })}
      <br/><ExpenseAdd handleAdd={handleAdd}></ExpenseAdd>
      <br/><button onClick={resetData}>Reset</button>
    </>
  );
};

export default Home;
