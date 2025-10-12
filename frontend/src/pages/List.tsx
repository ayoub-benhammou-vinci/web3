import { useContext, useEffect, useState } from "react";
import { PageContext } from "../App";
import type { Expense } from "../types/Expense";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const List = () => {
  const { sendApiRequestAndHandleError, error } = useContext(PageContext);
  const [expenseItems, setExpenseItems] = useState<Expense[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const data = (await sendApiRequestAndHandleError(
        "GET",
        "expenses"
      )) as Expense[];
      console.log("DATA", data);
      setExpenseItems(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <>
      <h2 className="p-5 text-lg">Mes dépenses</h2>
      {loading && <div>Loading...</div>}
      {error && <div>Error : {error}</div>}

      <Table>
        <TableHeader>
          <TableRow className="bg-green-800 text-white text-center">
            <TableHead>ID</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Payer</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenseItems.map((expense, idx) => (
            <TableRow
              key={idx}
              className={idx % 2 === 0 ? "bg-green-50" : "bg-green-100"}
            >
              <TableCell className="font-semibold text-green-900">
                {expense.id}
              </TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell
                className={
                  expense.payer === "Bob"
                    ? "text-blue-700 font-bold"
                    : "text-pink-700 font-bold"
                }
              >
                {expense.payer}
              </TableCell>
              <TableCell className="text-green-700">
                {expense.amount} €
              </TableCell>
              <TableCell className="text-gray-600">{expense.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
