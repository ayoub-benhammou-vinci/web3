import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { ExpenseInput } from "../types/Expense";

type ExpenseAddProps = {
  handleAdd: (expense: ExpenseInput) => void;
};
const ExpenseAdd = ({ handleAdd }: ExpenseAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseInput>();

  useEffect(() => {}, []);

  const onSubmit = ({ payer, amount, description, date }: ExpenseInput) => {
    const expense: ExpenseInput = {
      payer,
      amount,
      description,
      date: new Date(date).toISOString(),
    };
    handleAdd(expense);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <label>
          Description
          <input
            {...register("description", { required: true })}
            placeholder="Description"
          />
          {errors.description && <span>Description field is required</span>}
        </label>

        <select {...register("payer", {required: true})}>
          <option value="Bob">Bob</option>
          <option value="Alice">Alice</option>
        </select>
        {errors.payer && <span>Payer is required</span>}

        <label>
          Amount
          <input
            type="number"
            {...register("amount", { required: true })}
            placeholder="Amount"
          />
          {errors.amount && <span> Amount field is required</span>}
        </label>

        <label>
          Date
          <input
            type="date"
            {...register("date", { required: true })}
            placeholder="Date"
          />
          {errors.date && <span>Date field is required</span>}
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default ExpenseAdd;
