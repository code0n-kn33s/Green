import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
};

const labels = ['6:00', '18:00', '23:00', ];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
    //   data: labels.map(() => Math.floor(Math.random() * 2000) - 1000),
      data: ["-1300", "1900", "4400"],
      borderColor: '#FFF831',
      backgroundColor: '#fff83170',
    },
  ],
};

export default function G5() {
  return <Line options={options} data={data} />;
}
