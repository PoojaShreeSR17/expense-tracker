import React, { useState } from 'react';
import ExpenseList from './components/ExpenseList'; // Default import
import ChartComponent from './components/ChartComponent'; // Default import

const App = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedChartType, setSelectedChartType] = useState('bar');
  const [selectedDate, setSelectedDate] = useState('');

  const currencies = ['USD', 'EUR', 'GBP', 'INR', 'AUD', 'CAD'];
  const chartTypes = ['bar', 'pie', 'line'];

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const handleChartTypeChange = (e) => {
    setSelectedChartType(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleAddExpense = () => {
    const newExpense = {
      amount: Math.random() * 1000,
      category: 'Food',
      date: selectedDate || new Date().toLocaleDateString(),
      currency: selectedCurrency,
    };
    setExpenseData([...expenseData, newExpense]);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="currency">Select Currency</label>
          <select id="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="chart-type">Select Chart Type</label>
          <select id="chart-type" value={selectedChartType} onChange={handleChartTypeChange}>
            {chartTypes.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Select Date</label>
          <input type="date" id="date" value={selectedDate} onChange={handleDateChange} />
        </div>
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>

      <ExpenseList expenseData={expenseData} />
      <ChartComponent
        expenseData={expenseData}
        selectedChartType={selectedChartType}
        selectedCurrency={selectedCurrency}
      />
    </div>
  );
};

export default App;
