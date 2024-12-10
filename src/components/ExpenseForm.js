// ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && amount && date) {
      addExpense({ category, amount: parseFloat(amount), date });
      setCategory('');
      setAmount('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Expense Category: </label>
        <input
          type="text"
          value={category}
          onChange={handleCategoryChange}
          placeholder="Enter category (e.g., Food, Transport)"
        />
      </div>
      <div>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
        />
      </div>
      <div>
        <label>Date: </label>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
