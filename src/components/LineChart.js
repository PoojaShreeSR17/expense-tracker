import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  if (!data || !data.labels || !data.datasets) {
    return <div>No data available for chart</div>;
  }

  return <Line data={data} />;
};

export default LineChart;
