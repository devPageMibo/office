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
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export const ChartsLine13 = ({...customerData}) => {

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                display: false,
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
        },
        scales: {
            // x: {
            //     display: false,
            //     beginAtZero: true,
            // },
            // y: {
            //     display: false,
            // },
        },
    };

    const labels = ['0', 'Jan',  'Feb',  'Mar',  'Apr',  'May',  'Jun',  'Jul',  'Aug',  'Sep',  'Oct',  'Nov',  'Dec'];



    const data = {
        labels,
        datasets: [
            {
                label: 'MainGraph',
                data: [
                    customerData.secondaryGraph1,
                    customerData.secondaryGraph2,
                    customerData.secondaryGraph3,
                    customerData.secondaryGraph4,
                    customerData.secondaryGraph5,
                    customerData.secondaryGraph5,
                    customerData.secondaryGraph7,
                    customerData.secondaryGraph8,
                    customerData.secondaryGraph9,
                    customerData.secondaryGraph10,
                    customerData.secondaryGraph11,
                    customerData.secondaryGraph12,
                    customerData.secondaryGraph13,
                ],
                pointRadius: 5,
                pointBackgroundColor: '#5200FF',
                pointBorderWidth: 1,
                pointBorderColor: '#4801E6',
                borderColor: '#4801E6',
                borderWidth: 1,
            },
        ],
    };

    return (
        <Line options={options} data={data}/>
    );
}
