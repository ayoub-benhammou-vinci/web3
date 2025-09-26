const fs = require("fs");
const path = require('path');

const EXPENSES_FILE_PATH = path.join(__dirname, '../data/expenses.json');
const EXPENSES_DEFAULT = path.join(__dirname, '../data/expenses.init.json');

const getAllExpenses = () => {
    const data = fs.readFileSync(EXPENSES_FILE_PATH, 'utf8');
    return JSON.parse(data);
}

const addExpense = (expense) => {
    const expenses = getAllExpenses();
    expenses.push(expense);

    const updatedExpenses = JSON.stringify(expenses, null, 2);
    fs.writeFileSync(EXPENSES_FILE_PATH, updatedExpenses);
    return JSON.parse(updatedExpenses);
}

const resetExpenses = () => {
    const data = fs.readFileSync(EXPENSES_DEFAULT, 'utf-8');
    fs.writeFileSync(EXPENSES_FILE_PATH, data);
    return JSON.parse(data);
}

module.exports = { getAllExpenses, addExpense, resetExpenses };