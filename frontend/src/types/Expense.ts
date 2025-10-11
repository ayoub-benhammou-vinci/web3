import type { Identifiable } from './Core';

export interface ExpenseInput {
  description: string;
  payer: string;
  amount: number;
  date: string;
}

export interface Expense extends ExpenseInput, Identifiable {}