import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { getGlobalProfit } from '../../toolkitReducers'


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
    plugins: {
        legend: {
            labels: {
                generateLabels: function(chart) {
                    // Функция вернет пустой массив, что означает, что в легенде не будет ни одной метки
                    return [];
                }
            }
        },
    },
    // plugins: {
    //     legend: {
    //         position: 'top',
    //     },
    // },
};



export default function G7(props) {
    const dispatch = useDispatch()
    const {globalProfit} = useSelector((store) => store.state)

    React.useEffect(() => {
        dispatch(getGlobalProfit())
    }, [])

    let labelsFromData = globalProfit?.daily_profit_data?.map(item => item.day_name)
    let dataGraphic = globalProfit?.daily_profit_data?.map(item => item.daily_profit)

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        // labels: [1,2,3,4,5,6,7],
        labels: labelsFromData,
        datasets: [
            {
                // label: 'Week Global Profit',
                data: dataGraphic,
                borderColor: '#FFF831',
            },
        ],
    };


    return <>{dataGraphic && <Line options={options} data={data} />}</>;
}
