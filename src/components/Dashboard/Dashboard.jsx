import React from "react";
import Tether from "./../../assets/images/Tether.svg"
import Bitcoin from "./../../assets/images/Bitcoin .svg"
import Ethereum from "./../../assets/images/Ethereum.svg"
import {DashboardContent} from "./Styles.jsx";
import {ChartsLine} from "../ChartsLine/ChartsLine.jsx";
import {ChartsLine13} from "../ChartsLine13/ChartsLine13.jsx";
import {ChartsDoughnut} from "../ChartDoughnut/ChartDoughnut.jsx";
import {CustomerPersonalInfo} from "../CustomerPersonalInfo/CustomerPersonalInfo.jsx";

export const Dashboard = ({...customerData}) => {
    if (!customerData || !customerData.assets) {
        return <div>Loading...</div>; // or any other loading indicator/message
    }

    const differenceAmountValue = parseFloat(customerData?.differenceAmount);
    const isNegative = differenceAmountValue < 0;
    const formattedDifferenceAmount = `${isNegative ? "-" : "+"}${customerData?.currencySymbol}${Math.abs(
        differenceAmountValue
    ).toFixed(2)}`;

    const cryptoIconPath = '/src/assets/images/cryptoIcon/'

    return (
        <DashboardContent className="dashboard">
            <h1>Dashboard</h1>
            <CustomerPersonalInfo {...customerData}/>
            <div className="worth">
                <div className="worth_left">
                    <h2 className="total">Total Worth</h2>
                    <h2 className="total_worth">{customerData?.currencySymbol}
                        {/*{customerData?.assets.reduce((total, asset) => total + asset.amount * asset.price, 0).toFixed(3)}*/}
                        {customerData?.totalWorth}
                    </h2>
                    <div className="difference">
                        <span className={`difference_amount ${isNegative ? "negative" : "positive"}`}>
                            {formattedDifferenceAmount}
                        </span>
                        <span
                            className={`difference_percent ${customerData?.differencePercent < 0 ? "negative" : "positive"}`}>
                            <svg width="11" height="6" viewBox="0 0 11 6" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 6L0.73686 0.75L10.2631 0.75L5.5 6Z"/>
                            </svg>
                            {customerData?.differencePercent > 0 ? "+" : "-"}
                            {Math.abs(customerData?.differencePercent).toFixed(2)}%
                        </span>
                    </div>
                </div>
                <div className="worth_right" style={{maxWidth: '540px', width: '100%', maxHeight: '111px'}}>
                    <ChartsLine{...customerData}/>
                </div>
            </div>
            <div className="assets">
                <h2>
                    <span>Assets</span>
                    <span>
                        {customerData?.currencySymbol}
                        {customerData?.assets.reduce((total, asset) => total + asset.amount * asset.price, 0).toFixed(3)}
                    </span>
                </h2>
                <div className="assets_table">
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customerData?.assets.map((asset) => (
                            <tr key={asset.id}>
                                <td>
                                    <img className="assets_icon" src={`${cryptoIconPath}${asset.logoName}`}
                                         alt={asset.name}/>
                                    {asset.name}
                                </td>
                                <td>{asset.amount.toFixed(3)}</td>
                                <td>${asset.price.toFixed(2)}</td>
                                <td>${(asset.amount * asset.price).toFixed(3)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="assets_charts">
                    <div className="assets_charts-line" style={{maxWidth: '555px', width: '100%', maxHeight: '111px'}}>
                        <ChartsLine{...customerData}/>
                    </div>
                    <div className="assets_charts-doughnut">
                        <ChartsDoughnut{...customerData} />
                    </div>
                </div>
            </div>
            <div className="chart">
                <div style={{overflow: 'scroll'}}>
                    <div className="charts-line"
                         style={{
                             padding: '20px',
                             maxWidth: '958px',
                             minHeight: '369px',
                             height: '100%',
                             margin: '0 auto',
                             overflow: 'scroll',
                             width: '100%',
                             // overflow: 'hidden',
                         }}>
                        <ChartsLine13 {...customerData}/>
                    </div>
                </div>
            </div>
        </DashboardContent>
    )
};
