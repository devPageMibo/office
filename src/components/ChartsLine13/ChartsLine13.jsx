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


export const ChartsLine13 = ({
                                 secondaryGraph1,
                                 secondaryGraph2,
                                 secondaryGraph3,
                                 secondaryGraph4,
                                 secondaryGraph5,
                                 secondaryGraph6,
                                 secondaryGraph7,
                                 secondaryGraph8,
                                 secondaryGraph9,
                                 secondaryGraph10,
                                 secondaryGraph11,
                                 secondaryGraph12,
                                 secondaryGraph13,
    ...chartData13
                             }) => {
    console.log("secondaryGraph13", secondaryGraph13);
    console.log("chartData13", chartData13);
    const labels = ['0', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const updateChartData = (data) => ({

        labels,
        datasets: [
            {
                label: 'Second Graph',
                data: [
                    data.secondaryGraph1,
                    data.secondaryGraph2,
                    data.secondaryGraph3,
                    data.secondaryGraph4,
                    data.secondaryGraph5,
                    data.secondaryGraph6,
                    data.secondaryGraph7,
                    data.secondaryGraph8,
                    data.secondaryGraph9,
                    data.secondaryGraph10,
                    data.secondaryGraph11,
                    data.secondaryGraph12,
                    data.secondaryGraph13,
                ],
                pointRadius: 5,
                pointBackgroundColor: '#5200FF',
                pointBorderWidth: 1,
                pointBorderColor: '#4801E6',
                borderColor: '#4801E6',
                borderWidth: 1,
            },
        ],
    });



    const data = updateChartData({
        secondaryGraph1,
        secondaryGraph2,
        secondaryGraph3,
        secondaryGraph4,
        secondaryGraph5,
        secondaryGraph6,
        secondaryGraph7,
        secondaryGraph8,
        secondaryGraph9,
        secondaryGraph10,
        secondaryGraph11,
        secondaryGraph12,
        secondaryGraph13,
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
            // x: {
            //     display: false,
            //     beginAtZero: true,
            // },
            // y: {
            //     display: false,
            // },
        },
    };

    return (
        <Line options={options} data={data} />
    );
};
