import React from 'react';
import useSingleCustomer from '../../../hooks/useSingleCustomer.jsx';
import {SingleCustomerMainInfo} from "../../../components/SingleCustomerMainInfo/SingleCustomerMainInfo.jsx";
import {AdminCustomerPageContent} from "./Styles.jsx";
import {
    SingleCustomerDashboardInfo
} from "../../../components/SingleCustomerDashboardInfo/SingleCustomerDashboardInfo.jsx";

const AdminCustomerPage = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    const customerData = useSingleCustomer(id);

    return (
        <AdminCustomerPageContent>
            {customerData ? (
                <>
                    <SingleCustomerMainInfo {...customerData}/>
                    <SingleCustomerDashboardInfo {...customerData} />
                </>
            ) : (
                <p>Loading customer data...</p>
            )}
        </AdminCustomerPageContent>
    );
};

export default AdminCustomerPage;

