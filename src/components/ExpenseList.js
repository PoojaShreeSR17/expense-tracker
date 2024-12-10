// ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses, removeExpense, currency, currencySymbols }) => {
  return (
    <div>
      <h2>Expense List</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <span>{expense.category}</span> - 
              <span>{currencySymbols[currency]}{expense.amount.toFixed(2)}</span> - 
              <span>{new Date(expense.date).toLocaleDateString()}</span> 
              <button onClick={() => removeExpense(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
