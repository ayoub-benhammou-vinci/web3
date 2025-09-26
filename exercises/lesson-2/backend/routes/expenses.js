const express = require('express')
const { getAllExpenses, addExpense, resetExpenses } = require('../services/expenses')
const router = express.Router();

router.get('/', (_req, res) => {
    try {
        const expenses = getAllExpenses();
        res.json(expenses);
    } catch (err) {
        console.error("Error 500 ReadFileSync");
        res.status(500);
    }
})

router.post('/', (req, res) => {
    if (req.body.id == undefined ||
         req.body.date == undefined ||
          req.body.description == undefined ||
           req.body.payer == undefined ||
            req.body.amount == undefined ||
             req.body.amount <= 0) {
                return res.status(400).json({ error: "Invalid expense data"});
            }

    const newExpense = req.body;

    try {
        const data = addExpense(newExpense);
        res.json(data);
    } catch (err) {
        console.error("Error 500 ReadFileSync and/or writeFileSync");
        res.status(500);
    }
})

router.post('/reset', (_req, res) => {
    try {
        const data = resetExpenses();
        res.json(data);
    } catch (err) {
        console.error("Error 500 ReadFileSync and/or writeFileSync");
        res.status(500);
    }
})

module.exports = router