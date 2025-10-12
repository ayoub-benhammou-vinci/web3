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
      <h2 className="text-2xl text-blue-900 font-semibold text-center mt-6">
        Add Expense Form
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 p-3 bg-white shadow-md rounded-md m-10 max-w-md mx-auto items-center text-center"
      >
        <label className="flex flex-col w-full">
          <span className="mb-1 text-gray-700 font-medium">Description :</span>
          <input
            {...register("description")}
            placeholder="Description"
            className="border border-gray-300 rounded-md p-2 text-center"
          />
          {errors.description && (
            <span className="text-red-600 text-sm mt-1">
              {errors.description.message}
            </span>
          )}
        </label>

        <label className="flex flex-col w-full">
          <span className="mb-1 text-gray-700 font-medium">Selection :</span>
          <select
            {...register("payer")}
            className="border border-gray-300 rounded-md p-2 text-center"
          >
            <option value="Bob">Bob</option>
            <option value="Alice">Alice</option>
          </select>
          {errors.payer && (
            <span className="text-red-600 text-sm mt-1">
              {errors.payer.message}
            </span>
          )}
        </label>

        <label className="flex flex-col w-full">
          <span className="mb-1 text-gray-700 font-medium">Amount :</span>
          <input
            type="number"
            {...register("amount", { valueAsNumber: true })}
            placeholder="Amount"
            className="border border-gray-300 rounded-md p-2 text-center"
          />
          {errors.amount && (
            <span className="text-red-600 text-sm mt-1">
              {errors.amount.message}
            </span>
          )}
        </label>

        <label className="flex flex-col w-full">
          <span className="mb-1 text-gray-700 font-medium">Date :</span>
          <input
            type="date"
            {...register("date")}
            placeholder="Date"
            className="border border-gray-300 rounded-md p-2 text-center"
          />
          {errors.date && (
            <span className="text-red-600 text-sm mt-1">
              {errors.date.message}
            </span>
          )}
        </label>

        <div className="flex gap-4 justify-center w-full mt-4">
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition-colors"
          >
            Add
          </button>
          <button
            type="button"
            onClick={resetData}
            className="bg-slate-600 text-white px-6 py-2 rounded-md hover:bg-slate-700 transition-colors"
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
};
