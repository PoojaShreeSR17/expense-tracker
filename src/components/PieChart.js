import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  if (!data || !data.labels || !data.datasets) {
    return <div>No data available for chart</div>;
  }

  return <Pie data={data} />;
};

export default PieChart;
