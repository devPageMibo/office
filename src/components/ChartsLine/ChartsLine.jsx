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

export const ChartsLine = ({ ...customerData }) => {
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
            x: {
                display: false,
                beginAtZero: true,
            },
            y: {
                display: false,
            },
        },
    };

    const labels = [1, 2, 3, 4, 5, 6];

    const data = {
        labels,
        datasets: [
            {
                label: 'MainGraph',
                data: [
                    customerData.mainGraph1,
                    customerData.mainGraph2,
                    customerData.mainGraph3,
                    customerData.mainGraph4,
                    customerData.mainGraph5,
                    customerData.mainGraph6,
                ],
                pointRadius: 5,
                pointBackgroundColor: '#4801E6',
                pointBorderWidth: 1,
                pointBorderColor: '#FF5C00',
                borderColor: '#4801E6',
                borderWidth: 1,
            },
        ],
    };

    return <Line options={options} data={data}  />;
};
