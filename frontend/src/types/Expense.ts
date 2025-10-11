import type { Identifiable } from './Core';

export interface ExpenseInput {
  description: string;
  payer: string;
  amount: number;
  date: string;
}

export interface PagesProps {
  setCurrentPage: (page: string) => void;
}

export interface Expense extends ExpenseInput, Identifiable {}