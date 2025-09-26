import { type Expense } from "../types/Expense";

interface ExpenseProps {
  expense: Expense;
}

const ExpenseItem = ({ expense } : ExpenseProps) => {
  return (
    <>
      <div>
        <p>ID : {expense.id} </p>
        <p>Date : {expense.date} </p>
        <p>Description : {expense.description} </p>
        <p>Payer : {expense.payer} </p>
        <p>Amount : {expense.amount} </p>
      </div>
    </>
  );
};

export default ExpenseItem;
