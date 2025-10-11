import { useContext } from "react";
import { PageContext } from "../App";
import { useForm } from "react-hook-form";
import type { ExpenseInput } from "../types/Expense";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const { sendApiRequestAndHandleError } = useContext(PageContext);

  const navigate = useNavigate();

  const expenseSchema = z.object({
    payer: z.enum(["Bob", "Alice"], { message: "Payer must be Alice or Bob" }),
    amount: z.number().positive({ message: "Amount must be positive" }),
    description: z
      .string()
      .max(200, { message: "Description max length is 200" }),
    date: z.string().nonempty({ message: "Date is required" }),
  });

  type ExpenseFormData = z.infer<typeof expenseSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseSchema),
  });

  const onSubmit = async ({
    payer,
    amount,
    description,
    date,
  }: ExpenseInput) => {
    const expense: ExpenseInput = {
      payer,
      amount,
      description,
      date: new Date(date).toISOString(),
    };
    await sendApiRequestAndHandleError("POST", "expenses", expense);
    navigate("/list");
  };

  const resetData = async () => {
    await sendApiRequestAndHandleError("POST", "expenses/reset");
    navigate("/list");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <label>
          Description :
          <input
            {...register("description")}
            placeholder="Description"
            style={{ width: "400px" }}
          />
          {errors.description && (
            <span style={{ color: "red" }}>{errors.description.message}</span>
          )}
        </label>

        <label>
          Selection :
          <select {...register("payer")}>
            <option value="Bob">Bob</option>
            <option value="Alice">Alice</option>
          </select>
          {errors.payer && (
            <span style={{ color: "red" }}>{errors.payer.message}</span>
          )}
        </label>

        <label>
          Amount :
          <input
            type="number"
            {...register("amount", { valueAsNumber: true })}
            placeholder="Amount"
          />
          {errors.amount && (
            <span style={{ color: "red" }}>{errors.amount.message}</span>
          )}
        </label>

        <label>
          Date :
          <input type="date" {...register("date")} placeholder="Date" />
          {errors.date && (
            <span style={{ color: "red" }}>{errors.date.message}</span>
          )}
        </label>
        <button type="submit">Add</button>
      </form>

      <button onClick={resetData} style={{ marginTop: "12px" }}>
        Reset
      </button>
    </>
  );
};
