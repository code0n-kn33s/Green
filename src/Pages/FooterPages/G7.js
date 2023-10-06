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
    // day_name
    // daily_profit
    let labelsFromData = props?.data?.daily_profit_data?.map(item => item.day_name)
    let dataGraphic = props?.data?.daily_profit_data?.map(item => item.daily_profit)

    console.log('labelsFromData :>> ', labelsFromData);
    console.log('dataGraphic :>> ', dataGraphic);
    
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels: labelsFromData,
        // labels: labels,
        datasets: [
            {
                label: 'Week Global Profit',
                data: dataGraphic,
                // data: ["10000", "5000", '8000', '1000', '-1000', '-2000', '9000'],
                borderColor: '#FFF831',
                // backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    console.log('props :>> ', props);

    
    return <Line options={options} data={data} />;
}
