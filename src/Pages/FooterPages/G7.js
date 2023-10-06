import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
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
    Legend
);

export const options = {
    responsive: true,
    // plugins: {
    //     legend: {
    //         position: 'top',
    //     },
    // },
};



export default function G7(props) {
    let labelsFromData = props?.data?.daily_profit_data?.map(item => item.day_name)
    let dataGraphic = props?.data?.daily_profit_data?.map(item => item.daily_profit)

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels: labelsFromData,
        datasets: [
            {
                label: 'Week Global Profit',
                data: dataGraphic,
                borderColor: '#FFF831',
            },
        ],
    };


    return <Line options={options} data={data} />;
}
