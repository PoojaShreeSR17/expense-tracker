import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';

const ChartComponent = ({ expenses, currency, chartType }) => {
  if (!expenses || expenses.length === 0) {
    return <div>No expenses available</div>;
  }

  const chartData = {
    labels: expenses.map(expense => expense.category),  // Or any other category you want for labels
    datasets: [{
      label: 'Expenses',
      data: expenses.map(expense => expense.amount),  // Mapping expense amount to data
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

export default ChartComponent;
