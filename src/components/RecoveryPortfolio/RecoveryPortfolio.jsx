import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import Icon4 from "../../assets/images/icon-4.svg";
import Icon5 from "../../assets/images/icon-5.svg";
import Icon6 from "../../assets/images/icon-6.svg";
import React from "react";
import {RecoveryPortfolioContent} from "./Styles.jsx";

export const RecoveryPortfolio = ({...customerData}) => {
    return (
        <RecoveryPortfolioContent className="recovery-portfolio">
            <h2>Recovery Portfolio</h2>
            <ul>
                <li>
                    <img src={Icon1} alt=""/>
                    <h3>
                        Total Loss:
                    </h3>
                    {customerData.totalLoss}
                </li>
                <li>
                    <img src={Icon2} alt=""/>
                    <h3>
                        Total Recovered:
                    </h3>
                    {customerData.totalRecovered}
                </li>
                <li>
                    <img src={Icon3} alt=""/>
                    <h3>
                        Payment Method:
                    </h3>
                    {customerData.paymentMethod}
                </li>
                <li>
                    <img src={Icon4} alt=""/>
                    <h3>
                        Wallet:
                    </h3>
                    {customerData.wallet}
                </li>
                <li>
                    <img src={Icon5} alt=""/>
                    <h3>
                        Smart Contract ID:
                    </h3>
                    {customerData.smartContractId}
                </li>
                <li>
                    <img src={Icon6} alt=""/>
                    <h3>
                        Scammed By:
                    </h3>
                    {customerData.scammedBy}
                </li>

            </ul>
        </RecoveryPortfolioContent>
    )
}