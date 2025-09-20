import { type Expense } from "../types/Expense";
import ExpenseItem from "../components/ExpenseItem";
import { useState } from "react";
import ExpenseAdd from "../components/ExpenseAdd";

const Home = () => {
  const [expenseItems, setExpenseItems] = useState<Expense[]>([
    {
      id: "1",
      date: "2025",
      description: "Nintendo Switch",
      payer: "Ayoub",
      amount: 100,
    },
    {
      id: "2",
      date: "2023",
      description: "XBOX",
      payer: "Abdel",
      amount: 300,
    },
    {
      id: "3",
      date: "2021",
      description: "PS5",
      payer: "Ali-Reda",
      amount: 50,
    },
  ]);

  const handleAdd = (newExpense: Expense) => {
    const newItems = [...expenseItems, newExpense];
    setExpenseItems(newItems);
  };

  return (
    <>
      {expenseItems.map((item) => {
        return (
          <>
            <ExpenseItem expense={item}></ExpenseItem>
            --------------------------------------------
          </>
        );
      })}
      <br></br>
      <ExpenseAdd handleAdd={handleAdd}></ExpenseAdd>
    </>
  );
};

export default Home;
