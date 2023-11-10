import React from 'react';
import useSingleCustomer from '../../../hooks/useSingleCustomer.jsx';
import {SingleCustomerMainInfo} from "../../../components/SingleCustomerMainInfo/SingleCustomerMainInfo.jsx";
import {AdminCustomerPageContent} from "./Styles.jsx";
import {
    SingleCustomerDashboardInfo
} from "../../../components/SingleCustomerDashboardInfo/SingleCustomerDashboardInfo.jsx";
import {log10} from "chart.js/helpers"; // Шлях до вашого хука

const AdminCustomerPage = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    const customerData = useSingleCustomer(id);



    // const formattedId = {
    //     id: id,
    // };
    //
    // console.log('00', formattedId.id)


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

