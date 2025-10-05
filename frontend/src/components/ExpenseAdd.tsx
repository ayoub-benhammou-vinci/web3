import { useEffect, useState } from "react";

type ExpenseAddProps = {
  handleAdd: (expense: ExpenseAdd) => void;
};

interface ExpenseAdd {
  payer: string;
  amount: number;
  description: string;
  date: string;
}

const ExpenseAdd = ({ handleAdd }: ExpenseAddProps) => {
  const [payer, setPayer] = useState<string>("Bob");
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    setPayer("Bob");
    setAmount(0);
    setDescription("");
    setDate("");
    setErrors([]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description) setErrors([...errors, "Description cannot be empty"]);
    if (!amount || amount < 0)
      setErrors([...errors, "Amount cannot be negative or empty"]);
    if (!payer) setErrors([...errors, "Payer cannot be empty"]);
    if (!date) setErrors([...errors, "Date cannot be empty"]);

    if (errors.length != 0) {
      setErrors([]);
      return;
    }

    const expense: ExpenseAdd = {
      payer,
      amount,
      description,
      date: new Date(date).toISOString(),
    };

    handleAdd(expense);
    setPayer("Bob");
    setAmount(0);
    setDescription("");
  };

  return (
    <>
      <h2>Add expense form</h2>
      {errors.length > 0 && errors.map((err) => <p>{err}</p>)}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <select value={payer} onChange={(e) => setPayer(e.target.value)}>
          <option value="Bob">Bob</option>
          <option value="Alice">Alice</option>
        </select>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          placeholder="Amount"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date (JJ-MM-YYYY)"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default ExpenseAdd;
