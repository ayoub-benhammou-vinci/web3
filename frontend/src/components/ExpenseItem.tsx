import { type Expense } from "../types/Expense";

interface ExpenseProps {
  expense: Expense;
}

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  marginBottom: "16px",
  backgroundColor: "#fff",
  maxWidth: "360px",
};

const labelStyle = {
  fontWeight: "bold",
  color: "#555",
  marginRight: "6px",
};

const ExpenseItem = ({ expense }: ExpenseProps) => {
  return (
    <div style={cardStyle}>
      <p>
        <span style={labelStyle}>ID :</span> {expense.id}{" "}
      </p>
      <p>
        <span style={labelStyle}>Date :</span> {expense.date}{" "}
      </p>
      <p>
        <span style={labelStyle}>Description :</span> {expense.description}{" "}
      </p>
      <p>
        <span style={labelStyle}>Payer :</span> {expense.payer}{" "}
      </p>
      <p>
        <span style={labelStyle}>Amount :</span> {expense.amount}{" "}
      </p>
    </div>
  );
};

export default ExpenseItem;
