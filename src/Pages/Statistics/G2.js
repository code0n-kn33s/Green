import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
        },
    },
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data1 = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => Math.floor(Math.random() * 2000) - 1000),
            backgroundColor: 'rgb(255, 99, 132)',
            stack: 'Stack 0',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => Math.floor(Math.random() * 2000) - 1000),
            backgroundColor: 'rgb(75, 192, 192)',
            stack: 'Stack 0',
        },
        {
            label: 'Dataset 3',
            data: labels.map(() => Math.floor(Math.random() * 2000) - 1000),
            backgroundColor: 'rgb(53, 162, 235)',
            stack: 'Stack 1',
        },
    ],
};
const data = {

    labels: ["01-02", "01-03", "01-04", "01-05", "01-06", "01-07", "01-08"],
    datasets: [
        {
            label: 'Прибыль платформы от сделок',
            data: [10, 20, -30, 40, 50, 60, 70],
            borderColor: "#FFF831",
            backgroundColor: "#FFF831",
            borderWidth: 1,
            borderRadius: 10,
            borderSkipped: false,
        }
    ],
    annotations: [-40, -20, 0, 20, 40, 60, 80]
};


export default function G2(props) {
    return (

        <Bar
            // config={config}
            // options={config}
            data={data}
            {...props}
        />
    )
}