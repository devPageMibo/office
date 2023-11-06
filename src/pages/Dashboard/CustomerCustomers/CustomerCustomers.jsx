import useCustomerData from "../../../hooks/useCustomerData.jsx";
import React from "react";
import {CustomerCustomersSection} from "../../../components/CustomerCustomersSection/CustomerCustomersSection.jsx";
import {CustomerCustomersContent} from "./Styles.jsx";

const CustomerCustomers = () => {
    const {customerData, error} = useCustomerData();
    return (
        <CustomerCustomersContent>
            <div className="transactions_content">
                <CustomerCustomersSection {...customerData}/>
            </div>
            {error && <div className="error-message">{error}</div>}
        </CustomerCustomersContent>
    )
}

export default CustomerCustomers;