import React from "react";

import {PageCustomerContent} from "../PageCustomerContent/PageCustomerContent.jsx";
import CustomerCustomersTable from "../CustomerCustomersTable/CustomerCustomersTable.jsx";
import {CustomerContent} from "./Styles.jsx";

export const AdminCustomersSection = () => {
    return (
        <CustomerContent>
            <PageCustomerContent>
                <CustomerCustomersTable/>
            </PageCustomerContent>
        </CustomerContent>
    )
}