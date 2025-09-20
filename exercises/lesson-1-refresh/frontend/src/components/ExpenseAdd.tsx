import type { Expense } from "../types/Expense";

type ExpenseAddProps = {
  handleAdd: (expense: Expense) => void;
};

const ExpenseAdd = ({ handleAdd }: ExpenseAddProps) => {
  const onAdd = () => {
    const expense: Expense = {
      id: Date.now().toString(),
      payer: Math.random() % 2 ? "Alice" : "Bob",
      amount: Number((Math.random() * 100).toFixed(2)),
      description: "No show",
      date: Date.now().toString(),
    };
    handleAdd(expense);
  };

  return (
    <>
      <button onClick={onAdd}>Press Button</button>
    </>
  );
};

export default ExpenseAdd;
