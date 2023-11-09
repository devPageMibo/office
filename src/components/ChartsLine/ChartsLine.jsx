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

export const ChartsLine = ({
                               mainGraph1,
                               mainGraph2,
                               mainGraph3,
                               mainGraph4,
                               mainGraph5,
                               mainGraph6
}) => {
    const updateChartData = (data) => {
        return {
            labels: [1, 2, 3, 4, 5, 6],
            datasets: [
                {
                    label: 'MainGraph',
                    data: [
                        data.mainGraph1,
                        data.mainGraph2,
                        data.mainGraph3,
                        data.mainGraph4,
                        data.mainGraph5,
                        data.mainGraph6,
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
    };

    const data = updateChartData({
        mainGraph1,
        mainGraph2,
        mainGraph3,
        mainGraph4,
        mainGraph5,
        mainGraph6,
    });

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

    return <Line options={options} data={data} />;
};
