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



const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// const labels = ["01-02", "01-03", "01-04", "01-05", "01-06", "01-07", "01-08"]


export default function G1(props) {


    const data = {
        labels: labels,
        datasets: [{
            label: 'Interval Percentage',
            data: props.prop.data,
            // data: [2, 5, 3, 8, 14, 10, 6],
            fill: false,
            borderColor: '#FFF831',
            borderWidth: 2,
            tension: 0,
            pointStyle: 'triangle',
            pointBackgroundColor: "#ffffff",
            pointBorderColor: "#FFF831",
            pointBorderWidth: 1,
            pointRadius: 7,
            pointHoverRadius: 10
        }]
    }

    const config = {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    display: true,
                    ticks: {
                        callback: function (value, index, values) {
                            if (index === 0 || index === values.length - 1) {
                                return (value + "%");
                            } else {
                                return '';
                            }
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                annotation: {
                    annotations: [{
                        type: 'line',
                        mode: 'horizontal',
                        scaleID: 'y',
                        value: 0,
                        borderColor: '#FFF831',
                        borderRadius: '50%',
                        borderWidth: 1
                    },
                    {
                        type: 'line',
                        mode: 'horizontal',
                        scaleID: 'y',
                        value: 20,
                        borderColor: '#FFF831',
                        borderWidth: 1,
                        borderRadius: '50%',
                    }],
                }
            }
        }
    };


    return (

        <Line
            options={config}
            {...config}
            data={data}
            {...props}
        />
    )
}