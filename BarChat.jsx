import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChat = ({ clothes }) => {
  const data = {
    labels: clothes.map(cloth => cloth.name),
    datasets: [
      {
        label: 'Số lượng tồn kho',
        data: clothes.map(cloth => cloth.quantity),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Thống kê số lượng tồn kho',
      },
    },
  };

  return (
    <div className="Barchat-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChat;