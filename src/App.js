import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [currency, setCurrency] = useState('USD');
  const [chartType, setChartType] = useState('bar');

  const currencySymbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    AUD: "A$",
    CAD: "C$",
    JPY: "¥",
    CNY: "¥",
    INR: "₹",
    MXN: "$",
    BRL: "R$",
    CHF: "Fr",
    ZAR: "R"
  };

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const removeExpense = (index) => {
    setExpenses((prevExpenses) => prevExpenses.filter((_, i) => i !== index));
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleChartTypeChange = (e) => {
    setChartType(e.target.value);
  };

  const renderChart = () => {
    // Prepare data for the chart
    const chartData = {
      labels: expenses.map(expense => expense.type),  // Expense types as labels
      datasets: [{
        label: 'Expense Amount',
        data: expenses.map(expense => expense.amount),  // Expense amounts as data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };

    switch (chartType) {
      case 'bar':
        return <BarChart data={chartData} />;
      case 'pie':
        return <PieChart data={chartData} />;
      case 'line':
        return <LineChart data={chartData} />;
      default:
        return <BarChart data={chartData} />;
    }
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} removeExpense={removeExpense} currency={currency} currencySymbols={currencySymbols} />

      <div>
        <label>Select Currency: </label>
        <select value={currency} onChange={handleCurrencyChange}>
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="AUD">AUD - Australian Dollar</option>
          <option value="CAD">CAD - Canadian Dollar</option>
          <option value="JPY">JPY - Japanese Yen</option>
          <option value="CNY">CNY - Chinese Yuan</option>
          <option value="INR">INR - Indian Rupee</option>
          <option value="MXN">MXN - Mexican Peso</option>
          <option value="BRL">BRL - Brazilian Real</option>
          <option value="CHF">CHF - Swiss Franc</option>
          <option value="ZAR">ZAR - South African Rand</option>
        </select>
      </div>

      <div>
        <label>Select Chart Type: </label>
        <select value={chartType} onChange={handleChartTypeChange}>
          <option value="bar">Bar</option>
          <option value="pie">Pie</option>
          <option value="line">Line</option>
        </select>
      </div>

      {renderChart()}
    </div>
  );
};

export default App;
