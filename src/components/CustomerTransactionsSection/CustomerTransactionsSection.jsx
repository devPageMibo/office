import React from "react";
import {CustomerPersonalInfo} from "../CustomerPersonalInfo/CustomerPersonalInfo.jsx";
import {PageCustomerContent} from "../PageCustomerContent/PageCustomerContent.jsx";
import {RecoveryPortfolio} from "../RecoveryPortfolio/RecoveryPortfolio.jsx";
import TransactionsTable from "../TransactionsTable/TransactionsTable.jsx";
import {TransactionsTableContent} from "./Styles.jsx";

const CustomerTransactionsSection = ({...customerData}) => {
    return (
        <TransactionsTableContent>
            <PageCustomerContent>
                <CustomerPersonalInfo {...customerData}/>
                <RecoveryPortfolio{...customerData}/>
                <TransactionsTable {...customerData}/>
            </PageCustomerContent>
        </TransactionsTableContent>
    )
}

export default CustomerTransactionsSection