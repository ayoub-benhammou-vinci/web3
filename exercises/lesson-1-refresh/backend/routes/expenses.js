const express = require('express')
const { getAllExpenses, addExpense } = require('../services/expenses')
const router = express.Router();

router.get('/', (_req, res) => {
    res.json(getAllExpenses());
})

router.post('/', (req, res) => {
    const newExpense = req.body;
    res.json(addExpense(newExpense));
})

module.exports = router