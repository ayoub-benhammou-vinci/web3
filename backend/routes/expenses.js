const express = require("express");
const {
  getAllExpenses,
  addExpense,
  resetExpenses,
} = require("../services/expenses");
const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const expenses = await getAllExpenses();
    res.json(expenses);
  } catch (err) {
    console.error("Error 500 ReadFileSync");
    res.status(500);
  }
});

router.post("/", async (req, res) => {
  if (
    req.body.description == undefined ||
    req.body.payer == undefined ||
    req.body.amount == undefined ||
    req.body.amount < 0
  ) {
    return res.status(400).json({ error: "Invalid expense data" });
  }

  const newExpense = {
    date: req.body.date,
    description: req.body.description,
    payer: req.body.payer,
    amount: parseFloat(req.body.amount),
  }

  try {
    const data = await addExpense(newExpense);
    res.json(data);
  } catch (err) {
    console.error("Error 500 ReadFileSync and/or writeFileSync");
    res.status(500);
  }
});

router.post("/reset", async (_req, res) => {
  try {
    const data = await resetExpenses();
    res.json(data);
  } catch (err) {
    console.error("Error 500 ReadFileSync and/or writeFileSync");
    res.status(500);
  }
});

module.exports = router;
