import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import Icon4 from "../../assets/images/icon-4.svg";
import React from "react";
import {ClientsPortfolioContent} from "./Styles.jsx";

export const ClientsPortfolio = ({...customerData}) => {
    return (
        <ClientsPortfolioContent className="clients-portfolio">
            <h2>Statistics</h2>
            <ul>
                <li>
                    <img src={Icon1} alt=""/>
                    <h3>
                        Total Clients:
                    </h3>
                    {customerData.totalClients}
                </li>
                <li>
                    <img src={Icon2} alt=""/>
                    <h3>
                        Successful Cases:
                    </h3>
                    {customerData.successfulCases}
                </li>
                <li>
                    <img src={Icon3} alt=""/>
                    <h3>
                        Amount recovered:
                    </h3>
                    {customerData.amountRecovered}
                </li>
                <li>
                    <img src={Icon4} alt=""/>
                    <h3>
                        Personal Manager:
                    </h3>
                    {customerData.personalManager}
                </li>
            </ul>
        </ClientsPortfolioContent>
    )
}