import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: [
        'BTC',
        'USDT'
    ],
    TooltipLabelStyle: {
        backgroundColor: '#000000',
    },
    datasets: [{
        label: 'ArbitrageAI',
        data: [2.8054, 2.8054],
        backgroundColor: [
            '#FF0000',
            '#47B64C',
            '#FF7508'
        ],
        borderColor: [
            '#000000',
            '#000000',
            '#000000',
        ],
        borderWidth: 10,
        cutout: '70%',
        rotation: 160,
        radius: 90,
        hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: {data},
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
};

export default function G1(props) {
    return (

        <Doughnut
            options={config}
            config={config}
            data={data}
            {...props}
        />
    )
}