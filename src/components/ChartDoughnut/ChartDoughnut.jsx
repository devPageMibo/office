import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import {DoughnutWrap} from "./Style.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartsDoughnut = ({...customerData}) => {
    const totalValue = customerData.assets.reduce((total, asset) => total + asset.amount * asset.price, 0);
    const data = customerData.assets.map(asset => asset.amount * asset.price);

    const doughnutData = {
        labels: customerData.assets.map(asset => `${asset.name} ${(asset.amount * asset.price / totalValue * 100).toFixed(2)}%`),
        datasets: [
            {
                data: data,
                backgroundColor: ['#006FF4', '#FF8C00', '#00A979'],
                borderColor: ['#006FF499', '#FF8C0044', '#00A97944'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false // Приховуємо легенду
            }
        }
    };
    const cryptoIconPath = '/src/assets/images/cryptoIcon/'
    return (
        <DoughnutWrap className='doughnut-wrap'>
            <Doughnut data={doughnutData} options={options}
                      style={{maxWidth: '175px', width: '100%', maxHeight: '175px'}}/>
            <div className='doughnut-labels'>
                {customerData.assets.map(asset => (
                    <div key={asset.id}>
                        <span>
                            <img className="doughnut-icon" src={`${cryptoIconPath}${asset.logoName}`} alt={asset.name}/>
                            {asset.name}
                        </span>
                        <span>{(asset.amount * asset.price / totalValue * 100).toFixed(2)}%</span>
                    </div>
                ))}
            </div>
        </DoughnutWrap>
    );
};

