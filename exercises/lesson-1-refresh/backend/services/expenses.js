const fs = require("fs");
const path = require('path');

const EXPENSES_FILE_PATH = path.join(__dirname, '../data/expenses.json');

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

module.exports = { getAllExpenses, addExpense };